import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Asikur Rahman - Full-Stack Web Developer | Modern Web Experiences",
  icons:{
   icon: "/logo.jpg"
  },
  description:
    "Transforming ideas into exceptional digital experiences with clean code and creative design. Specializing in Next.js, React, and full-stack development.",
  keywords: "web developer, full-stack developer, react, next.js, typescript, portfolio, asikur rahman",
  authors: [{ name: "Asikur Rahman" }],
  creator: "Asikur Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asikur.dev",
    title: "Asikur Rahman - Full-Stack Web Developer",
    description: "Transforming ideas into exceptional digital experiences with clean code and creative design.",
    siteName: "Asikur Rahman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asikur Rahman - Full-Stack Web Developer",
    description: "Transforming ideas into exceptional digital experiences with clean code and creative design.",
    creator: "@asikur",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
