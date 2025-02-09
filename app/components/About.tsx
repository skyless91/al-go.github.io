"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const skills = [
  "Rhino",
  "Grasshopper",
  "Python",
  "Revit",
  "3D Printing",
  "CNC Machining",
  "Parametric Design",
  "Digital Fabrication",
  "Material Science",
  "Architecture",
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="John Doe"
              width={600}
              height={600}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I'm a computational designer with a master's degree in industrial design, specializing in digital
              fabrication and parametric design architecture. My work explores the intersection of technology, design,
              and materials to create innovative solutions for the built environment.
            </p>
            <h3 className="text-xl font-semibold mb-4">Skills & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

