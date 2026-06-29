import { motion } from 'framer-motion'
import { Skill } from '@/types'

interface SkillBarProps {
  skill: Skill
  index: number
}

export function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-sans font-semibold text-sm">{skill.name}</span>
        <span className="font-mono text-xs text-brutal-black/60">{skill.level}%</span>
      </div>
      <div className="h-3 border-3 border-brutal-black bg-brutal-white overflow-hidden">
        <motion.div
          className="h-full bg-brutal-yellow"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  )
}
