import { cn } from '@/utils/cn'

interface BadgeProps {
  children:  React.ReactNode
  color?:    'black' | 'yellow' | 'red' | 'blue' | 'green'
  className?: string
}

const colorMap = {
  black:  'bg-brutal-black  text-brutal-white',
  yellow: 'bg-brutal-yellow text-brutal-black',
  red:    'bg-brutal-red    text-brutal-white',
  blue:   'bg-brutal-blue   text-brutal-white',
  green:  'bg-brutal-green  text-brutal-black',
}

export function Badge({ children, color = 'black', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-xs uppercase tracking-wider',
        'px-2 py-0.5 border-2 border-brutal-black',
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  )
}
