'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, FileText } from 'lucide-react'

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const plans = [
    {
      title: 'EXECUTIVE\nPRODUCE',
      subtitle: '(エグゼクティブ・プロデュース)',
      target: '多忙なトップ層向け。「丸投げ」で、あなたは結果だけを享受する。',
      description: '戦略設計からコンテンツ制作、投稿代行まで、SNSの全てをお引き受けします。',
      price: '月額 300,000円〜',
      cta: '→ 詳細を見る',
      ctaType: 'primary',
    },
    {
      title: 'GROWTH\nPARTNERSHIP',
      subtitle: '(グロース・パートナーシップ)',
      target: '伸び悩む努力家向け。プロの「軍師」と二人三脚で、確実な成長を。',
      description: 'あなたの日々の発信を、単なる「投稿」から「戦略的アクション」へと昇華させます。定例での戦略会議と日々の伴走支援で、あなたの成長を加速させます。',
      price: '月額 100,000円〜',
      cta: '→ 詳細を見る',
      ctaType: 'primary',
    },
    {
      title: 'STRATEGIC\nDIAGNOSIS',
      subtitle: '(ストラテジック・ダイアグノシス)',
      target: 'まず方向性を知りたい方向け。進むべき「地図」を、まずその手に。',
      description: '独自の分析メソッドであなたの現在地とポテンシャルを可視化。あなた専用のパーソナル・グロース戦略を策定し、具体的なアクションプランとして納品します。',
      price: '1回 80,000円',
      cta: '→ 詳細を見る',
      ctaType: 'primary',
    },
  ]

  return (
    <section id="solution" ref={ref} className="py-20 px-4 bg-noir-primary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="text-gradient">PRODUCE MENU</span>
          </h2>
          <p className="text-lg md:text-xl text-noir-light/80 max-w-3xl mx-auto">
            あなたの現在地と目指すゴールに合わせ、最適なプロデュースプランをご提案します。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative h-full"
            >
              <div className="h-full bg-gradient-to-br from-noir-dark to-black p-6 md:p-8 rounded-2xl border border-noir-gold/20 hover:border-noir-gold/50 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold mb-2 text-noir-gold whitespace-pre-line">
                    {plan.title}
                  </h3>
                  <p className="text-base sm:text-lg text-noir-light/80 mb-4">
                    {plan.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-noir-light/60 mb-4 italic leading-relaxed">
                    {plan.target}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-bold text-noir-light/90 mb-2">内容：</p>
                    <p className="text-sm sm:text-base text-noir-light/80 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm text-noir-light/60 mb-1">料金</p>
                    <p className="text-xl sm:text-2xl font-bold text-noir-gold">
                      {plan.price}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${
                      plan.ctaType === 'primary'
                        ? 'bg-noir-gold text-noir-primary hover:shadow-lg hover:shadow-noir-gold/50'
                        : 'border-2 border-noir-gold text-noir-gold hover:bg-noir-gold hover:text-noir-primary'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}