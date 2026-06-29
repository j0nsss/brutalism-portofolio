import { cn } from '@/utils/cn'

interface CardProps {
  children:     React.ReactNode
  className?:   string
  accent?:      string
  hoverable?:   boolean
  onClick?:     () => void
}

export function Card({ children, className, accent, hoverable = true, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'border-3 border-brutal-black bg-brutal-white',
        'shadow-brutal',
        hoverable && [
          'hover:translate-x-[4px] hover:translate-y-[4px]',
          'hover:shadow-none',
          'transition-all duration-150',
          onClick && 'cursor-pointer',
        ],
        className
      )}
      style={accent ? { borderTopColor: accent, borderTopWidth: '6px' } : undefined}
    >
      {children}
    </div>
  )
}
