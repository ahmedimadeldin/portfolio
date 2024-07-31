import { Inter, Ubuntu } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import TransitionProvider from './providers/transition-provider'

const ubunto = Ubuntu({ subsets: ["latin"],weight: ["700"] })

export const metadata = {
  title: 'Ahmed Almahady portfolio',
  description: 'Welcome to my digital portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubunto.className}>
        <TransitionProvider>
          {children}
          </TransitionProvider>
        </body>
    </html>
  )
}
