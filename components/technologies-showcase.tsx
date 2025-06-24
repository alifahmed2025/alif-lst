"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Code2,
  Database,
  Globe,
  Server,
  Palette,
  GitBranch,
  Cloud,
  Zap,
  Terminal,
  Leaf,
  WorkflowIcon as Wordpress,
} from "lucide-react"

const technologies = [
  { name: "TypeScript", icon: Terminal, color: "text-blue-500" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "MongoDB", icon: Leaf, color: "text-green-400" },
  { name: "Next.js", icon: Globe, color: "text-white" },
  { name: "React", icon: Code2, color: "text-cyan-400" },
  { name: "WordPress", icon: Wordpress, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: Palette, color: "text-cyan-400" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-500" },
  { name: "GraphQL", icon: Zap, color: "text-pink-500" },
  { name: "Docker", icon: Cloud, color: "text-blue-400" },
  { name: "Git", icon: GitBranch, color: "text-orange-500" },
]

// Duplicate technologies for seamless infinite scroll
const duplicatedTechnologies = [...technologies, ...technologies, ...technologies]

export default function TechnologiesShowcase() {
  const [isRow1Hovered, setIsRow1Hovered] = useState(false)
  const [isRow2Hovered, setIsRow2Hovered] = useState(false)
  return (
    <div className="min-h-10 bg-gradient-to-br py-20 px-4">
        
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-blue-400 mb-6">Technologies I Work With</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono">
            I specialize in modern web technologies that enable me to build fast, responsive, and scalable applications.
          </p>
        </motion.div>

        {/* Animated Technology Icons - Row 1 */}
        <div
          className="relative overflow-hidden mb-8"
          onMouseEnter={() => setIsRow1Hovered(true)}
          onMouseLeave={() => setIsRow1Hovered(false)}
        >
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: isRow1Hovered ? undefined : [0, -100 * technologies.length],
            }}
            transition={{
              x: {
                repeat: isRow1Hovered ? 0 : Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: `${100 * duplicatedTechnologies.length}px` }}
          >
            {duplicatedTechnologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-600/50 flex items-center justify-center group hover:from-gray-700/70 hover:to-gray-800/90 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 relative overflow-hidden"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm"></div>
                    <IconComponent
                      size={36}
                      className={`${tech.color} group-hover:scale-125 transition-all duration-500 relative z-10 drop-shadow-lg`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Animated Technology Icons - Row 2 (Reverse Direction) */}
        <div
          className="relative overflow-hidden mb-16"
          onMouseEnter={() => setIsRow2Hovered(true)}
          onMouseLeave={() => setIsRow2Hovered(false)}
        >
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: isRow2Hovered ? undefined : [-100 * technologies.length, 0],
            }}
            transition={{
              x: {
                repeat: isRow2Hovered ? 0 : Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            style={{ width: `${100 * duplicatedTechnologies.length}px` }}
          >
            {duplicatedTechnologies.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <motion.div
                  key={`reverse-${tech.name}-${index}`}
                  className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-600/50 flex items-center justify-center group hover:from-gray-700/70 hover:to-gray-800/90 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 relative overflow-hidden"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-sm"></div>
                    <IconComponent
                      size={36}
                      className={`${tech.color} group-hover:scale-125 transition-all duration-500 relative z-10 drop-shadow-lg`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
