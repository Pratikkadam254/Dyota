import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/layout/Navigation'
import Header from '@/components/layout/Header'
import { FC, ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DYOTA - Build Your MVP Fast & Stress-Free',
  description: 'Turn your ideas into reality with our fast, affordable, and stress-free MVP development service.',
}

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  )
}

export default RootLayout 