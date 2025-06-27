'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ParticleBackground from './ParticleBackground'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-noir-primary via-noir-dark to-noir-primary opacity-90" />
      <ParticleBackground />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8"
        >
          時は、<span className="text-gradient">金なり</span>。
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-noir-light/80 mb-12 leading-relaxed"
        >
          自己満足の投稿に、これ以上、
          <br />
          あなたの貴重な時間を浪費するな。
          <br />
          <br />
          まずは30分。我々が、あなたの現在地と、
          <br />
          トップまでの最短距離を示して見せる。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-noir-gold text-noir-primary font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-noir-gold/50 transition-all duration-300 animate-pulse-glow"
          >
            今すぐ、無料でNo.1戦略を聞く
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-8 text-noir-light/60"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-noir-gold">30分</p>
            <p className="text-sm">無料診断</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-noir-gold">100%</p>
            <p className="text-sm">秘密厳守</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-noir-gold">24h</p>
            <p className="text-sm">以内返信</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}