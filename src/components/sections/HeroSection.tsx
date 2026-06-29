import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useTypewriter } from '@/hooks/useTypewriter'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 0 1" />
      <path d="M13 10a.5.5 0 0 0 0 1" />
      <path d="M11 14a2 2 0 0 0 2 0" />
    </svg>
  )
}

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden:  { y: 60,  opacity: 0 },
  visible: { y: 0,   opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export function HeroSection() {
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 600], [0, 40])
  const blockY = useTransform(scrollY, [0, 600], [0, -20])
  const { text: typewriterText } = useTypewriter({
    words: ['FRONTEND', 'BACKEND', 'FULL-STACK'],
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseAfterType: 2000,
    pauseAfterDelete: 400,
  })

  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
      >
        <div className="lg:col-span-8 space-y-6">
          <motion.div variants={itemVariants}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] bg-brutal-green border-3 border-brutal-black px-3 py-1 inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-brutal-black rounded-none inline-block" />
              Available for Work
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-display-xl font-display font-black leading-none tracking-tighter"
          >
            I'M<br />
            <span className="inline-flex flex-col">
              <span className="text-brutal-yellow bg-brutal-black px-4 inline-flex items-center min-h-[1.2em]" style={{ minWidth: '2ch' }}>
                {typewriterText}
                <span className="animate-blink inline-block w-[3px] h-[0.9em] bg-brutal-yellow ml-1 self-end mb-1" />
              </span>
              <span className="text-outline">ENGINEER</span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-lg max-w-xl leading-relaxed"
          >
            Saya membangun produk digital yang{' '}
            <strong className="underline decoration-brutal-yellow decoration-4">
              berfungsi dengan baik
            </strong>{' '}
            dan terlihat tidak seperti yang lain. Berspesialisasi di React, TypeScript, dan pengalaman pengguna yang tidak membosankan.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg" href="#projects">
              Lihat Karya Saya <ArrowDownRight size={20} />
            </Button>
            <Button variant="outline" size="lg" href="#contact">
              Hubungi Saya
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-3 pt-2">
            {[
              { href: 'https://github.com/username',      icon: <Github size={18} />,          label: 'GitHub' },
              { href: 'https://linkedin.com/in/user',     icon: <Linkedin size={18} />,        label: 'LinkedIn' },
              { href: 'https://instagram.com/username',   icon: <InstagramIcon />,              label: 'Instagram' },
              { href: 'https://tiktok.com/@username',     icon: <TikTokIcon />,                 label: 'TikTok' },
              { href: 'https://wa.me/6281234567890',      icon: <WhatsAppIcon />,               label: 'WhatsApp' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="border-3 border-brutal-black p-2 hover:bg-brutal-black hover:text-brutal-white transition-colors no-underline"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-4 relative"
        >
          <motion.div
            className="absolute inset-0 translate-x-3 translate-y-3 bg-brutal-yellow border-3 border-brutal-black"
            style={{ y: blockY }}
          />
          <div className="relative border-3 border-brutal-black overflow-hidden aspect-[3/4]">
            <motion.img
              src="/images/avatar.svg"
              alt="Foto profil"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              style={{ y: imageY }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-brutal-black text-brutal-white p-3">
              <p className="font-mono text-xs uppercase tracking-widest">
                Junadhan — Web Developer
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-16 flex items-center gap-3"
      >
        <div className="w-px h-16 bg-brutal-black" />
        <span className="font-mono text-xs uppercase tracking-widest rotate-90 origin-left translate-y-6">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
