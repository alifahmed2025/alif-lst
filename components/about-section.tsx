"use client"
import { Code, Palette, Zap, Users, Award, Coffee, Clock, Heart } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("story")
  const [isVisible, setIsVisible] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Award },
    { number: "3+", label: "Years Experience", icon: Clock },
    { number: "25+", label: "Happy Clients", icon: Heart },
    { number: "500+", label: "Cups of Coffee", icon: Coffee },
  ]

  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Next.js, TypeScript, Tailwind CSS" },
    { name: "Backend Development", icon: Zap, description: "Node.js, Python, PostgreSQL, MongoDB" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe XD, User Research, Prototyping" },
    { name: "Team Leadership", icon: Users, description: "Project Management, Mentoring, Agile Methodology" },
  ]

  const timeline = [
    {
      year: "2021",
      title: "Started Web Development Journey",
      description: "Began learning HTML, CSS, and JavaScript during university",
    },
    {
      year: "2022",
      title: "First Freelance Projects",
      description: "Started working with local businesses and startups",
    },
    {
      year: "2023",
      title: "Full-Stack Mastery",
      description: "Mastered React, Node.js, and modern development practices",
    },
    {
      year: "2024",
      title: "Leading Projects",
      description: "Now leading complex projects and mentoring junior developers",
    },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-slate-950 relative sm:-mt-5 -mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            I'm a passionate full-stack developer with 3+ years of experience creating digital solutions that make a
            difference.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                {/* Profile Image */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
                  <img
                    src="/asikmama.jpg"
                    alt="Asikur - Full Stack Developer"
                    className="relative w-full h-full object-cover rounded-full border-2 border-slate-600 shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-800 animate-pulse"></div>
                </div>

                {/* Personal Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Asikur Rahman</h3>
                  <p className="text-blue-400 font-medium mb-4">Full-Stack Developer</p>

                  <div className="space-y-3 text-sm text-slate-400">
                    <div className="flex items-center justify-center space-x-2">
                      <Palette className="w-4 h-4" />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Available for projects</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Heart className="w-4 h-4" />
                      <span>hello@asikur.dev</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Palette className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50">
                    <Heart className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2 space-y-12">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2">
              {["story", "skills", "timeline", "passion"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "story" && (
                <div className="space-y-8 animate-fadeInUp ">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
                    <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                      <p className="font-mono text-lg">
                        Hello! I'm Asikur, a passionate full-stack developer based in Dhaka, Bangladesh. My journey
                        into the world of web development began during my university years when I discovered the magic
                        of turning ideas into interactive digital experiences.
                      </p>
                      <p className="font-mono text-lg">
                        What started as curiosity about how websites work has evolved into a deep passion for creating
                        innovative solutions that solve real-world problems. I believe that great software is not just
                        about clean code, but about understanding users and creating experiences that truly matter.
                      </p>
                      <p className="font-mono text-lg">
                        Today, I specialize in modern web technologies like React, Next.js, and Node.js, helping
                        businesses and startups bring their digital visions to life. Every project is an opportunity to
                        learn something new and push the boundaries of what's possible.
                      </p>
                    </div>
                  </div>

                  {/* Philosophy */}
                  <div className="bg-slate-800/20 rounded-xl p-6 border-l-4 border-blue-400">
                    <h4 className="text-xl font-semibold text-white mb-3">My Philosophy</h4>
                    <p className="text-slate-300 italic">
                      "The best code is not just functional—it's elegant, maintainable, and tells a story. I strive to
                      write code that future developers (including myself) will thank me for."
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="space-y-8 animate-fadeInUp">
                  <h3 className="text-3xl font-bold text-white mb-6">Technical Skills</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{skill.name}</span>
                        </div>
                        <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
                          <skill.icon className="w-10 h-10 text-blue-400 mb-4" />
                          <p className="text-slate-300 text-sm leading-relaxed font-light">{skill.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "timeline" && (
                <div className="space-y-8 animate-fadeInUp">
                  <h3 className="text-3xl font-bold text-white mb-6">Career Timeline</h3>

                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

                    {timeline.map((item, index) => (
                      <div key={item.year} className="relative flex items-start space-x-6 pb-8">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-800 flex items-center justify-center relative z-10">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-grow">
                          <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
                            <div className="flex items-center space-x-3 mb-2">
                              <span className="text-blue-400 font-bold">{item.year}</span>
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                            <p className="text-slate-300">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "passion" && (
                <div className="space-y-8 animate-fadeInUp">
                  <h3 className="text-3xl font-bold text-white mb-6">What Drives Me</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="bg-slate-800/20 rounded-xl p-6">
                        <Code className="w-8 h-8 text-blue-400 mb-4" />
                        <h4 className="text-xl font-semibold text-white mb-3">Clean Code</h4>
                        <p className="text-slate-300">
                          I'm passionate about writing code that's not just functional, but elegant and maintainable.
                          Every line should have a purpose and tell a story.
                        </p>
                      </div>

                      <div className="bg-slate-800/20 rounded-xl p-6">
                        <Users className="w-8 h-8 text-green-400 mb-4" />
                        <h4 className="text-xl font-semibold text-white mb-3">User Experience</h4>
                        <p className="text-slate-300">
                          Technology should serve people, not the other way around. I focus on creating intuitive
                          experiences that users love.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-slate-800/20 rounded-xl p-6">
                        <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                        <h4 className="text-xl font-semibold text-white mb-3">Innovation</h4>
                        <p className="text-slate-300">
                          The tech world evolves rapidly, and I love staying at the forefront of new technologies and
                          methodologies.
                        </p>
                      </div>

                      <div className="bg-slate-800/20 rounded-xl p-6">
                        <Heart className="w-8 h-8 text-pink-400 mb-4" />
                        <h4 className="text-xl font-semibold text-white mb-3">Impact</h4>
                        <p className="text-slate-300">
                          Every project is an opportunity to make a positive impact, whether it's helping a business
                          grow or making someone's day easier.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
