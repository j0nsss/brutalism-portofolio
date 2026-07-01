import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'NeoFin',
    slug: 'neofin',
    description: 'Aplikasi personal finance tracker untuk memantau pemasukan, pengeluaran, dan target keuangan secara real-time.',
    longDesc: 'NeoFin adalah aplikasi personal finance tracker yang dibangun dengan Next.js dan TypeScript. Aplikasi ini memungkinkan pengguna untuk mencatat pemasukan dan pengeluaran, membuat target keuangan, serta melihat visualisasi data keuangan secara real-time. Dibangun dengan arsitektur modern dan desain yang responsif.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
    accentColor: '#00FF85',
    image: '/images/projects/project 1-1.png',
    images: [
      '/images/projects/project 1-1.png',
      '/images/projects/project 1-2.png',
      '/images/projects/project 1-3.png',
    ],
    liveUrl: 'https://neofin-pearl.vercel.app',
    repoUrl: 'https://github.com/j0nsss/Persolnal-Finance-Tracker.git',
    year: 2025,
    featured: true,
  },
]
