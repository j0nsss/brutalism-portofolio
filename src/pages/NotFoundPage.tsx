import { Link } from 'react-router-dom'
import { SEO } from '@/components/layout/SEO'

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <SEO title="404 — Halaman Tidak Ditemukan" description="Halaman yang Anda cari tidak tersedia." />
      <div className="text-center space-y-8 max-w-lg">
        <div className="border-3 border-brutal-black p-12 shadow-brutal-lg bg-brutal-white">
          <div className="text-8xl font-black text-brutal-red leading-none mb-4">404</div>
          <h1 className="font-display font-black text-2xl mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="font-mono text-sm text-brutal-black/60 mb-8">
            Sepertinya halaman ini belum dibuat — atau memang tidak pernah ada.
          </p>
          <div className="h-px border-t-3 border-brutal-black mb-8" />
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display font-bold uppercase tracking-wider px-8 py-4 border-3 border-brutal-black shadow-brutal bg-brutal-yellow no-underline hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
        <p className="font-mono text-xs text-brutal-black/60">
          ERROR 404 — PAGE NOT FOUND
        </p>
      </div>
    </div>
  )
}
