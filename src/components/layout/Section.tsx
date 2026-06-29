import { cn } from '@/utils/cn'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
}

export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-24', className)}>
      {children}
    </section>
  )
}
