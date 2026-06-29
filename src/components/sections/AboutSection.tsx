import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { SectionLabel } from '@/components/common/SectionLabel'
import { fadeInUp, staggerContainer } from '@/utils/motion'

interface StatProps {
  target: number
  suffix: string
  label: string
}

function AnimatedCounter({ target, suffix, label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => Math.floor(v))
  const animated = useRef(false)

  useEffect(() => {
    if (isInView && !animated.current) {
      animated.current = true
      animate(motionValue, target, { duration: 1.2, ease: [0.16, 1, 0.3, 1] })
    }
  }, [isInView, motionValue, target])

  return (
    <div ref={ref}>
      <p className="font-display font-black text-display-md text-brutal-yellow tabular-nums">
        <motion.span>{rounded}</motion.span>{suffix}
      </p>
      <p className="font-mono text-xs uppercase tracking-wider text-brutal-white/60">{label}</p>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionLabel index="01" title="About" />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={fadeInUp} className="space-y-6">
          <h3 className="font-display font-black text-display-md leading-none">
            Bukan sekadar<br />
            <span className="text-brutal-yellow bg-brutal-black px-2">ngoding.</span>
          </h3>
          <div className="space-y-4 font-sans leading-relaxed">
            <p>
              Saya adalah seorang developer yang percaya bahwa kode adalah alat, bukan tujuan. 
              Setiap baris yang saya tulis adalah keputusan desain — mulai dari arsitektur hingga 
              bagaimana pengguna merasakan produk.
            </p>
            <p>
              Dengan pengalaman di React, TypeScript, dan ekosistem web modern, 
              saya membantu tim membangun produk yang tidak hanya berfungsi, 
              tetapi juga{' '}
              <strong className="underline decoration-brutal-blue decoration-4">
                meninggalkan kesan
              </strong>.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="border-3 border-brutal-black p-8 bg-brutal-black text-brutal-white">
          <div className="grid grid-cols-2 gap-8">
            <AnimatedCounter target={3} suffix="+" label="Tahun Pengalaman" />
            <AnimatedCounter target={20} suffix="+" label="Proyek Selesai" />
            <AnimatedCounter target={10} suffix="+" label="Klien Puas" />
            <AnimatedCounter target={999} suffix="" label="Kopi Habis" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
