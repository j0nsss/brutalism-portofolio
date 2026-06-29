import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useScrollProgress } from '@/hooks/useScrollProgress'

const navItems = [
  { label: 'About',   href: '#about',   index: '01' },
  { label: 'Skills',  href: '#skills',  index: '02' },
  { label: 'Contact', href: '#contact', index: '03' },
]

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const scrollProgress = useScrollProgress()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-brutal-white border-b-3 border-brutal-black'
          : 'bg-transparent'
      )}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brutal-black/10">
        <motion.div
          className="h-full bg-brutal-red"
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </div>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className={cn(
            'font-display font-black text-xl uppercase tracking-tighter',
            'border-3 border-brutal-black px-3 py-1',
            'no-underline hover:bg-brutal-yellow transition-colors'
          )}
        >
          jonad<span className="text-brutal-red">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  'font-mono text-xs uppercase tracking-widest',
                  'px-3 py-2 no-underline',
                  'hover:bg-brutal-black hover:text-brutal-white',
                  'transition-colors duration-100',
                  'border-3 border-transparent hover:border-brutal-black'
                )}
              >
                <span className="text-brutal-red mr-1">[{item.index}]</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:block btn-brutal bg-brutal-yellow hover:bg-brutal-yellow"
        >
          Hire Me
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border-3 border-brutal-black p-2"
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-brutal-white border-b-3 border-brutal-black overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-0">
              {navItems.map((item) => (
                <li key={item.href} className="border-b-3 border-brutal-black last:border-0">
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 py-4 font-display font-bold text-lg no-underline hover:pl-4 transition-all"
                  >
                    <span className="font-mono text-xs text-brutal-red">[{item.index}]</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
