'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Brain, Users, Trophy } from 'lucide-react'

export default function StrengthsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const strengths = [
    {
      icon: Brain,
      title: 'AI × 圧倒的な「業界特化」',
      description: '我々はこの世界で勝つことだけを考え抜いています。一般的なマーケティング論では通用しない、この業界特有の「勝ちパターン」をAIで分析し、実行します。',
    },
    {
      icon: Users,
      title: 'チームが持つ「最前線」のリアル',
      description: '私たちのチームには、実際にこの世界の最前線（ホスト等）を経験し、現場のリアルな言語と痛みを理解するメンバーが在籍しています。',
    },
    {
      icon: Trophy,
      title: '歴戦の「プロデューサー」によるコンサルティング',
      description: 'チームには、数々のクリエイターをバズらせてきた実績（担当アカウント総フォロワー数50万人超）を持つプロデューサーが参画。彼の再現性のある成功ノウハウを、あなただけのために応用します。',
    },
  ]

  return (
    <section id="strengths" ref={ref} className="py-20 px-4 bg-noir-primary">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center mb-16"
        >
          なぜ、<span className="text-gradient">Noir Producers</span>だけが
          <br />
          勝たせるのか。
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="bg-gradient-to-br from-noir-dark to-black p-8 rounded-2xl border border-noir-gold/20 h-full transition-all duration-300 group-hover:border-noir-gold/50">
                  <div className="w-16 h-16 rounded-full bg-noir-gold/20 flex items-center justify-center mb-6 group-hover:bg-noir-gold/30 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-noir-gold" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-noir-gold">
                    {strength.title}
                  </h3>
                  
                  <p className="text-noir-light/80 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}