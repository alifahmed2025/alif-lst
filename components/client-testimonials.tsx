"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    avatar: "/placeholder.svg?height=120&width=120",
    testimonial:
      "Asikur delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise transformed our online presence completely.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, InnovateLab",
    avatar: "/placeholder.svg?height=120&width=120",
    testimonial:
      "Working with Suborno was a game-changer for our startup. He delivered a scalable, modern web application that perfectly aligned with our vision and business goals.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthCo",
    avatar: "/placeholder.svg?height=120&width=120",
    testimonial:
      "The e-commerce platform Suborno built for us increased our online sales by 300%. His expertise in modern web technologies is truly impressive.",
  },
]

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      className="py-24 px-6 relative overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: "#0a0a0a" }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-400 mb-6">Client Testimonials</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center relative"
            >
              {/* Large Quote Mark */}
              <div className="absolute left-8 top-0 text-8xl font-bold text-gray-800 select-none">99</div>

              {/* Avatar */}
              <div className="relative mx-auto mb-8 w-32 h-32">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-700 relative">
                  <img
                    src={currentTestimonial.avatar || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover bg-gray-700"
                  />
                </div>
                {/* Blue indicator dot */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl md:text-3xl text-gray-300 font-light italic leading-relaxed mb-8 max-w-3xl mx-auto">
                "{currentTestimonial.testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">{currentTestimonial.name}</h4>
                <p className="text-blue-400 font-medium">{currentTestimonial.position}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800/50 border-gray-600/50 hover:bg-gray-700/50 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-300" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800/50 border-gray-600/50 hover:bg-gray-700/50 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-300" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-400" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
