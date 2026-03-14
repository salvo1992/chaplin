"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useLanguage()

  const heroSlides = [
    {
      src: "/images/bb-hero.jpg",
      alt: "CHAPLIN Luxury Holiday House - Vista principale",
      tagline: "luxury holiday house | viterbo",
      title: "CHAPLIN",
    },
    {
      src: "/images/pool.jpg",
      alt: "Piscina panoramica",
      tagline: "luxury holiday house | viterbo",
      title: "CHAPLIN",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
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

      {/* Content - Like Le Cinque Lune style */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div 
          className={`text-center text-white px-4 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Tagline */}
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/80 mb-4 sm:mb-6 font-light">
            {heroSlides[currentSlide].tagline}
          </p>
          
          {/* Main Title - Large serif font like reference */}
          <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-wide mb-6 sm:mb-10">
            {heroSlides[currentSlide].title}
          </h1>

          {/* Booking Form Bar - Like Le Cinque Lune */}
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
        {heroSlides.map((_, index) => (
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
