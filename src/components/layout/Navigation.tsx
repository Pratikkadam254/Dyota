'use client'

import { FC, useEffect, useState } from 'react'
import { 
  LayoutTemplate, 
  Briefcase, 
  Tag, 
  Phone, 
  Calendar 
} from 'lucide-react'
import { CalButton } from '../ui/cal-button'

const navItems = [
  { name: 'Process', href: '#process', icon: LayoutTemplate },
  { name: 'Work', href: '#work', icon: Briefcase },
  { name: 'Pricing', href: '#pricing', icon: Tag },
  { name: 'Connect', href: '#connect', icon: Phone },
  { name: 'Book a Call', href: '#book-a-call', icon: Calendar, primary: true, isCalButton: true },
]

const Navigation: FC = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], div[id]')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section) => {
        const element = section as HTMLElement
        const top = element.offsetTop
        const height = element.offsetHeight
        const id = element.getAttribute('id')

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(`#${id}`)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href) as HTMLElement
      if (element) {
        const offset = 80 // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="bg-white/90 backdrop-blur-md rounded-full border border-gray-200/50 shadow-lg shadow-gray-200/20">
        <div className="flex items-center gap-2 px-4 py-3">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.href
            const isLast = index === navItems.length - 1
            
            return (
              <div key={item.href} className="flex items-center">
                {item.isCalButton ? (
                  <CalButton
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                      item.primary 
                        ? 'bg-primary-blue text-white hover:bg-blue-700' 
                        : isActive 
                          ? 'bg-gray-100 text-gray-900' 
                          : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                  </CalButton>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                      item.primary 
                        ? 'bg-primary-blue text-white hover:bg-blue-700' 
                        : isActive 
                          ? 'bg-gray-100 text-gray-900' 
                          : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                  </button>
                )}
                {!isLast && <div className="w-px h-4 bg-gray-200" />}
              </div>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default Navigation 