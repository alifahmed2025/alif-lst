"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg"> 
               
                <Image
        src="/logo.jpg"
        alt="My Logo"
        width={50}
        height={50}
        className="rounded-full"
      />
      </span>
            </div>
            <span className="text-white font-serif text-xl">Mujahid</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="#skills" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">
              Skills
            </Link>
            <Link
              href="#services"
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Services
            </Link>
            <Link
              href="#projects"
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Projects
            </Link>
            <div className="relative group">
              <button className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center font-medium">
                More
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800/50 font-medium">
              Login
            </Button>
            <Button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-6 shadow-lg">
              Book a call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-slate-800/50">
            <nav className="flex flex-col space-y-4 mt-6">
              <Link href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">
                About
              </Link>
              <Link href="#skills" className="text-slate-300 hover:text-white transition-colors font-medium">
                Skills
              </Link>
              <Link href="#services" className="text-slate-300 hover:text-white transition-colors font-medium">
                Services
              </Link>
              <Link href="#projects" className="text-slate-300 hover:text-white transition-colors font-medium">
                Projects
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="ghost" className="text-slate-300 hover:text-white justify-start">
                  Login
                </Button>
                <Button className="bg-white text-slate-900 hover:bg-slate-100">Book a call</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
