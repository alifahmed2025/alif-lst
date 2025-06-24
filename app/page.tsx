"use client";


import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import TechnologiesShowcase from "@/components/technologies-showcase"
import ClientTestimonials from "@/components/client-testimonials";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
       <TechnologiesShowcase />
        <ProjectsSection />
        <ClientTestimonials />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
