import { Monitor, Smartphone, Server, Palette } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "Progressive Web Apps"],
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable server-side solutions and API development",
      features: ["RESTful APIs", "GraphQL", "Database Design", "Cloud Integration"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that creates engaging digital experiences",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
  ]

  return (
    <section id="services" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800/50 hover:border-slate-700/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed font-light">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-slate-300 text-sm flex items-center font-light">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
