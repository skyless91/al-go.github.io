"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import ProjectCard from "./ProjectCard"
import InteractiveModel from "./InteractiveModel"
import ProjectTimeline from "./ProjectTimeline"
import PhotoCarousel from "./PhotoCarousel"

const projects = [
  {
    id: 1,
    title: "Parametric Facade Design",
    description: "A computational approach to designing dynamic building facades using Grasshopper and Rhino.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tools: ["Rhino", "Grasshopper", "Python"],
    category: "Parametric Design",
    role: "Lead Computational Designer",
    context: "Commissioned by a leading architecture firm for a high-rise office building in downtown Manhattan.",
    modelUrl: "/assets/3d/duck.glb",
    timeline: [
      { title: "Project Initiation", date: "January 2023" },
      { title: "Concept Development", date: "February 2023" },
      { title: "Parametric Modeling", date: "March-April 2023" },
      { title: "Optimization & Refinement", date: "May 2023" },
      { title: "Final Design Delivery", date: "June 2023" },
    ],
    has3DModel: true,
  },
  {
    id: 2,
    title: "3D Printed Architectural Model",
    description: "Exploring the possibilities of 3D printing in architectural prototyping and model making.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tools: ["Fusion 360", "3D Printing", "Post-processing"],
    category: "Digital Fabrication",
    role: "Digital Fabrication Specialist",
    context: "Research project in collaboration with the University's School of Architecture.",
    modelUrl: "/assets/3d/duck.glb",
    timeline: [
      { title: "Research Phase", date: "September 2022" },
      { title: "Digital Modeling", date: "October-November 2022" },
      { title: "3D Printing", date: "December 2022" },
      { title: "Post-processing", date: "January 2023" },
      { title: "Exhibition", date: "February 2023" },
    ],
    has3DModel: false,
  },
  {
    id: 3,
    title: "Biomimetic Material Research",
    description: "Investigating nature-inspired materials for sustainable architecture and product design.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    tools: ["Material Science", "Digital Fabrication", "Microscopy"],
    category: "Material Research",
    role: "Research Lead",
    context: "Funded research project aimed at developing new sustainable building materials.",
    modelUrl: "/assets/3d/duck.glb",
    timeline: [
      { title: "Literature Review", date: "March 2023" },
      { title: "Material Sampling", date: "April-May 2023" },
      { title: "Laboratory Testing", date: "June-July 2023" },
      { title: "Data Analysis", date: "August 2023" },
      { title: "Prototype Development", date: "September-October 2023" },
    ],
    has3DModel: true,
  },
]

const categories = ["All", "Parametric Design", "Digital Fabrication", "Material Research"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setSelectedProject(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-white text-black" : "bg-gray-800 text-white"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              ref={modalRef}
              className="bg-gray-900 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-4">{selectedProject.description}</p>
              <p className="text-gray-300 mb-4">
                <strong>Role:</strong> {selectedProject.role}
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Context:</strong> {selectedProject.context}
              </p>
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              {selectedProject.has3DModel ? (
                <InteractiveModel modelUrl={selectedProject.modelUrl} />
              ) : (
                <PhotoCarousel images={selectedProject.images} />
              )}
              <ProjectTimeline timeline={selectedProject.timeline} />
              <button
                className="mt-6 bg-white text-black px-4 py-2 rounded-full"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

