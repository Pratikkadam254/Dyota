'use client'
import { FC } from 'react';
import Link from 'next/link';
import { DotPattern } from '@/components/ui/dot-pattern';
import { CalButton } from '../ui/cal-button'

export const HeroSection: FC = () => {
  const scrollToProcess = () => {
    const processSection = document.getElementById('process');
    if (processSection) {
      processSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white">
        <DotPattern className="opacity-30" />
      </div>
      
      <div className="relative container mx-auto px-4 pt-16 pb-16">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-block mb-8">
            <div className="rounded-full border border-gray-200 px-5 py-1.5 text-[15px] bg-white/80 backdrop-blur-sm">
              <span className="text-[#18191F]">Limited Availability:</span>{' '}
              <span className="text-[#0066FF]">1 Spots Left for December</span>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-[52px] font-bold leading-[1.2] tracking-[-0.02em] text-[#18191F]">
              AI-Powered MVPs Delivered
            </h1>
            <h1 className="text-[56px] font-bold leading-[1.2] tracking-[-0.02em] text-[#18191F]">
              in <span className="text-[#0066FF]">Weeks</span>, Not Months
            </h1>
          </div>
          
          <p className="text-[18px] text-[#18191F]/70 mt-6 mb-8 max-w-[720px] mx-auto leading-relaxed">
            Transform your vision into a market-ready MVP. Get your product to market faster and smarter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
            <CalButton 
              className="px-8 py-2.5 bg-[#0066FF] text-white rounded-full text-base font-medium hover:bg-[#0066FF]/90 transition-colors"
            >
              Book a Strategy Call
            </CalButton>
            
            <button 
              onClick={scrollToProcess}
              className="px-8 py-2.5 bg-[#18191F] text-white rounded-full text-base font-medium hover:bg-[#18191F]/90 transition-colors"
            >
              See Our Process
            </button>
          </div>

          <p className="text-[14px] text-[#18191F]/60">
            Free consultation • <span className="text-red-500">No commitment, cancel anytime</span>
          </p>
        </div>
      </div>
    </div>
  );
}; 