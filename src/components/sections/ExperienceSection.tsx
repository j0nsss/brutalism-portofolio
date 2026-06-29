import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/common/SectionLabel'
import { Badge } from '@/components/ui/Badge'
import { experiences } from '@/data/experience'
import { fadeInUp, staggerContainer } from '@/utils/motion'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionLabel index="04" title="Experience" accent="#00FF85" />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-0 border-3 border-brutal-black divide-y-3 divide-brutal-black"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            variants={fadeInUp}
            className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-6"
          >
            <div className="lg:col-span-1">
              <div className="space-y-1">
                <h3 className="font-display font-black text-lg">{exp.role}</h3>
                <p className="font-mono text-sm text-brutal-black/60">{exp.company}</p>
                <p className="font-mono text-xs text-brutal-black/60">{exp.period}</p>
              </div>
              {exp.current && (
                <span className="inline-block mt-3 font-mono text-xs uppercase tracking-wider bg-brutal-green text-brutal-black border-2 border-brutal-black px-2 py-0.5">
                  Saat Ini
                </span>
              )}
            </div>
            <div className="lg:col-span-3 space-y-4">
              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans leading-relaxed">
                    <span className="text-brutal-red font-mono mt-1 shrink-0">→</span>
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <Badge key={tag} color="blue">{tag}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
