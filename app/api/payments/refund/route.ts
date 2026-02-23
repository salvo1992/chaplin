import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { getAdminDb } from "@/lib/firebase-admin"
import { FieldValue } from "firebase-admin/firestore"
import { nexiClient } from "@/lib/nexi-client"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
})

export async function POST(request: NextRequest) {
  try {
    const { bookingId, amount, reason } = await request.json()

    if (!bookingId || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const db = getAdminDb()
    const bookingDoc = await db.collection("bookings").doc(bookingId).get()

    if (!bookingDoc.exists) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 })
    }

    const booking = bookingDoc.data()!
    const paymentProvider = booking.paymentProvider || "stripe"

    if (paymentProvider === "nexi") {
      // --- NEXI REFUND ---
      if (!booking.nexiTransactionId) {
        return NextResponse.json(
          { error: "No Nexi transaction found for this booking. Refund must be processed manually." },
          { status: 400 },
        )
      }

      try {
        const refundResult = await nexiClient.refund({
          transactionId: booking.nexiTransactionId,
          amount: Math.round(amount * 100), // cents
          currency: booking.currency || "EUR",
          description: `Rimborso prenotazione ${bookingId}${reason ? ` - ${reason}` : ""}`,
        })

        await db
          .collection("bookings")
          .doc(bookingId)
          .update({
            refundAmount: FieldValue.increment(amount),
            nexiRefundOperationId: refundResult.operationId,
            refundStatus: "succeeded",
            refundProvider: "nexi",
            updatedAt: FieldValue.serverTimestamp(),
          })

        return NextResponse.json({
          success: true,
          refundId: refundResult.operationId,
          amount,
          status: "succeeded",
          provider: "nexi",
        })
      } catch (nexiError: any) {
        console.error("[Nexi Refund Error]", nexiError)
        // If Nexi refund fails, mark as pending manual processing
        await db.collection("bookings").doc(bookingId).update({
          pendingRefund: {
            amount,
            reason: reason || "booking_cancelled",
            requestedAt: FieldValue.serverTimestamp(),
            status: "pending_manual_processing",
            provider: "nexi",
            error: nexiError.message,
          },
          updatedAt: FieldValue.serverTimestamp(),
        })

        return NextResponse.json({
          success: true,
          amount,
          status: "pending_manual_processing",
          provider: "nexi",
          message: "Rimborso Nexi in elaborazione manuale. Contattare il supporto se necessario.",
        })
      }
    } else {
      // --- STRIPE REFUND ---
      if (!booking.stripePaymentIntentId) {
        return NextResponse.json(
          { error: "No Stripe payment intent found for this booking. Refund must be processed manually." },
          { status: 400 },
        )
      }

      const refund = await stripe.refunds.create({
        payment_intent: booking.stripePaymentIntentId,
        amount: Math.round(amount * 100), // Convert to cents
        reason: reason || "requested_by_customer",
      })

      await db
        .collection("bookings")
        .doc(bookingId)
        .update({
          refundAmount: FieldValue.increment(amount),
          stripeRefundId: refund.id,
          refundStatus: refund.status,
          refundProvider: "stripe",
          updatedAt: FieldValue.serverTimestamp(),
        })

      return NextResponse.json({
        success: true,
        refundId: refund.id,
        amount: refund.amount / 100,
        status: refund.status,
        provider: "stripe",
      })
    }
  } catch (error: any) {
    console.error("Error processing refund:", error)
    return NextResponse.json({ error: error.message || "Failed to process refund" }, { status: 500 })
  }
}
