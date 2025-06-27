'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface ResultCardProps {
  title: string
  beforeValue: string | number
  afterValue: string | number
  metric: string
  chartType: 'line' | 'area'
  index: number
}

function ResultCard({ title, beforeValue, afterValue, metric, chartType, index }: ResultCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [animatedData, setAnimatedData] = useState<any[]>([])

  const generateChartData = () => {
    const before = typeof beforeValue === 'string' ? parseInt(beforeValue.replace(/[^0-9]/g, '')) : beforeValue
    const after = typeof afterValue === 'string' ? parseInt(afterValue.replace(/[^0-9]/g, '')) : afterValue
    
    const data = []
    for (let i = 0; i <= 30; i++) {
      const progress = i / 30
      const value = before + (after - before) * Math.pow(progress, 2)
      data.push({
        day: i,
        value: Math.round(value),
      })
    }
    return data
  }

  useEffect(() => {
    if (isInView) {
      const finalData = generateChartData()
      const animationDuration = 2000
      const steps = 30
      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        setAnimatedData(finalData.slice(0, currentStep + 1))
        
        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, animationDuration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, beforeValue, afterValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-noir-dark to-black p-6 rounded-2xl border border-noir-gold/20"
    >
      <h3 className="text-xl font-serif font-bold mb-4 text-noir-gold">{title}</h3>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-center">
          <p className="text-sm text-noir-light/60 mb-1">Before</p>
          <p className="text-2xl font-bold text-noir-light/80">{beforeValue}</p>
        </div>
        <div className="text-3xl text-noir-gold">→</div>
        <div className="text-center">
          <p className="text-sm text-noir-gold/80 mb-1">After</p>
          <p className="text-3xl font-bold text-noir-gold">{afterValue}</p>
        </div>
      </div>

      <div className="h-40 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'line' ? (
            <LineChart data={animatedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="day" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1A1A', 
                  border: '1px solid #D4AF37',
                  borderRadius: '8px'
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#D4AF37"
                strokeWidth={2}
              />
            </LineChart>
          ) : (
            <AreaChart data={animatedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="day" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1A1A1A', 
                  border: '1px solid #D4AF37',
                  borderRadius: '8px'
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#D4AF37"
                fill="#D4AF37"
                fillOpacity={0.3}
                strokeWidth={2}
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>

      <p className="text-center text-noir-gold mt-4 font-bold">{metric}</p>
    </motion.div>
  )
}

export default function ResultsSection() {
  const results = [
    {
      title: 'キャストA様',
      beforeValue: '4,200人',
      afterValue: '7,800人',
      metric: '+85% (30日間)',
      chartType: 'area' as const,
    },
    {
      title: 'キャストB様',
      beforeValue: '8本',
      afterValue: '15本',
      metric: '月間指名本数 +7本',
      chartType: 'line' as const,
    },
    {
      title: 'キャストC様',
      beforeValue: '1.5%',
      afterValue: '4.5%',
      metric: 'エンゲージメント率 +300%',
      chartType: 'area' as const,
    },
  ]

  return (
    <section id="results" className="py-20 px-4 bg-gradient-to-b from-noir-dark to-noir-primary">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center mb-16"
        >
          結果が、<span className="text-gradient">我々の全て</span>だ。
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <ResultCard
              key={index}
              {...result}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}