"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(threshold = 0.1) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef || hasAnimated.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    observer.observe(currentRef)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return { ref, isVisible }
}
