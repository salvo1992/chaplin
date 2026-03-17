// TEMPORARY MINIMAL PAGE - Components disabled to fix memory crash
// Original components: HeroSection, StorySection, ServicesSection, RoomsPreview, Footer

import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Minimal static header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#c9a84c]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-serif text-white">CHAPLIN</Link>
          <nav className="flex gap-4">
            <Link href="/camere" className="text-white/80 hover:text-[#c9a84c] text-sm">L'Appartamento</Link>
            <Link href="/prenota" className="text-white/80 hover:text-[#c9a84c] text-sm">Prenota</Link>
            <Link href="/contatti" className="text-white/80 hover:text-[#c9a84c] text-sm">Contatti</Link>
          </nav>
        </div>
      </header>

      {/* Hero section - static */}
      <div className="flex items-center justify-center min-h-screen text-white pt-16">
        <div className="text-center p-8">
          <p className="text-sm tracking-[0.3em] text-[#c9a84c]/80 mb-4">LUXURY HOLIDAY HOUSE | VITERBO</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6">CHAPLIN</h1>
          <p className="text-lg text-white/60 mb-8">Via della Pettinara, 48 - Viterbo</p>
          <Link 
            href="/prenota" 
            className="inline-block px-8 py-3 bg-[#c9a84c] text-[#1a1a1a] font-medium hover:bg-[#d4af37] transition-colors"
          >
            Prenota Ora
          </Link>
        </div>
      </div>

      {/* Minimal footer */}
      <footer className="bg-[#1a1a1a] border-t border-[#c9a84c]/20 py-8 text-center text-white/60 text-sm">
        <p>© 2025 CHAPLIN Luxury Holiday House</p>
        <p>Tutti i diritti riservati</p>
      </footer>
    </main>
  )
}
