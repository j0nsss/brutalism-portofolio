import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { SEO } from '@/components/layout/SEO'
import { projects } from '@/data/projects'
import { Badge } from '@/components/ui/Badge'
import { NotFoundPage } from './NotFoundPage'
import { fadeInUp } from '@/utils/motion'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <NotFoundPage />

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        image={project.image}
        url={`/projects/${project.slug}`}
      />

      <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider no-underline border-3 border-brutal-black px-4 py-2 hover:bg-brutal-black hover:text-brutal-white transition-colors"
            >
              <ArrowLeft size={14} /> Kembali
            </Link>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(project.images || [project.image]).map((img, i) => (
              <div
                key={i}
                className="border-3 border-brutal-black overflow-hidden"
                style={{ backgroundColor: project.accentColor }}
              >
                <div className="aspect-video relative">
                  <img
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <h1 className="font-display font-black text-display-lg leading-none">
                  {project.title}
                </h1>
                <span className="font-mono text-sm text-brutal-black/60 shrink-0 border-3 border-brutal-black px-3 py-1">
                  {project.year}
                </span>
              </div>

              <p className="font-sans text-lg leading-relaxed">
                {project.description}
              </p>

              {project.longDesc && (
                <p className="font-sans text-base leading-relaxed text-brutal-black/70">
                  {project.longDesc}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} color="black">{tag}</Badge>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="border-3 border-brutal-black p-6 space-y-4 bg-brutal-black text-brutal-white">
                <h3 className="font-mono text-xs uppercase tracking-wider text-brutal-yellow">
                  Links
                </h3>
                <div className="h-px bg-brutal-white/20" />
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-display font-bold text-sm no-underline hover:underline decoration-2"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-display font-bold text-sm no-underline hover:underline decoration-2"
                  >
                    <Github size={16} /> Source Code
                  </a>
                )}
              </div>

              <Link
                to="/"
                className="block btn-brutal bg-brutal-yellow text-center no-underline"
              >
                ← Kembali ke Beranda
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
