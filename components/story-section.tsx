"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Wifi, Home, TreePine, Utensils, Tv, Wind, Star, Users, Snowflake, Flame } from "lucide-react"

export function StorySection() {
  const { language } = useLanguage()

  const storyContent: Record<string, { title: string; subtitle: string; paragraph1: string; paragraph2: string; galleryTitle: string }> = {
    it: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Bed & Breakfast a Viterbo in zona centro",
      paragraph1:
        "CHAPLIN Luxury Holiday House e una suite esclusiva in formula B&B, ideale per una fuga di coppia all'insegna del relax e del benessere. L'ambiente raffinato e intimo e progettato per offrire il massimo comfort, con una vasca idromassaggio super deluxe dotata di 32 getti, quattro cascate massaggianti retroilluminate, cromoterapia e ozonizzazione. La sauna a infrarossi al quarzo, arricchita da cromoterapia, ionizzatore e aromaterapia, completa l'esperienza di rigenerazione.",
      paragraph2:
        "La suite dispone di una TV da 55'' con accesso a Netflix, Prime Video e Disney+, oltre a un bagno privato con doccia idromassaggio. L'ampia zona giorno include una cucina attrezzata, un angolo colazione e un'area relax con divano e poltrona massaggiante, garantendo agli ospiti un soggiorno di puro piacere e comfort.",
      galleryTitle: "Galleria fotografica",
    },
    en: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Bed & Breakfast in Viterbo city center",
      paragraph1:
        "CHAPLIN Luxury Holiday House is an exclusive B&B suite, ideal for a couple's getaway focused on relaxation and wellness. The refined and intimate environment is designed to offer maximum comfort, with a super deluxe hydromassage tub equipped with 32 jets, four backlit massage waterfalls, chromotherapy, and ozonization. The infrared quartz sauna, enriched with chromotherapy, ionizer, and aromatherapy, completes the regeneration experience.",
      paragraph2:
        "The suite features a 55'' TV with access to Netflix, Prime Video, and Disney+, as well as a private bathroom with hydromassage shower. The spacious living area includes an equipped kitchen, a breakfast corner, and a relaxation area with sofa and massage armchair, ensuring guests a stay of pure pleasure and comfort.",
      galleryTitle: "Photo Gallery",
    },
    fr: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Bed & Breakfast a Viterbo au centre-ville",
      paragraph1:
        "CHAPLIN Luxury Holiday House est une suite exclusive en formule B&B, ideale pour une escapade en couple sous le signe de la detente et du bien-etre.",
      paragraph2:
        "La suite dispose d'une TV 55'' avec acces a Netflix, Prime Video et Disney+, ainsi que d'une salle de bain privee avec douche hydromassante.",
      galleryTitle: "Galerie photo",
    },
    es: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Bed & Breakfast en Viterbo en el centro",
      paragraph1:
        "CHAPLIN Luxury Holiday House es una suite exclusiva en formula B&B, ideal para una escapada en pareja en busca de relajacion y bienestar.",
      paragraph2:
        "La suite cuenta con una TV de 55'' con acceso a Netflix, Prime Video y Disney+, ademas de un bano privado con ducha de hidromasaje.",
      galleryTitle: "Galeria fotografica",
    },
    de: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Bed & Breakfast in Viterbo im Stadtzentrum",
      paragraph1:
        "CHAPLIN Luxury Holiday House ist eine exklusive B&B-Suite, ideal fur einen Paaurlaub im Zeichen von Entspannung und Wohlbefinden.",
      paragraph2:
        "Die Suite verfugt uber einen 55'' Fernseher mit Zugang zu Netflix, Prime Video und Disney+ sowie ein eigenes Bad mit Hydromassage-Dusche.",
      galleryTitle: "Fotogalerie",
    },
  }

  const content = storyContent[language] || storyContent.it

  const amenities = [
    { icon: Wifi, label: "Wifi Gratis" },
    { icon: Home, label: "Dimora storica" },
    { icon: TreePine, label: "Giardino" },
    { icon: Utensils, label: "Angolo cottura" },
    { icon: Tv, label: "Televisione" },
    { icon: Wind, label: "Phon" },
    { icon: Star, label: "Charme" },
    { icon: Users, label: "Famiglie" },
    { icon: Snowflake, label: "Clima" },
    { icon: Flame, label: "Riscaldamento" },
  ]

  const galleryImages = [
    { src: "/images/bb-hero.jpg", alt: "Vista esterna" },
    { src: "/images/spa1.jpg", alt: "Spa" },
    { src: "/images/room-1.jpg", alt: "Camera" },
    { src: "/images/pool.jpg", alt: "Piscina" },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title Section */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1a] mb-3 sm:mb-4 tracking-wide leading-tight">
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4a90c9] mb-5 sm:mb-6">
            {content.subtitle}
          </p>
          <div className="w-12 sm:w-16 h-1 bg-[#4a90c9] mx-auto" />
        </div>

        {/* Content */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <p className="text-[#333] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 text-center sm:text-left">
            {content.paragraph1}
          </p>
          <p className="text-[#333] text-base sm:text-lg leading-relaxed text-center sm:text-left">
            {content.paragraph2}
          </p>
        </div>

        {/* Amenities */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-center min-w-[60px] sm:min-w-[70px]"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f8f8f5] flex items-center justify-center text-[#6b6560]">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] sm:text-xs text-[#6b6560] max-w-[60px] sm:max-w-[70px] leading-tight">
                    {amenity.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-center text-[#1a1a1a] mb-6 sm:mb-8">
            {content.galleryTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden relative group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {index === 3 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-base sm:text-lg font-light">+17</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
