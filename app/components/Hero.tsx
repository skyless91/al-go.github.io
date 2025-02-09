"use client"

import { motion } from "framer-motion"
import { ArrowDownIcon } from "lucide-react"
import ParticleBackground from "./ParticleBackground"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <ParticleBackground />
      <motion.div
        className="z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Alonso Gordillo</h1>
        <p className="text-xl md:text-2xl mb-8">Computational Designer | Digital Fabrication | Parametric Designer</p>
        <motion.a
          href="#projects"
          className="inline-block bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
        </motion.a>
      </motion.div>
      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="#projects" className="text-white">
          <ArrowDownIcon className="w-8 h-8 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

