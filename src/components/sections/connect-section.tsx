'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Twitter, Linkedin } from 'lucide-react'
import { CalButton } from '../ui/cal-button'
import { DotPattern } from '../ui/dot-pattern'

export const ConnectSection: FC = () => {
  return (
    <section id="connect" className="relative bg-white overflow-hidden">
      {/* Remove the dot pattern from connect section since it's already in pricing */}
      {/* <div className="absolute inset-0">
        <DotPattern className="opacity-100" />
      </div> */}

      <div className="container mx-auto px-6 md:px-10 max-w-6xl relative">
        {/* Adjust top spacing to create seamless blend */}
        <div className="flex flex-col md:flex-row items-center gap-12 pt-0 pb-20">
          {/* Profile Image - Left Side */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6">
            <div className="relative w-[300px] h-[300px] transition-transform duration-300 hover:scale-105">
              <Image
                src="/Founder.png"
                alt="Founder of Dyota Labs"
                fill
                className="object-cover rounded-full shadow-lg"
                priority
              />
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <Link 
                href="https://x.com/PratikKadam_" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Twitter"
                className="p-3 rounded-full bg-[#18191F] hover:opacity-80 transition-opacity duration-300"
              >
                <Twitter className="w-5 h-5 text-white" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/pratik-kadam-pk/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="p-3 rounded-full bg-[#0077B5] hover:opacity-80 transition-opacity duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#18191F]">
              Meet The Founder
            </h2>
            
            <p className="text-lg leading-relaxed text-[#18191F]/70 mb-6">
              I'm Pratik, a specialized AI developer and founder of Dyota. We're not trying to build everything for everyone – we exclusively build AI-powered products. This means you get a partner who truly understands your unique challenges and knows how to solve them.
            </p>

            <p className="text-lg leading-relaxed text-[#18191F]/70 mb-8">
            To ensure each project gets the attention it deserves, we only take on 1 clients per month.This allows us to:<br/>
            • Really understand your needs<br/>
            • Build exactly what you want<br/>
            • Deliver on time, every time<br/>
            • Provide personal support throughout
          </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto pb-20">
          <h2 className="text-4xl font-bold mb-6 text-[#18191F]">
            Don't Miss Your Chance
          </h2>
          
          <p className="text-lg leading-relaxed text-[#18191F]/70 mb-8">
            Only 1 spots for December! Book a strategy call or share your vision now, and I'll personally 
            get back to you within 24 hours. Let's turn your idea into reality before these limited slots are 
            gone.
          </p>

          <CalButton
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full 
                       bg-[#0066FF] text-white font-medium transition-all duration-300
                       hover:scale-105 active:scale-100 text-lg"
          >
            Book Your Spot Now
            <ArrowRight className="w-5 h-5" />
          </CalButton>
        </div>
      </div>
    </section>
  )
} 