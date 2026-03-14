"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

const HERO_SLIDES = [
  {
    src: "/images/bb-hero.jpg",
    alt: "CHAPLIN Luxury Holiday House",
  },
  {
    src: "/images/pool.jpg",
    alt: "Piscina panoramica",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  // Fade in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content - Centered with fade-in animation */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <div 
          className={`text-center text-white transition-all duration-[1500ms] ease-out ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Tagline - small spaced letters */}
          <p 
            className="text-[11px] sm:text-xs md:text-sm tracking-[0.35em] uppercase mb-6 md:mb-8"
            style={{ color: "rgba(201, 168, 76, 0.9)" }}
          >
            luxury holiday house | viterbo
          </p>
          
          {/* Main Title - Large elegant serif */}
          <h1 
            className="text-[42px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.08em] leading-none"
            style={{ 
              fontFamily: "var(--font-cormorant), var(--font-playfair), Georgia, serif",
              color: "#f5f0e8"
            }}
          >
            CHAPLIN
          </h1>

          {/* Vertical decorative line */}
          <div 
            className={`mx-auto mt-8 md:mt-12 w-px bg-white/40 transition-all duration-[2000ms] ease-out delay-500 ${
              isVisible ? "h-16 md:h-24 opacity-100" : "h-0 opacity-0"
            }`}
          />

          {/* Scroll indicator text */}
          <p 
            className={`mt-6 md:mt-8 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/50 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            scroll
          </p>
        </div>
      </div>

      {/* Bottom gradient for better text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent z-5" />

      {/* Slide Indicators - minimal dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? "bg-[#c9a84c]" 
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
