import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Minimal version to fix memory issues - components will be re-added one by one
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center min-h-[80vh] bg-[#1a1a1a] text-white">
        <div className="text-center p-8">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">CHAPLIN</h1>
          <p className="text-lg text-[#c9a84c] mb-2">Luxury Holiday House</p>
          <p className="text-sm text-gray-400">Via della Pettinara, 48 - Viterbo</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
