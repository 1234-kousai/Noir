'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, FileText } from 'lucide-react'

export default function SolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const steps = [
    {
      step: 'STEP 1',
      title: 'No.1キャスト診断 ＆ 戦略ロードマップ',
      subtitle: '3ヶ月で指名+30%を目指す、最初の"設計図"',
      description: 'まずは、あなたの現状とポテンシャルを、AIとプロの目で徹底的に分析・診断。トップへ駆け上がるための、具体的な戦略とコンテンツプランを提示します。',
      cta: '→ まずは"診断"から始める',
      ctaType: 'primary',
    },
    {
      step: 'STEP 2',
      title: '月額グロース・パートナーシップ',
      subtitle: '"実行"の全てを、我々が引き受ける',
      description: '診断で描いた戦略を、我々があなたに代わって実行します。日々の投稿コンテンツの企画・制作から、ファンとのコミュニケーション、データ分析と改善まで。あなたは、ただ増えていく指名と売上を待つだけです。',
      cta: '→ サービス資料（PDF）をダウンロード',
      ctaType: 'secondary',
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
            その悩み、我々が
            <br />
            <span className="text-gradient">「稼ぐ資産」</span>へと変える。
          </h2>
          <p className="text-lg md:text-xl text-noir-light/80 max-w-3xl mx-auto">
            我々は、あなたのSNSアカウントを「稼げる戦略的資産」へと変貌させる、
            <br />
            2段階のコアソリューションを提供します。
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative"
            >
              <div className="flex items-start gap-8">
                <div className="hidden md:block">
                  <div className="w-20 h-20 rounded-full bg-noir-gold/20 flex items-center justify-center">
                    <span className="text-noir-gold font-bold text-xl">{index + 1}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-32 bg-noir-gold/20 mx-auto mt-4" />
                  )}
                </div>

                <div className="flex-1 bg-gradient-to-r from-noir-dark to-transparent p-8 rounded-2xl border-l-4 border-noir-gold">
                  <div className="mb-2 text-noir-gold font-display font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-noir-gold/80 mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-noir-light/80 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                      step.ctaType === 'primary'
                        ? 'bg-noir-gold text-noir-primary hover:shadow-lg hover:shadow-noir-gold/50'
                        : 'border-2 border-noir-gold text-noir-gold hover:bg-noir-gold hover:text-noir-primary'
                    }`}
                  >
                    {step.ctaType === 'secondary' && <FileText className="w-5 h-5" />}
                    {step.cta}
                    {step.ctaType === 'primary' && <ArrowRight className="w-5 h-5" />}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 text-sm text-noir-light/60"
        >
          ※平均実績値（30日・8名）
        </motion.p>
      </div>
    </section>
  )
}