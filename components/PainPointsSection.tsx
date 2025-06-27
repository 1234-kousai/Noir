'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface PainPointCardProps {
  number: string
  text: string
  index: number
}

function PainPointCard({ number, text, index }: PainPointCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayNumber, setDisplayNumber] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      const targetNumber = parseInt(number)
      const duration = 1500
      const steps = 30
      const increment = targetNumber / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= targetNumber) {
          setDisplayNumber(targetNumber)
          clearInterval(timer)
        } else {
          setDisplayNumber(Math.floor(current))
        }
      }, duration / steps)
      
      return () => clearInterval(timer)
    }
  }, [isInView, number])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(139, 0, 0, 0.3)',
      }}
      className="bg-gradient-to-br from-noir-dark to-black p-8 rounded-2xl border border-noir-crimson/20 transition-all duration-300"
    >
      <div className="text-6xl font-bold text-noir-crimson mb-4">
        {displayNumber !== 0 && displayNumber}
        {displayNumber !== 0 && number.includes('万') && '万'}
        {displayNumber !== 0 && number.includes('分') && '分'}
      </div>
      <p className="text-lg md:text-xl text-noir-light/90 leading-relaxed">
        {text}
      </p>
    </motion.div>
  )
}

export default function PainPointsSection() {
  const painPoints = [
    {
      number: '3分1',
      text: '毎日3投稿しても、"いいね"はライバルの3分の1。',
    },
    {
      number: '1万',
      text: 'フォロワーは1万人を超えたのに、指名は全く増えない。',
    },
    {
      number: '20万',
      text: '"自己投資20万円"でも成果ゼロ。何が正解か分からない。',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-noir-primary to-noir-dark">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center mb-16"
        >
          こんな「痛み」を、
          <br />
          見て見ぬふりしていないか？
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={index}
              number={point.number}
              text={point.text}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}