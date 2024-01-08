import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from "../components/AuthProvider"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quizzer',
  description: 'Created by Anubhav',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthProvider>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
       </AuthProvider>
    </html>
  )
}
