import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Project } from '@/types'
import { cn } from '@/utils/cn'

interface ProjectCardProps {
  project: Project
  index:   number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card
        accent={project.accentColor}
        className="group overflow-hidden"
      >
        <div
          className="relative overflow-hidden border-b-3 border-brutal-black aspect-video"
          style={{ backgroundColor: project.accentColor }}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 font-mono text-xs bg-brutal-black text-brutal-white px-2 py-1">
            [{String(index + 1).padStart(2, '0')}]
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display font-black text-xl leading-tight">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-brutal-black/60 shrink-0">
              {project.year}
            </span>
          </div>

          <p className="font-sans text-sm leading-relaxed text-brutal-black/80">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="flex gap-3 pt-2 border-t-3 border-brutal-black">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider',
                  'no-underline hover:underline hover:decoration-2'
                )}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider',
                  'no-underline hover:underline hover:decoration-2'
                )}
              >
                <Github size={14} /> Source Code
              </a>
            )}
            <Link
              to={`/projects/${project.slug}`}
              className={cn(
                'ml-auto flex items-center gap-1 font-display font-bold text-xs uppercase',
                'no-underline border-3 border-brutal-black px-3 py-1.5',
                'hover:bg-brutal-black hover:text-brutal-white transition-colors'
              )}
            >
              Detail <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
