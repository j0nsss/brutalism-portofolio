import { cn } from '@/utils/cn'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'font-mono text-xs uppercase tracking-wider',
        'border-2 border-brutal-black px-2 py-0.5',
        'bg-brutal-yellow text-brutal-black',
        className
      )}
    >
      {children}
    </span>
  )
}
