import { motion } from "framer-motion"

interface TimelineItem {
  title: string
  date: string
}

interface ProjectTimelineProps {
  timeline: TimelineItem[]
}

export default function ProjectTimeline({ timeline }: ProjectTimelineProps) {
  return (
    <div className="mt-8">
      <h4 className="text-xl font-semibold mb-4">Project Timeline</h4>
      <div className="relative">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8 flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 w-24 text-sm text-gray-400">{item.date}</div>
            <div className="w-4 h-4 bg-white rounded-full mx-4 flex-shrink-0"></div>
            <div className="flex-grow">
              <h5 className="text-lg font-medium">{item.title}</h5>
            </div>
          </motion.div>
        ))}
        <div className="absolute left-[7.5rem] top-2 bottom-2 w-0.5 bg-gray-700"></div>
      </div>
    </div>
  )
}

