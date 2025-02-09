import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tools: string[]
    has3DModel: boolean
  }
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span key={tool} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-4">
          {project.has3DModel ? (
            <span className="text-blue-400">Includes 3D Model</span>
          ) : (
            <span className="text-green-400">Includes Photo Gallery</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

