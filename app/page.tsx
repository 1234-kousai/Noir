'use client'

import { useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import PainPointsSection from '@/components/PainPointsSection'
import SolutionSection from '@/components/SolutionSection'
import ResultsSection from '@/components/ResultsSection'
import StrengthsSection from '@/components/StrengthsSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const id = target.getAttribute('href')?.slice(1)
        if (id) {
          const element = document.getElementById(id)
          element?.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', smoothScroll)
    return () => document.removeEventListener('click', smoothScroll)
  }, [])

  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <ResultsSection />
      <StrengthsSection />
      <CTASection />
    </main>
  )
}