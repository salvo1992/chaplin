"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Plane, Train } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function RoomsPreview() {
  const { language } = useLanguage()

  const sectionContent: Record<string, {
    hostTitle: string
    hostName: string
    locationTitle: string
    airportsTitle: string
    stationsTitle: string
    nearbyTitle: string
    mapBtn: string
    airports: { name: string; distance: string }[]
    stations: { name: string; distance: string }[]
    nearby: { name: string; distance: string }[]
  }> = {
    it: {
      hostTitle: "Sarai ospitato da",
      hostName: "Roberto",
      locationTitle: "Posizione",
      airportsTitle: "Aeroporti",
      stationsTitle: "Stazioni Ferroviarie",
      nearbyTitle: "Nelle vicinanze",
      mapBtn: "Vedi su Google Maps",
      airports: [
        { name: "Aeroporto di Roma Fiumicino", distance: "80 km" },
        { name: "Aeroporto di Roma Ciampino", distance: "100 km" },
      ],
      stations: [
        { name: "Stazione Viterbo Porta Romana", distance: "600 m" },
        { name: "Stazione Viterbo Porta Fiorentina", distance: "1.2 km" },
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
      locationTitle: "Location",
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
      locationTitle: "Emplacement",
      airportsTitle: "Aeroports",
      stationsTitle: "Gares",
      nearbyTitle: "A proximite",
      mapBtn: "Voir sur Google Maps",
      airports: [
        { name: "Aeroport de Rome Fiumicino", distance: "80 km" },
        { name: "Aeroport de Rome Ciampino", distance: "100 km" },
      ],
      stations: [
        { name: "Gare Viterbo Porta Romana", distance: "600 m" },
        { name: "Gare Viterbo Porta Fiorentina", distance: "1.2 km" },
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
      locationTitle: "Ubicacion",
      airportsTitle: "Aeropuertos",
      stationsTitle: "Estaciones de tren",
      nearbyTitle: "Cerca",
      mapBtn: "Ver en Google Maps",
      airports: [
        { name: "Aeropuerto de Roma Fiumicino", distance: "80 km" },
        { name: "Aeropuerto de Roma Ciampino", distance: "100 km" },
      ],
      stations: [
        { name: "Estacion Viterbo Porta Romana", distance: "600 m" },
        { name: "Estacion Viterbo Porta Fiorentina", distance: "1.2 km" },
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
      locationTitle: "Lage",
      airportsTitle: "Flughafen",
      stationsTitle: "Bahnhofe",
      nearbyTitle: "In der Nahe",
      mapBtn: "Auf Google Maps ansehen",
      airports: [
        { name: "Flughafen Rom Fiumicino", distance: "80 km" },
        { name: "Flughafen Rom Ciampino", distance: "100 km" },
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

  const content = sectionContent[language] || sectionContent.it

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#f5f5f0]">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Host Section */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm text-[#6b6560] mb-3">{content.hostTitle}</p>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1a] tracking-wide"
            style={{ fontFamily: "var(--font-cormorant), var(--font-playfair), Georgia, serif" }}
          >
            {content.hostName}
          </h2>
        </div>

        {/* Location Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Left Column */}
          <div>
            <h3 
              className="text-xl sm:text-2xl text-[#1a1a1a] mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-cormorant), var(--font-playfair), Georgia, serif" }}
            >
              <MapPin className="w-5 h-5 text-[#c9a84c]" />
              {content.locationTitle}
            </h3>

            {/* Airports */}
            <div className="mb-8">
              <h4 className="text-sm font-medium text-[#1a1a1a] mb-4 flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#6b6560]" />
                {content.airportsTitle}
              </h4>
              <ul className="space-y-2">
                {content.airports.map((airport, index) => (
                  <li key={index} className="flex justify-between text-sm text-[#6b6560]">
                    <span>{airport.name}</span>
                    <span className="text-[#c9a84c] font-medium">{airport.distance}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Train Stations */}
            <div>
              <h4 className="text-sm font-medium text-[#1a1a1a] mb-4 flex items-center gap-2">
                <Train className="w-4 h-4 text-[#6b6560]" />
                {content.stationsTitle}
              </h4>
              <ul className="space-y-2">
                {content.stations.map((station, index) => (
                  <li key={index} className="flex justify-between text-sm text-[#6b6560]">
                    <span>{station.name}</span>
                    <span className="text-[#c9a84c] font-medium">{station.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Nearby */}
          <div>
            <h3 
              className="text-xl sm:text-2xl text-[#1a1a1a] mb-6"
              style={{ fontFamily: "var(--font-cormorant), var(--font-playfair), Georgia, serif" }}
            >
              {content.nearbyTitle}
            </h3>
            <ul className="space-y-3">
              {content.nearby.map((place, index) => (
                <li key={index} className="flex justify-between text-sm text-[#6b6560] py-2 border-b border-[#e0ddd5]">
                  <span>{place.name}</span>
                  <span className="text-[#c9a84c] font-medium">{place.distance}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="relative h-64 sm:h-80 overflow-hidden bg-[#e0ddd5]">
          <Image
            src="/images/bb-hero.jpg"
            alt="Location"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              asChild
              className="bg-[#1a1a1a] hover:bg-[#333] text-white rounded-none px-8 py-5"
            >
              <Link href="https://maps.google.com/?q=Viterbo,Italy" target="_blank" rel="noopener noreferrer">
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
