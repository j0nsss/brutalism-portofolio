import { SectionLabel } from '@/components/common/SectionLabel'
import { ProjectCard } from '@/components/common/ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionLabel index="02" title="Featured Work" accent="#0057FF" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
