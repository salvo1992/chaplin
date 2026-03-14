"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const { t } = useLanguage()

  const welcomeText = "Welcome"

  const heroImages = [
    {
      src: "/images/bb-hero.jpg",
      alt: "CHAPLIN Luxury Holiday House - Vista principale",
    },
    {
      src: "/images/pool.jpg",
      alt: "Piscina panoramica",
    },
  ]

  // Typewriter effect for "Welcome"
  useEffect(() => {
    setIsLoaded(true)
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= welcomeText.length) {
        setDisplayedText(welcomeText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
      }
    }, 150)

    return () => clearInterval(typingInterval)
  }, [])

  // Slide autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg?height=1080&width=1920&query=luxury B&B villa in Rome"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            {/* Typewriter Welcome Text */}
            <div className="mb-6">
              <span className="text-sm md:text-base uppercase tracking-[0.4em] text-white/80 font-light">
                luxury holiday house | viterbo
              </span>
            </div>
            
            <h1 className="font-cinzel text-7xl md:text-9xl font-light mb-8 tracking-wider">
              <span className="inline-block min-w-[4ch]">
                {displayedText}
                <span 
                  className={`inline-block w-[3px] h-[0.8em] bg-[#c9a84c] ml-1 align-middle ${
                    isTypingComplete ? "animate-pulse" : "animate-blink"
                  }`}
                />
              </span>
            </h1>

            {/* Subtitle appears after typing completes */}
            <div 
              className={`transition-all duration-1000 delay-500 ${
                isTypingComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xl md:text-2xl mb-8 text-white/90 font-light tracking-wide">
                CHAPLIN Luxury Holiday House
              </p>

              <div className="flex items-center justify-center gap-3 mb-10">
                <MapPin className="w-5 h-5 text-[#c9a84c]" />
                <span className="text-lg font-light tracking-wider">Viterbo, Italia</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#c9a84c] hover:bg-[#b8973f] text-black text-lg px-10 py-6 rounded-none tracking-wider font-light transition-all duration-300 hover:scale-105"
                >
                  <Link href="/prenota">{t("bookYourStay")}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-white/60 text-white hover:bg-white hover:text-black text-lg px-10 py-6 rounded-none tracking-wider font-light bg-transparent transition-all duration-300 hover:scale-105"
                >
                  <Link href="/servizi">{t("discoverMore")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/10 w-12 h-12 rounded-none border border-white/30 transition-all duration-300 hover:border-white/60"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/10 w-12 h-12 rounded-none border border-white/30 transition-all duration-300 hover:border-white/60"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            title={`Go to slide ${index + 1}`}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-12 h-[2px] transition-all duration-300 ${
              index === currentSlide ? "bg-[#c9a84c]" : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#c9a84c] animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}
