import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

export const runtime = 'nodejs'

export const metadata: Metadata = {
  title: 'Passwordy',
  description: 'Making passwords easy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children} <footer/> <Footer/></body>
    </html>
  )
}
