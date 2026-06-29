import { lazy, Suspense } from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { Marquee } from '@/components/common/Marquee'
import { SEO } from '@/components/layout/SEO'

const AboutSection = lazy(() => import('@/components/sections/AboutSection'))
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection'))
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection'))
const ExperienceSection = lazy(() => import('@/components/sections/ExperienceSection'))
const ContactSection = lazy(() => import('@/components/sections/ContactSection'))

function SectionFallback() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="border-3 border-brutal-black p-12 animate-pulse">
        <div className="h-6 w-48 bg-brutal-black/10 border-2 border-brutal-black" />
      </div>
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="Portfolio kreatif developer & designer — React, TypeScript, dan pengalaman pengguna yang tidak membosankan."
        url="/"
      />
      <HeroSection />
      <Marquee
        items={['Available for Work', 'Based in Yogyakarta', 'Open to Remote', "Let's Build Together"]}
        speed="normal"
        bgColor="#000"
        textColor="#FFE500"
      />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
    </>
  )
}
