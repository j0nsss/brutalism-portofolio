import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/common/SectionLabel'
import { SkillBar } from '@/components/common/SkillBar'
import { skills } from '@/data/skills'
import { SkillCategory } from '@/types'
import { staggerContainer } from '@/utils/motion'

const categories: { key: SkillCategory; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend',  label: 'Backend'  },
  { key: 'devops',   label: 'DevOps'   },
  { key: 'design',   label: 'Design'   },
  { key: 'tools',    label: 'Tools'    },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <SectionLabel index="02" title="Skills & Tools" />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-3 border-brutal-black"
      >
        {categories.map((cat, catIdx) => {
          const catSkills = skills.filter((s) => s.category === cat.key)
          if (!catSkills.length) return null
          return (
            <div
              key={cat.key}
              className="p-8 border-b-3 border-r-3 border-brutal-black odd:border-r-0 lg:odd:border-r-3 last:border-b-0"
            >
              <h3 className="font-display font-black text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="text-brutal-red font-mono">[{String(catIdx + 1).padStart(2, '0')}]</span>
                {cat.label}
              </h3>

              <div className="space-y-4">
                {catSkills.map((skill, idx) => (
                  <SkillBar key={skill.id} skill={skill} index={idx} />
                ))}
              </div>
            </div>
          )
        })}
      </motion.div>
    </section>
  )
}
