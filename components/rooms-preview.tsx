"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Plane, Train } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function RoomsPreview() {
  const { language } = useLanguage()

  const sectionContent = {
    it: {
      hostTitle: "Sarai ospitato/a da",
      hostName: "Roberto",
      locationTitle: "Zona centro",
      airportsTitle: "Aeroporti",
      stationsTitle: "Stazioni Ferroviarie",
      nearbyTitle: "Nei dintorni",
      mapBtn: "Vedi su Google Maps",
      airports: [
        { name: "Aeroporto di Roma - Fiumicino", distance: "80 km" },
        { name: "Aeroporto di Roma - Ciampino", distance: "100 km" },
      ],
      stations: [
        { name: "Stazione di Viterbo Porta Romana", distance: "600 m" },
        { name: "Stazione di Viterbo Porta Fiorentina", distance: "1.2 km" },
      ],
      nearby: [
        { name: "Centro Storico di Viterbo", distance: "500 m" },
        { name: "Palazzo dei Papi", distance: "700 m" },
        { name: "Terme dei Papi", distance: "5 km" },
        { name: "Lago di Bolsena", distance: "18 km" },
        { name: "Civita di Bagnoregio", distance: "28 km" },
        { name: "Orvieto", distance: "45 km" },
      ],
    },
    en: {
      hostTitle: "You will be hosted by",
      hostName: "Roberto",
      locationTitle: "City center",
      airportsTitle: "Airports",
      stationsTitle: "Train Stations",
      nearbyTitle: "Nearby",
      mapBtn: "View on Google Maps",
      airports: [
        { name: "Rome Fiumicino Airport", distance: "80 km" },
        { name: "Rome Ciampino Airport", distance: "100 km" },
      ],
      stations: [
        { name: "Viterbo Porta Romana Station", distance: "600 m" },
        { name: "Viterbo Porta Fiorentina Station", distance: "1.2 km" },
      ],
      nearby: [
        { name: "Viterbo Historic Center", distance: "500 m" },
        { name: "Papal Palace", distance: "700 m" },
        { name: "Terme dei Papi", distance: "5 km" },
        { name: "Lake Bolsena", distance: "18 km" },
        { name: "Civita di Bagnoregio", distance: "28 km" },
        { name: "Orvieto", distance: "45 km" },
      ],
    },
    fr: {
      hostTitle: "Vous serez accueilli par",
      hostName: "Roberto",
      locationTitle: "Centre-ville",
      airportsTitle: "Aeroports",
      stationsTitle: "Gares",
      nearbyTitle: "A proximite",
      mapBtn: "Voir sur Google Maps",
      airports: [
        { name: "Aeroport de Rome - Fiumicino", distance: "80 km" },
        { name: "Aeroport de Rome - Ciampino", distance: "100 km" },
      ],
      stations: [
        { name: "Gare de Viterbo Porta Romana", distance: "600 m" },
        { name: "Gare de Viterbo Porta Fiorentina", distance: "1.2 km" },
      ],
      nearby: [
        { name: "Centre historique de Viterbo", distance: "500 m" },
        { name: "Palais des Papes", distance: "700 m" },
        { name: "Terme dei Papi", distance: "5 km" },
        { name: "Lac de Bolsena", distance: "18 km" },
        { name: "Civita di Bagnoregio", distance: "28 km" },
        { name: "Orvieto", distance: "45 km" },
      ],
    },
    es: {
      hostTitle: "Seras recibido por",
      hostName: "Roberto",
      locationTitle: "Zona centro",
      airportsTitle: "Aeropuertos",
      stationsTitle: "Estaciones de tren",
      nearbyTitle: "En los alrededores",
      mapBtn: "Ver en Google Maps",
      airports: [
        { name: "Aeropuerto de Roma - Fiumicino", distance: "80 km" },
        { name: "Aeropuerto de Roma - Ciampino", distance: "100 km" },
      ],
      stations: [
        { name: "Estacion de Viterbo Porta Romana", distance: "600 m" },
        { name: "Estacion de Viterbo Porta Fiorentina", distance: "1.2 km" },
      ],
      nearby: [
        { name: "Centro historico de Viterbo", distance: "500 m" },
        { name: "Palacio de los Papas", distance: "700 m" },
        { name: "Terme dei Papi", distance: "5 km" },
        { name: "Lago de Bolsena", distance: "18 km" },
        { name: "Civita di Bagnoregio", distance: "28 km" },
        { name: "Orvieto", distance: "45 km" },
      ],
    },
    de: {
      hostTitle: "Sie werden empfangen von",
      hostName: "Roberto",
      locationTitle: "Stadtzentrum",
      airportsTitle: "Flughafen",
      stationsTitle: "Bahnhofe",
      nearbyTitle: "In der Nahe",
      mapBtn: "Auf Google Maps ansehen",
      airports: [
        { name: "Flughafen Rom - Fiumicino", distance: "80 km" },
        { name: "Flughafen Rom - Ciampino", distance: "100 km" },
      ],
      stations: [
        { name: "Bahnhof Viterbo Porta Romana", distance: "600 m" },
        { name: "Bahnhof Viterbo Porta Fiorentina", distance: "1.2 km" },
      ],
      nearby: [
        { name: "Altstadt von Viterbo", distance: "500 m" },
        { name: "Papstpalast", distance: "700 m" },
        { name: "Terme dei Papi", distance: "5 km" },
        { name: "Bolsena-See", distance: "18 km" },
        { name: "Civita di Bagnoregio", distance: "28 km" },
        { name: "Orvieto", distance: "45 km" },
      ],
    },
  }

  const content = sectionContent[language as keyof typeof sectionContent] || sectionContent.it

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Host Section */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <p className="text-sm sm:text-base text-[#6b6560] mb-3 sm:mb-4">{content.hostTitle}</p>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1a] tracking-wide">
            {content.hostName}
          </h2>
        </div>

        {/* Location Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          {/* Left Column */}
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl text-[#1a1a1a] mb-4 sm:mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#4a90c9]" />
              {content.locationTitle}
            </h3>

            {/* Airports */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-sm sm:text-base font-medium text-[#1a1a1a] mb-3 sm:mb-4 flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#6b6560]" />
                {content.airportsTitle}
              </h4>
              <ul className="space-y-2">
                {content.airports.map((airport, index) => (
                  <li key={index} className="flex justify-between text-xs sm:text-sm text-[#6b6560]">
                    <span>{airport.name}</span>
                    <span className="text-[#4a90c9]">{airport.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Train Stations */}
            <div>
              <h4 className="text-sm sm:text-base font-medium text-[#1a1a1a] mb-3 sm:mb-4 flex items-center gap-2">
                <Train className="w-4 h-4 text-[#6b6560]" />
                {content.stationsTitle}
              </h4>
              <ul className="space-y-2">
                {content.stations.map((station, index) => (
                  <li key={index} className="flex justify-between text-xs sm:text-sm text-[#6b6560]">
                    <span>{station.name}</span>
                    <span className="text-[#4a90c9]">{station.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Nearby */}
          <div>
            <h3 className="font-cinzel text-xl sm:text-2xl text-[#1a1a1a] mb-4 sm:mb-6">
              {content.nearbyTitle}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {content.nearby.map((place, index) => (
                <li key={index} className="flex justify-between text-xs sm:text-sm text-[#6b6560] py-2 border-b border-[#eee]">
                  <span>{place.name}</span>
                  <span className="text-[#4a90c9] font-medium">{place.distance}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map Image */}
        <div className="relative h-48 sm:h-64 md:h-80 rounded-lg overflow-hidden bg-[#f0f0f0]">
          <Image
            src="/images/bb-hero.jpg"
            alt="Location map"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              asChild
              className="bg-[#4a90c9] hover:bg-[#3a7db3] text-white rounded-none px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base"
            >
              <Link href="https://maps.google.com" target="_blank">
                <MapPin className="w-4 h-4 mr-2" />
                {content.mapBtn}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
