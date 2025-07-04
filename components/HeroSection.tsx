'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ParticleBackground from './ParticleBackground'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-noir-primary via-noir-dark to-noir-primary opacity-90" />
      <ParticleBackground />
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)`,
        }}
        transition={{ type: 'spring', damping: 30 }}
      />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
        >
          <span className="animate-glitch">「量産キャスト」</span>で、
          <br />
          終わるつもりか。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl font-sans font-light mb-4"
        >
          SNSは、指名と売上を増やす武器だ。
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl font-sans mb-12"
        >
          夜職に完全特化したプロチームが、あなたを
          <span className="text-gradient font-bold">"選ばれ続ける存在"</span>
          へとプロデュースする。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-noir-gold text-noir-primary font-bold text-lg rounded-full hover:shadow-lg hover:shadow-noir-gold/50 transition-all duration-300 animate-pulse-glow"
          >
            無料でパーソナル戦略を聞く
          </motion.button>
          
          <motion.a
            href="#results"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-noir-gold text-noir-gold font-bold text-lg rounded-full hover:bg-noir-gold hover:text-noir-primary transition-all duration-300"
          >
            まず実績を見る →
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-noir-gold animate-bounce" />
      </motion.div>
    </section>
  )
}