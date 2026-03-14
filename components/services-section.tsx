"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function ServicesSection() {
  const { language } = useLanguage()

  const sectionContent: Record<string, { title: string; subtitle: string; features: string[]; noDeposit: string; freeCancellation: string; infoBtn: string; bookBtn: string }> = {
    it: {
      title: "La nostra camera",
      subtitle: "Suite Cielo Stellato",
      features: ["Bagno in camera", "Colazione inclusa", "Numero di ospiti: 2", "Camere disponibili: 1"],
      noDeposit: "Nessun anticipo, paghi al check-in",
      freeCancellation: "Cancellazione GRATUITA!",
      infoBtn: "Info",
      bookBtn: "Prenota",
    },
    en: {
      title: "Our room",
      subtitle: "Starry Sky Suite",
      features: ["En-suite bathroom", "Breakfast included", "Number of guests: 2", "Available rooms: 1"],
      noDeposit: "No deposit, pay at check-in",
      freeCancellation: "FREE cancellation!",
      infoBtn: "Info",
      bookBtn: "Book",
    },
    fr: {
      title: "Notre chambre",
      subtitle: "Suite Ciel Etoile",
      features: ["Salle de bain privee", "Petit-dejeuner inclus", "Nombre d'hotes: 2", "Chambres disponibles: 1"],
      noDeposit: "Aucun acompte, payez a l'arrivee",
      freeCancellation: "Annulation GRATUITE!",
      infoBtn: "Info",
      bookBtn: "Reserver",
    },
    es: {
      title: "Nuestra habitacion",
      subtitle: "Suite Cielo Estrellado",
      features: ["Bano en habitacion", "Desayuno incluido", "Numero de huespedes: 2", "Habitaciones disponibles: 1"],
      noDeposit: "Sin anticipo, paga en el check-in",
      freeCancellation: "Cancelacion GRATIS!",
      infoBtn: "Info",
      bookBtn: "Reservar",
    },
    de: {
      title: "Unser Zimmer",
      subtitle: "Suite Sternenhimmel",
      features: ["Eigenes Bad", "Fruhstuck inklusive", "Anzahl der Gaste: 2", "Verfugbare Zimmer: 1"],
      noDeposit: "Keine Anzahlung, Zahlung beim Check-in",
      freeCancellation: "KOSTENLOSE Stornierung!",
      infoBtn: "Info",
      bookBtn: "Buchen",
    },
  }

  const content = sectionContent[language] || sectionContent.it

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#f8f8f5]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1a] mb-3 sm:mb-4 tracking-wide">
            {content.title}
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#4a90c9] mx-auto" />
        </div>

        {/* Room Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[400px]">
              <Image
                src="/images/room-1.jpg"
                alt={content.subtitle}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm text-green-600 font-medium">
                  {content.noDeposit}
                </span>
                <span className="text-xs sm:text-sm text-green-600 font-medium">
                  {content.freeCancellation}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] mb-4 sm:mb-6">
                {content.subtitle}
              </h3>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {content.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-[#6b6560]">
                    <span className="w-1.5 h-1.5 bg-[#4a90c9] rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white rounded-none py-5 sm:py-6 text-sm sm:text-base"
                >
                  <Link href="/camere/1">{content.infoBtn}</Link>
                </Button>
                <Button
                  asChild
                  className="flex-1 bg-[#4a90c9] hover:bg-[#3a7db3] text-white rounded-none py-5 sm:py-6 text-sm sm:text-base"
                >
                  <Link href="/prenota">{content.bookBtn}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
