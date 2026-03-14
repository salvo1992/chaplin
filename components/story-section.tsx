"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useLanguage } from "@/components/language-provider"

export function StorySection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation()
  const { language } = useLanguage()

  const storyContent = {
    it: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Bed & Breakfast a Viterbo in zona centro",
      paragraph1:
        "CHAPLIN Luxury Holiday House e una suite esclusiva in formula B&B, ideale per una fuga di coppia all'insegna del relax e del benessere. L'ambiente raffinato e intimo e progettato per offrire il massimo comfort, con una piscina privata a uso esclusivo e un centro benessere dotato di ogni comfort.",
      paragraph2:
        "La posizione della CHAPLIN Luxury Holiday House e uno dei suoi punti di forza: ci troviamo in una zona eccellente di Viterbo, apprezzata e valutata con un punteggio altissimo dai nostri ospiti. A pochi passi dal centro storico e a soli 600 metri dalla stazione ferroviaria di Viterbo, la nostra struttura e perfetta per chi desidera esplorare la citta a piedi.",
    },
    en: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Bed & Breakfast in Viterbo city center",
      paragraph1:
        "CHAPLIN Luxury Holiday House is an exclusive B&B suite, ideal for a couple's getaway focused on relaxation and wellness. The refined and intimate environment is designed to offer maximum comfort, with a private pool for exclusive use and a wellness center equipped with every amenity.",
      paragraph2:
        "The location of CHAPLIN Luxury Holiday House is one of its strengths: we are located in an excellent area of Viterbo, appreciated and highly rated by our guests. Just a few steps from the historic center and only 600 meters from Viterbo's train station, our property is perfect for those who wish to explore the city on foot.",
    },
    fr: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Bed & Breakfast a Viterbo au centre-ville",
      paragraph1:
        "CHAPLIN Luxury Holiday House est une suite exclusive en formule B&B, ideale pour une escapade en couple sous le signe de la detente et du bien-etre. L'ambiance raffinee et intime est concue pour offrir un confort maximal, avec une piscine privee a usage exclusif et un centre de bien-etre equipe de tous les conforts.",
      paragraph2:
        "L'emplacement de CHAPLIN Luxury Holiday House est l'un de ses points forts: nous sommes situes dans un excellent quartier de Viterbo, apprecie et tres bien note par nos hotes. A quelques pas du centre historique et a seulement 600 metres de la gare de Viterbo, notre etablissement est parfait pour ceux qui souhaitent explorer la ville a pied.",
    },
    es: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Bed & Breakfast en Viterbo en el centro",
      paragraph1:
        "CHAPLIN Luxury Holiday House es una suite exclusiva en formula B&B, ideal para una escapada en pareja en busca de relajacion y bienestar. El ambiente refinado e intimo esta disenado para ofrecer el maximo confort, con una piscina privada de uso exclusivo y un centro de bienestar equipado con todas las comodidades.",
      paragraph2:
        "La ubicacion de CHAPLIN Luxury Holiday House es uno de sus puntos fuertes: estamos ubicados en una excelente zona de Viterbo, apreciada y muy bien valorada por nuestros huespedes. A pocos pasos del centro historico y a solo 600 metros de la estacion de tren de Viterbo, nuestra propiedad es perfecta para quienes desean explorar la ciudad a pie.",
    },
    de: {
      title: "CHAPLIN Luxury Holiday House",
      subtitle: "Bed & Breakfast in Viterbo im Stadtzentrum",
      paragraph1:
        "CHAPLIN Luxury Holiday House ist eine exklusive B&B-Suite, ideal fur einen Paaurlaub im Zeichen von Entspannung und Wohlbefinden. Das raffinierte und intime Ambiente ist darauf ausgelegt, hochsten Komfort zu bieten, mit einem privaten Pool zur exklusiven Nutzung und einem Wellnesscenter mit allem Komfort.",
      paragraph2:
        "Die Lage des CHAPLIN Luxury Holiday House ist eine seiner Starken: Wir befinden uns in einer ausgezeichneten Gegend von Viterbo, die von unseren Gasten geschatzt und hoch bewertet wird. Nur wenige Schritte vom historischen Zentrum entfernt und nur 600 Meter vom Bahnhof Viterbo entfernt, ist unsere Unterkunft perfekt fur alle, die die Stadt zu Fuss erkunden mochten.",
    },
  }

  const content = storyContent[language as keyof typeof storyContent] || storyContent.it

  const amenities = [
    { icon: "wifi", label: "Wifi Gratis" },
    { icon: "home", label: "Dimora di prestigio" },
    { icon: "trees", label: "Giardino" },
    { icon: "utensils", label: "Angolo cottura" },
    { icon: "tv", label: "Televisione" },
    { icon: "wind", label: "Phon in Camera" },
    { icon: "gem", label: "Struttura di charme" },
    { icon: "users", label: "Per famiglie" },
  ]

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title Section - Centered like residenzanoe.it */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-normal text-[#1a1a1a] mb-4 tracking-wide">
            {content.title}
          </h2>
          <p className="text-lg text-[#4a90c9] mb-6">
            {content.subtitle}
          </p>
          {/* Decorative underline */}
          <div className="w-16 h-1 bg-[#4a90c9] mx-auto" />
        </div>

        {/* Content - Clean paragraphs */}
        <div
          ref={contentRef}
          className={`text-center mb-16 transition-all duration-1000 delay-300 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#1a1a1a] text-lg leading-relaxed mb-8 text-pretty">
            {content.paragraph1}
          </p>
          <p className="text-[#1a1a1a] text-lg leading-relaxed text-pretty">
            {content.paragraph2}
          </p>
        </div>

        {/* Amenities Grid - Icons like residenzanoe.it */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-[#f5f5f0] flex items-center justify-center text-[#1a1a1a]">
                <AmenityIcon icon={amenity.icon} />
              </div>
              <span className="text-xs text-[#6b6560] max-w-[80px]">{amenity.label}</span>
            </div>
          ))}
        </div>

        {/* Gallery Section */}
        <div
          ref={galleryRef}
          className={`transition-all duration-1000 delay-500 ${
            galleryVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="font-cinzel text-2xl text-center text-[#1a1a1a] mb-8">Galleria fotografica</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/bb-hero.jpg"
                alt="Villa esterno"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/spa1.jpg"
                alt="Spa"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/room-1.jpg"
                alt="Camera"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <Image
                src="/images/pool.jpg"
                alt="Piscina"
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Simple amenity icon component
function AmenityIcon({ icon }: { icon: string }) {
  const icons: Record<string, JSX.Element> = {
    wifi: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    home: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    trees: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    utensils: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    tv: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    wind: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    gem: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    users: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  }
  return icons[icon] || null
}
