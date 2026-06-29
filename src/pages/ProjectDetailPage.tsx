import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { SEO } from '@/components/layout/SEO'
import { projects } from '@/data/projects'
import { cn } from '@/utils/cn'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <SEO title="404 — Not Found" description="Halaman yang Anda cari tidak ditemukan." />
        <div className="text-center space-y-6 border-3 border-brutal-black p-12 max-w-lg shadow-brutal-lg">
          <div className="text-8xl font-black text-brutal-red">404</div>
          <h1 className="font-display font-black text-2xl">Proyek Tidak Ditemukan</h1>
          <p className="font-mono text-sm text-brutal-black/60">Proyek dengan slug "{slug}" tidak ada.</p>
          <Button variant="primary" href="/">Kembali ke Beranda</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <SEO
        title={project.title}
        description={project.description}
        image={project.image}
        url={`/projects/${project.slug}`}
      />
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider no-underline mb-12 hover:underline"
      >
        <ArrowLeft size={16} /> Kembali
      </Link>

      <div className="border-3 border-brutal-black shadow-brutal-lg overflow-hidden">
        <div
          className="aspect-video relative border-b-3 border-brutal-black"
          style={{ backgroundColor: project.accentColor }}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-10 space-y-8">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="space-y-2">
              <h1 className="font-display font-black text-display-md leading-none">
                {project.title}
              </h1>
              <p className="font-mono text-sm text-brutal-black/60">{project.year}</p>
            </div>
            <span className="font-mono text-xs bg-brutal-black text-brutal-white px-3 py-1">
              {project.featured ? 'FEATURED' : 'PROJECT'}
            </span>
          </div>

          <p className="font-sans text-lg leading-relaxed max-w-2xl">
            {project.longDesc || project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} color="blue">{tag}</Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t-3 border-brutal-black">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'btn-brutal bg-brutal-yellow',
                  'inline-flex items-center gap-2'
                )}
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'btn-brutal bg-brutal-black text-brutal-white',
                  'inline-flex items-center gap-2'
                )}
              >
                <Github size={18} /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
