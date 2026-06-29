import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'e1',
    company: 'Tech Company',
    role: 'Frontend Developer',
    period: 'Jan 2024 – Sekarang',
    description: [
      'Membangun dan memelihara aplikasi React dengan TypeScript',
      'Mengimplementasikan design system berbasis komponen',
      'Berkolaborasi dengan tim desain untuk pengalaman pengguna optimal',
    ],
    tags: ['React', 'TypeScript', 'Tailwind'],
    current: true,
  },
  {
    id: 'e2',
    company: 'Digital Agency',
    role: 'Junior Developer',
    period: 'Jun 2022 – Des 2023',
    description: [
      'Mengembangkan website client menggunakan React dan Next.js',
      'Integrasi REST API dan database PostgreSQL',
      'Optimasi performa dan SEO',
    ],
    tags: ['Next.js', 'PostgreSQL', 'Vercel'],
    current: false,
  },
]
