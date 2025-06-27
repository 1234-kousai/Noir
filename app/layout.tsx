import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Noir Producers - 夜職特化SNSプロデュース',
  description: 'AI × 夜職特化チームが、あなたを"稼げるNo.1"へプロデュース。量産キャストから抜け出し、指名と売上を増やす戦略的SNS運用を。',
  keywords: 'SNSプロデュース, 夜職, キャスト, ホスト, 指名増加, 売上向上, SNS運用',
  openGraph: {
    title: 'Noir Producers - 夜職特化SNSプロデュース',
    description: 'AI × 夜職特化チームが、あなたを"稼げるNo.1"へプロデュース',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noir Producers - 夜職特化SNSプロデュース',
    description: 'AI × 夜職特化チームが、あなたを"稼げるNo.1"へプロデュース',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}