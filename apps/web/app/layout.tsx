import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Llama Inc. — AI Travel Planning',
  description: 'Your AI-powered travel planning assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
