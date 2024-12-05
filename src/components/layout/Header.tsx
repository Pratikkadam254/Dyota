'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { DotPattern } from '../ui/dot-pattern'

const Header: FC = () => {
  return (
    <header className="relative w-full py-6 px-4 md:px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <DotPattern className="opacity-50" />
      </div>

      {/* Radial Gradient for better blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto flex justify-center items-center relative">
        <Link href="/" className="relative w-48 h-16 transition-transform hover:scale-105">
          <Image
            src="/Dyota logo transperent bg.png"
            alt="DYOTA"
            fill
            className="object-contain mix-blend-multiply"
            priority
          />
        </Link>
      </div>
    </header>
  )
}

export default Header 