import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/common/SectionLabel'
import { ProjectCard } from '@/components/common/ProjectCard'
import { projects } from '@/data/projects'
import { staggerContainer } from '@/utils/motion'

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured)

  if (!featured.length) return null

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionLabel index="03" title="Featured Projects" />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {featured.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </motion.div>
    </section>
  )
}
