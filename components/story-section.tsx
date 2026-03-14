"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Wifi, Home, Droplets, Utensils, Tv, Wind, Car, Users, Snowflake, Flame } from "lucide-react"

export function StorySection() {
  const { language } = useLanguage()

  const storyContent: Record<string, { title: string; subtitle: string; paragraph1: string; paragraph2: string; galleryTitle: string }> = {
    it: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Appartamento esclusivo a Viterbo",
      paragraph1:
        "CHAPLIN e un elegante appartamento indipendente situato a Viterbo, ideale per una fuga di coppia o per famiglie in cerca di relax e benessere. L'ambiente raffinato e curato nei minimi dettagli offre il massimo comfort: piscina privata ad uso esclusivo, spa con vasca idromassaggio dotata di 32 getti, cascate massaggianti retroilluminate, cromoterapia e ozonizzazione.",
      paragraph2:
        "L'appartamento dispone di una TV da 55'' con accesso a Netflix, Prime Video e Disney+, bagno privato con doccia idromassaggio, ampia zona giorno con cucina attrezzata, angolo colazione e area relax con divano e poltrona massaggiante. 57 mq di puro comfort per un soggiorno indimenticabile.",
      galleryTitle: "Galleria fotografica",
    },
    en: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Exclusive apartment in Viterbo",
      paragraph1:
        "CHAPLIN is an elegant independent apartment located in Viterbo, ideal for a couple's getaway or families seeking relaxation and wellness. The refined environment, with attention to every detail, offers maximum comfort: private pool for exclusive use, spa with hydromassage tub equipped with 32 jets, backlit massage waterfalls, chromotherapy and ozonization.",
      paragraph2:
        "The apartment features a 55'' TV with access to Netflix, Prime Video and Disney+, private bathroom with hydromassage shower, spacious living area with equipped kitchen, breakfast corner and relaxation area with sofa and massage armchair. 57 sqm of pure comfort for an unforgettable stay.",
      galleryTitle: "Photo Gallery",
    },
    fr: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Appartement exclusif a Viterbo",
      paragraph1:
        "CHAPLIN est un elegant appartement independant situe a Viterbo, ideal pour une escapade en couple ou en famille a la recherche de detente et de bien-etre.",
      paragraph2:
        "L'appartement dispose d'une TV 55'' avec acces a Netflix, Prime Video et Disney+, salle de bain privee avec douche hydromassante. 57 m2 de pur confort.",
      galleryTitle: "Galerie photo",
    },
    es: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Apartamento exclusivo en Viterbo",
      paragraph1:
        "CHAPLIN es un elegante apartamento independiente situado en Viterbo, ideal para una escapada en pareja o familias en busca de relajacion y bienestar.",
      paragraph2:
        "El apartamento cuenta con una TV de 55'' con acceso a Netflix, Prime Video y Disney+, bano privado con ducha de hidromasaje. 57 m2 de puro confort.",
      galleryTitle: "Galeria fotografica",
    },
    de: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Exklusive Wohnung in Viterbo",
      paragraph1:
        "CHAPLIN ist eine elegante unabhangige Wohnung in Viterbo, ideal fur einen Paarurlaub oder Familien auf der Suche nach Entspannung und Wohlbefinden.",
      paragraph2:
        "Die Wohnung verfugt uber einen 55'' Fernseher mit Zugang zu Netflix, Prime Video und Disney+, eigenes Bad mit Hydromassage-Dusche. 57 qm purer Komfort.",
      galleryTitle: "Fotogalerie",
    },
  }

  const content = storyContent[language] || storyContent.it

  const amenities = [
    { icon: Wifi, label: "WiFi Gratis" },
    { icon: Home, label: "Appartamento" },
    { icon: Droplets, label: "Piscina privata" },
    { icon: Utensils, label: "Cucina" },
    { icon: Tv, label: "Smart TV 55''" },
    { icon: Wind, label: "Spa & Wellness" },
    { icon: Car, label: "Parcheggio" },
    { icon: Users, label: "Max 4 ospiti" },
    { icon: Snowflake, label: "Aria condiz." },
    { icon: Flame, label: "Riscaldamento" },
  ]

  const galleryImages = [
    { src: "/images/1.jpg", alt: "Interno appartamento" },
    { src: "/images/2.jpg", alt: "Camera da letto" },
    { src: "/images/pool.jpg", alt: "Piscina privata" },
    { src: "/images/spa1.jpg", alt: "Spa e wellness" },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#f5f5f0]">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title Section */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1a] mb-3 sm:mb-4 tracking-wide leading-tight"
            style={{ fontFamily: "var(--font-cormorant), var(--font-playfair), Georgia, serif" }}
          >
            {content.title}
          </h2>
          <p className="text-base sm:text-lg text-[#c9a84c] mb-5 sm:mb-6">
            {content.subtitle}
          </p>
          <div className="w-12 sm:w-16 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>

        {/* Content */}
        <div className="mb-12 sm:mb-14">
          <p className="text-[#4a4a4a] text-base sm:text-lg leading-relaxed mb-6 text-center">
            {content.paragraph1}
          </p>
          <p className="text-[#4a4a4a] text-base sm:text-lg leading-relaxed text-center">
            {content.paragraph2}
          </p>
        </div>

        {/* Amenities */}
        <div className="mb-12 sm:mb-14">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#c9a84c] shadow-sm">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-[#6b6560] max-w-[70px] leading-tight">
                    {amenity.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <h3 
            className="text-xl sm:text-2xl text-center text-[#1a1a1a] mb-6 sm:mb-8"
            style={{ fontFamily: "var(--font-cormorant), var(--font-playfair), Georgia, serif" }}
          >
            {content.galleryTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden relative group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
