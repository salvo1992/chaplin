"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Check } from "lucide-react"

export function ServicesSection() {
  const { language } = useLanguage()

  const sectionContent: Record<string, { 
    title: string
    subtitle: string
    description: string
    features: string[]
    noDeposit: string
    freeCancellation: string
    infoBtn: string
    bookBtn: string
    size: string
    guests: string
  }> = {
    it: {
      title: "L'Appartamento",
      subtitle: "CHAPLIN Luxury Holiday House",
      description: "Un elegante appartamento indipendente di 57 mq con piscina privata, spa e tutti i comfort per un soggiorno di relax.",
      features: [
        "Piscina privata ad uso esclusivo",
        "Spa con vasca idromassaggio 32 getti",
        "Sauna a infrarossi con cromoterapia",
        "Smart TV 55'' con Netflix e Disney+",
        "Cucina completamente attrezzata",
        "Aria condizionata e riscaldamento",
      ],
      noDeposit: "Nessun anticipo richiesto",
      freeCancellation: "Cancellazione gratuita",
      infoBtn: "Scopri di piu",
      bookBtn: "Prenota ora",
      size: "57 mq",
      guests: "Max 4 ospiti",
    },
    en: {
      title: "The Apartment",
      subtitle: "CHAPLIN Luxury Holiday House",
      description: "An elegant 57 sqm independent apartment with private pool, spa and all comforts for a relaxing stay.",
      features: [
        "Private pool for exclusive use",
        "Spa with 32-jet hydromassage tub",
        "Infrared sauna with chromotherapy",
        "55'' Smart TV with Netflix and Disney+",
        "Fully equipped kitchen",
        "Air conditioning and heating",
      ],
      noDeposit: "No deposit required",
      freeCancellation: "Free cancellation",
      infoBtn: "Learn more",
      bookBtn: "Book now",
      size: "57 sqm",
      guests: "Max 4 guests",
    },
    fr: {
      title: "L'Appartement",
      subtitle: "CHAPLIN Luxury Holiday House",
      description: "Un elegant appartement independant de 57 m2 avec piscine privee, spa et tout le confort pour un sejour relaxant.",
      features: [
        "Piscine privee a usage exclusif",
        "Spa avec baignoire hydromassage 32 jets",
        "Sauna infrarouge avec chromotherapie",
        "Smart TV 55'' avec Netflix et Disney+",
        "Cuisine entierement equipee",
        "Climatisation et chauffage",
      ],
      noDeposit: "Aucun acompte requis",
      freeCancellation: "Annulation gratuite",
      infoBtn: "En savoir plus",
      bookBtn: "Reserver",
      size: "57 m2",
      guests: "Max 4 personnes",
    },
    es: {
      title: "El Apartamento",
      subtitle: "CHAPLIN Luxury Holiday House",
      description: "Un elegante apartamento independiente de 57 m2 con piscina privada, spa y todas las comodidades para una estancia relajante.",
      features: [
        "Piscina privada de uso exclusivo",
        "Spa con banera de hidromasaje de 32 chorros",
        "Sauna de infrarrojos con cromoterapia",
        "Smart TV 55'' con Netflix y Disney+",
        "Cocina totalmente equipada",
        "Aire acondicionado y calefaccion",
      ],
      noDeposit: "Sin deposito requerido",
      freeCancellation: "Cancelacion gratuita",
      infoBtn: "Saber mas",
      bookBtn: "Reservar",
      size: "57 m2",
      guests: "Max 4 huespedes",
    },
    de: {
      title: "Die Wohnung",
      subtitle: "CHAPLIN Luxury Holiday House",
      description: "Eine elegante 57 qm unabhangige Wohnung mit privatem Pool, Spa und allem Komfort fur einen entspannenden Aufenthalt.",
      features: [
        "Privater Pool zur exklusiven Nutzung",
        "Spa mit 32-Dusen-Whirlpool",
        "Infrarotsauna mit Chromotherapie",
        "55'' Smart TV mit Netflix und Disney+",
        "Voll ausgestattete Kuche",
        "Klimaanlage und Heizung",
      ],
      noDeposit: "Keine Anzahlung erforderlich",
      freeCancellation: "Kostenlose Stornierung",
      infoBtn: "Mehr erfahren",
      bookBtn: "Jetzt buchen",
      size: "57 qm",
      guests: "Max 4 Gaste",
    },
  }

  const content = sectionContent[language] || sectionContent.it

  const images = [
    { src: "/images/spa.jpg", alt: "Spa e benessere" },
    { src: "/images/spa1.jpg", alt: "Vasca idromassaggio" },
    { src: "/images/room-1.jpg", alt: "Camera da letto" },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1a] mb-3 tracking-wide"
            style={{ fontFamily: "var(--font-cormorant), var(--font-playfair), Georgia, serif" }}
          >
            {content.title}
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 aspect-video relative overflow-hidden">
              <Image
                src="/images/pool.jpg"
                alt="Piscina CHAPLIN"
                fill
                className="object-cover"
              />
            </div>
            {images.slice(0, 2).map((img, index) => (
              <div key={index} className="aspect-square relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-xs px-3 py-1 bg-green-50 text-green-700 rounded-full">
                {content.noDeposit}
              </span>
              <span className="text-xs px-3 py-1 bg-green-50 text-green-700 rounded-full">
                {content.freeCancellation}
              </span>
            </div>

            {/* Title */}
            <h3 
              className="text-2xl sm:text-3xl text-[#1a1a1a] mb-2"
              style={{ fontFamily: "var(--font-cormorant), var(--font-playfair), Georgia, serif" }}
            >
              {content.subtitle}
            </h3>
            
            {/* Size & Guests */}
            <p className="text-sm text-[#c9a84c] mb-4">
              {content.size} | {content.guests}
            </p>

            {/* Description */}
            <p className="text-[#6b6560] mb-6 leading-relaxed">
              {content.description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-8">
              {content.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-[#4a4a4a]">
                  <Check className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                variant="outline"
                className="flex-1 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white rounded-none py-5"
              >
                <Link href="/camere/appartamento-chaplin">{content.infoBtn}</Link>
              </Button>
              <Button
                asChild
                className="flex-1 bg-[#c9a84c] hover:bg-[#b8973b] text-[#1a1a1a] rounded-none py-5"
              >
                <Link href="/prenota">{content.bookBtn}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
