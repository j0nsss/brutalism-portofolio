import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:  ButtonVariant
  size?:     ButtonSize
  href?:     string
  external?: boolean
  children:  React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'bg-brutal-yellow text-brutal-black hover:bg-brutal-yellow',
  secondary: 'bg-brutal-black  text-brutal-white hover:bg-brutal-black',
  outline:   'bg-transparent   text-brutal-black hover:bg-brutal-black hover:text-brutal-white',
  ghost:     'bg-transparent   text-brutal-black border-transparent hover:border-brutal-black',
  danger:    'bg-brutal-red    text-brutal-white hover:bg-brutal-red',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-8 py-4   text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, external, className, children, ...props }, ref) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center gap-2',
      'font-display font-bold uppercase tracking-wider',
      'border-3 border-brutal-black',
      'shadow-brutal',
      'hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none',
      'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
      'transition-all duration-100',
      'cursor-pointer no-underline',
      variantClasses[variant],
      sizeClasses[size],
      className
    )

    if (href) {
      return (
        <a
          href={href}
          className={baseClasses}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
