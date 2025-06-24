import Image from "next/image"

export function FeaturedWork() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="relative max-w-6xl mx-auto">
          {/* Featured Project Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-image.png"
              alt="Featured development work showing code editor and project interface"
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />

            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>

          {/* Floating elements for visual interest */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
        </div>
      </div>
    </section>
  )
}
