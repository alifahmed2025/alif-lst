"use client"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState, useCallback } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
const animationRef = useRef<number | null>(null)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isIntense, setIsIntense] = useState(false)
  const [clickEffect, setClickEffect] = useState<{ x: number; y: number; time: number } | null>(null)

  // Initialize nodes
  const initNodes = useCallback((count: number) => {
    const newNodes: Node[] = []
    for (let i = 0; i < count; i++) {
      newNodes.push({
        x: Math.random() * (window.innerWidth || 1200),
        y: Math.random() * (window.innerHeight || 800),
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
      })
    }
    nodesRef.current = newNodes
  }, [])

  // Handle mouse move
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
  }, [])

  // Handle click to intensify
  const handleClick = useCallback((e: MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (rect) {
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top

      setClickEffect({ x: clickX, y: clickY, time: Date.now() })
      setIsIntense(true)

      // Add more nodes at click position
      const newNodes: Node[] = []
      for (let i = 0; i < 10; i++) {
        newNodes.push({
          x: clickX + (Math.random() - 0.5) * 100,
          y: clickY + (Math.random() - 0.5) * 100,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 1 + 0.5,
        })
      }
      nodesRef.current = [...nodesRef.current, ...newNodes]

      // Reset intensity after 3 seconds
      setTimeout(() => {
        setIsIntense(false)
        setClickEffect(null)
      }, 3000)
    }
  }, [])

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update nodes
    const nodes = nodesRef.current
    const mousePos = mouseRef.current

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]

      // Update position
      node.x += node.vx
      node.y += node.vy

      // Bounce off edges
      if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
      if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

      // Keep nodes in bounds
      node.x = Math.max(0, Math.min(canvas.width, node.x))
      node.y = Math.max(0, Math.min(canvas.height, node.y))

      // Mouse attraction
      const dx = mousePos.x - node.x
      const dy = mousePos.y - node.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 150 && distance > 0) {
        const force = (150 - distance) / 150
        node.vx += (dx / distance) * force * 0.1
        node.vy += (dy / distance) * force * 0.1
      }

      // Click effect
      if (clickEffect) {
        const clickDx = clickEffect.x - node.x
        const clickDy = clickEffect.y - node.y
        const clickDistance = Math.sqrt(clickDx * clickDx + clickDy * clickDy)
        const timeDiff = Date.now() - clickEffect.time

        if (clickDistance < 200 && timeDiff < 1000 && clickDistance > 0) {
          const clickForce = (((200 - clickDistance) / 200) * (1000 - timeDiff)) / 1000
          node.vx += (clickDx / clickDistance) * clickForce * 0.3
          node.vy += (clickDy / clickDistance) * clickForce * 0.3
        }
      }

      // Limit velocity
      const maxVel = isIntense ? 6 : 3
      const vel = Math.sqrt(node.vx * node.vx + node.vy * node.vy)
      if (vel > maxVel) {
        node.vx = (node.vx / vel) * maxVel
        node.vy = (node.vy / vel) * maxVel
      }
    }

    // Draw connections (spider web effect)
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const node1 = nodes[i]
        const node2 = nodes[j]
        const dx = node1.x - node2.x
        const dy = node1.y - node2.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = isIntense ? 200 : 120

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.3

          // Create gradient for web effect
          const gradient = ctx.createLinearGradient(node1.x, node1.y, node2.x, node2.y)
          gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`)
          gradient.addColorStop(0.5, `rgba(147, 51, 234, ${opacity * 1.5})`)
          gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`)

          ctx.strokeStyle = gradient
          ctx.lineWidth = isIntense ? 2 : 1
          ctx.beginPath()
          ctx.moveTo(node1.x, node1.y)
          ctx.lineTo(node2.x, node2.y)
          ctx.stroke()
        }
      }
    }

    // Draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 2)
      gradient.addColorStop(0, `rgba(59, 130, 246, ${node.opacity})`)
      gradient.addColorStop(0.5, `rgba(147, 51, 234, ${node.opacity * 0.8})`)
      gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.size * (isIntense ? 2 : 1), 0, Math.PI * 2)
      ctx.fill()

      // Add glow effect
      ctx.shadowColor = "#3b82f6"
      ctx.shadowBlur = isIntense ? 20 : 10
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.size * 0.5, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(59, 130, 246, ${node.opacity})`
      ctx.fill()
      ctx.shadowBlur = 0
    }

    // Draw click effect
    if (clickEffect) {
      const timeDiff = Date.now() - clickEffect.time
      const progress = timeDiff / 1000

      if (progress < 1) {
        const radius = progress * 100
        const opacity = (1 - progress) * 0.5

        // Ripple effect
        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.arc(clickEffect.x, clickEffect.y, radius, 0, Math.PI * 2)
        ctx.stroke()

        // Inner glow
        const gradient = ctx.createRadialGradient(clickEffect.x, clickEffect.y, 0, clickEffect.x, clickEffect.y, radius)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * 0.3})`)
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(clickEffect.x, clickEffect.y, radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [isIntense, clickEffect])

  // Setup canvas and event listeners
  useEffect(() => {
    initNodes(isIntense ? 80 : 50)

    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    initNodes(isIntense ? 80 : 50)

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("click", handleClick)
    window.addEventListener("resize", resizeCanvas)

    // Start animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    animate()

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("click", handleClick)
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initNodes, handleMouseMove, handleClick, animate, isIntense])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 mt-5 relative overflow-hidden bg-slate-950">
      {/* Spider Web Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-auto cursor-pointer" style={{ zIndex: 1 }} />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ zIndex: 0 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm mb-8">
          <span className="text-slate-300 text-sm font-medium">Full-Stack Web Developer</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tight">
          Hi, I'm MUJAHID ALI
          <br />
          <span className="text-slate-400">I Build Modern Web Experiences</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed font-mono">
          Transforming ideas into exceptional digital experiences with clean code and
          <br />
          creative design. Specializing in Next.js, React, and full-stack development.
        </p>

        {/* Interactive Instruction */}
        <div className="mb-8">
          <p className="text-blue-400 text-sm font-medium animate-pulse">
            🕷️ Click anywhere to create web effects • Move mouse to interact
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:text-white hover:border-slate-500 transition-all duration-300 px-8 py-6 text-base font-medium"
          >
            <Download className="w-5 h-5 mr-3" />
            RESUME
          </Button>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 transition-all duration-300 px-8 py-6 text-base font-medium"
          >
            View My Work
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>

        {/* Featured Work Preview */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border border-slate-800/50">
           { /* <Image
              src="/hero-image.png"
              alt="Featured development work showing code editor and project interface"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Intensity Indicator */}
      {isIntense && (
        <div className="absolute top-8 right-8 z-20">
          <div className="bg-blue-600/20 border border-blue-500/50 rounded-full px-4 py-2 backdrop-blur-sm">
            <span className="text-blue-400 text-sm font-medium">🕸️ Web Mode Active</span>
          </div>
        </div>
      )}
    </section>
  )
}
