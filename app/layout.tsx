import "./globals.css"
import { Montserrat } from "next/font/google"
import Navigation from "./components/Navigation"
import type React from "react" // Added import for React

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "John Doe | Computational Designer",
  description:
    "Portfolio of John Doe, Computational Designer specializing in digital fabrication and parametric design architecture",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} bg-black text-white`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

