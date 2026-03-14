"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

const HERO_SLIDES = [
  {
    src: "/images/bb-hero.jpg",
    alt: "CHAPLIN Luxury Holiday House - Vista principale",
  },
  {
    src: "/images/pool.jpg",
    alt: "Piscina panoramica",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          {/* Tagline */}
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/80 mb-4 sm:mb-6 font-light">
            luxury holiday house | viterbo
          </p>
          
          {/* Main Title */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-wide mb-6 sm:mb-10">
            CHAPLIN
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#c9a84c] hover:bg-[#b8973f] text-white text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 rounded-none tracking-wider font-normal"
            >
              <Link href="/prenota">{t("bookYourStay")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/60 text-white hover:bg-white hover:text-black text-sm sm:text-base px-6 sm:px-10 py-5 sm:py-6 rounded-none tracking-wider font-normal bg-transparent"
            >
              <Link href="/camere">{t("discoverMore")}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#c9a84c] scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
