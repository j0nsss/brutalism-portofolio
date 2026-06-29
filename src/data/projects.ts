import { Project } from '@/types'

export const projects: Project[] = [
  {
    id:          '1',
    title:       'CRUNCH — Expense Tracker',
    slug:        'crunch-expense-tracker',
    description: 'Aplikasi pelacak pengeluaran real-time dengan visualisasi data yang kasar.',
    tags:        ['React', 'TypeScript', 'Supabase', 'Recharts'],
    accentColor: '#FFE500',
    image:       '/images/projects/crunch.svg',
    liveUrl:     'https://crunch-app.vercel.app',
    repoUrl:     'https://github.com/username/crunch',
    year:        2024,
    featured:    true,
  },
  {
    id:          '2',
    title:       'BLOC — Design System',
    slug:        'bloc-design-system',
    description: 'Design system berbasis komponen neo-brutalist untuk tim produk.',
    tags:        ['React', 'Storybook', 'Tailwind', 'Figma'],
    accentColor: '#0057FF',
    image:       '/images/projects/bloc.svg',
    repoUrl:     'https://github.com/username/bloc',
    year:        2024,
    featured:    true,
  },
]
