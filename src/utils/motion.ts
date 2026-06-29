import { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
}

export const staggerContainer = (delay = 0): Variants => ({
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: delay }
  },
})

export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -60 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  },
}

export const brutalHover = {
  rest: {
    x: 0, y: 0,
    boxShadow: '4px 4px 0px 0px #000000',
  },
  hover: {
    x: 4, y: 4,
    boxShadow: '0px 0px 0px 0px #000000',
    transition: { duration: 0.1, ease: 'linear' }
  },
  tap: {
    x: 5, y: 5,
    boxShadow: '0px 0px 0px 0px #000000',
    transition: { duration: 0.05 }
  },
}

export const pageTransition: Variants = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0,  transition: { duration: 0.3 } },
  exit:     { opacity: 0, y: -20, transition: { duration: 0.2 } },
}
