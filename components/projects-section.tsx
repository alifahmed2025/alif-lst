"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Users, Calendar } from "lucide-react"

export function ProjectsSection() {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce system with Stripe integration, admin dashboard and responsive UI.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { stars: 124, users: "2.5k+", updated: "2 days ago" },
      highlights: [
        "Real-time inventory tracking",
        "Multi-payment integration",
        "Analytics dashboard",
        "Mobile-friendly UI",
      ],
    },
    {
      title: "Task Management Tool",
      description:
        "A collaborative task manager with real-time kanban board, team collaboration and reports.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Laravel", "MySQL", "Socket.io", "Tailwind CSS","Php"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { stars: 89, users: "1.8k+", updated: "1 week ago" },
      highlights: [
        "Drag & drop kanban",
        "Real-time team updates",
        "Time tracking",
        "Performance reports",
      ],
    },
    {
      title: "Social Media Dashboard",
      description:
        "Manage content, schedule posts, and view advanced insights across multiple social platforms.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Chart.js","MongoDb"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { stars: 67, users: "1.2k+", updated: "3 days ago" },
      highlights: [
        "Cross-platform posting",
        "Content scheduling",
        "Analytics tracking",
        "Team permissions",
      ],
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="relative bg-slate-900/30 rounded-2xl border border-slate-800/50 overflow-hidden hover:border-transparent transition-all duration-300 group hover:scale-[1.02] cursor-pointer"
            >
              <div className="absolute inset-0 ">
                <div className="w-full h-full bg-slate-900/30 rounded-2xl" />
              </div>

              <div className="relative z-10">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

                  <div className="absolute top-3 right-3 flex gap-2">
                    <div className="bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-700/50 text-yellow-400 text-xs flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {project.stats.stars}
                    </div>
                    <div className="bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-700/50 text-green-400 text-xs flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {project.stats.users}
                    </div>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full border border-blue-600/30 backdrop-blur-sm">
                      FEATURED
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <Calendar className="w-3 h-3" />
                      {project.stats.updated}
                    </div>
                  </div>

                  {/* 👇👇 line-clamp-2 added here 👇👇 */}
                  <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-1 text-slate-300 text-xs">
                      {project.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-blue-400 rounded-full" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="relative px-2 py-1 text-xs bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-full font-medium hover:border-transparent transition-all duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs h-8"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="relative flex-1 bg-transparent border border-slate-600 text-slate-300 hover:border-transparent font-medium text-xs h-8 group/btn overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 p-[1px]">
                        <span className="flex items-center justify-center w-full h-full bg-slate-900 rounded"></span>
                      </span>
                      <span className="relative z-10 flex items-center">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="relative bg-transparent border border-slate-600 text-slate-300 hover:border-transparent px-8 py-3 font-medium group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
              <span className="flex items-center justify-center w-full h-full bg-slate-900 rounded-md"></span>
            </span>
            <span className="relative z-10 flex items-center">
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
