export function SkillsSection() {
  const skills = [
    { name: "React.js", level: 95, color: "from-cyan-400 to-blue-500", icon: "⚛️" },
    { name: "Next.js", level: 92, color: "from-gray-700 to-gray-900", icon: "▲" },
    { name: "MongoDB", level: 85, color: "from-green-500 to-green-700", icon: "🍃" },
    { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500", icon: "🎨" },
    { name: "Laravel", level: 88, color: "from-red-500 to-red-600", icon: "🔥" },
    { name: "TypeScript", level: 82, color: "from-blue-500 to-blue-700", icon: "TS" },
    { name: "Node.js", level: 80, color: "from-green-400 to-green-600", icon: "🟢" },
    { name: "PHP", level: 85, color: "from-purple-500 to-purple-700", icon: "🐘" },
    { name: "MySQL", level: 78, color: "from-blue-600 to-indigo-700", icon: "🗄️" },
    { name: "JavaScript", level: 93, color: "from-yellow-400 to-yellow-600", icon: "JS" },
    { name: "Git", level: 87, color: "from-orange-500 to-red-500", icon: "📝" },
    { name: "Docker", level: 70, color: "from-blue-400 to-blue-600", icon: "🐳" },
  ]

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-slate-900/30 p-6 rounded-2xl border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                </div>
                <span className="text-slate-400 text-sm font-medium bg-slate-800/50 px-3 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800/50 rounded-full h-3 mb-4 overflow-hidden">
                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out shadow-lg`}
                  style={{
                    width: `${skill.level}%`,
                    boxShadow: `0 0 20px rgba(59, 130, 246, 0.3)`,
                  }}
                />
              </div>

              {/* Skill Level Text */}
              <div className="text-slate-300 text-sm">
                {skill.level >= 90
                  ? "Expert"
                  : skill.level >= 80
                    ? "Advanced"
                    : skill.level >= 70
                      ? "Intermediate"
                      : "Learning"}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Frontend */}
          <div className="text-center p-6 bg-slate-900/20 rounded-2xl border border-slate-800/30">
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-600/20">
              <span className="text-3xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Frontend</h3>
            <p className="text-slate-400 text-sm">React.js, Next.js, JavaScript, TypeScript, Tailwind CSS</p>
          </div>

          {/* Backend */}
          <div className="text-center p-6 bg-slate-900/20 rounded-2xl border border-slate-800/30">
            <div className="w-16 h-16 bg-green-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-600/20">
              <span className="text-3xl">⚙️</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Backend</h3>
            <p className="text-slate-400 text-sm">Node.js, Laravel, PHP, MongoDB, MySQL</p>
          </div>

          {/* Tools & Others */}
          <div className="text-center p-6 bg-slate-900/20 rounded-2xl border border-slate-800/30">
            <div className="w-16 h-16 bg-orange-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-orange-600/20">
              <span className="text-3xl">🛠️</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Tools & DevOps</h3>
            <p className="text-slate-400 text-sm">Git, Docker, VS Code, Postman, GitHub</p>
          </div>
        </div>
      </div>
    </section>
  )
}
