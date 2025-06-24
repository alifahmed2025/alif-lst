import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 font-mono">
                I'm always interested in hearing about new projects and opportunities. Whether you're a company looking
                to hire, or you're someone with an idea, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center border border-blue-600/20">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Email</p>
                  <p className="text-slate-400 font-light">hello@asikur.dev</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-green-600/10 rounded-2xl flex items-center justify-center border border-green-600/20">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Phone</p>
                  <p className="text-slate-400 font-light">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-purple-600/10 rounded-2xl flex items-center justify-center border border-purple-600/20">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Location</p>
                  <p className="text-slate-400 font-light">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/30 p-8 rounded-2xl border border-slate-800/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-3">Name</label>
                  <Input
                    placeholder="Your name"
                    className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-3">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 h-12 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">Subject</label>
                <Input
                  placeholder="Project inquiry"
                  className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 h-12 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 rounded-xl"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl font-semibold">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-slate-400 text-sm font-light">hello@asikur.dev</p>
    </section>
  )
}
