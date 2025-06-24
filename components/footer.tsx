import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Image from "next/image"


export function Footer() {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
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
              <span className="text-white font-semibold text-xl">Asikur</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Full-stack developer passionate about creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="#about"
                className="block text-slate-400 hover:text-white transition-colors text-sm font-light"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="block text-slate-400 hover:text-white transition-colors text-sm font-light"
              >
                Skills
              </Link>
              <Link
                href="#services"
                className="block text-slate-400 hover:text-white transition-colors text-sm font-light"
              >
                Services
              </Link>
              <Link
                href="#projects"
                className="block text-slate-400 hover:text-white transition-colors text-sm font-light"
              >
                Projects
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <p className="text-slate-400 text-sm font-light">Web Development</p>
              <p className="text-slate-400 text-sm font-light">Mobile Apps</p>
              <p className="text-slate-400 text-sm font-light">UI/UX Design</p>
              <p className="text-slate-400 text-sm font-light">Consulting</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-600/50 border border-slate-700/50 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-slate-400 hover:text-blue-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-600/50 border border-slate-700/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-600/50 border border-slate-700/50 transition-all duration-300"
              >
                <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-blue-600/20 hover:border-blue-600/50 border border-slate-700/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-slate-400 hover:text-blue-400" />
              </a>
            </div>
            <p className="text-slate-400 text-sm font-light">hello@asikur.dev</p>
          </div>
        </div>

        <div className="border-t border-slate-800/50 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm font-light">
            © 2024 Asikur. All rights reserved. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
