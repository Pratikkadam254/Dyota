import { FC } from 'react'
import { HeroSection } from '@/components/sections/hero-section'
import { ProcessSection } from '@/components/sections/process-section'
import { WorkSection } from '@/components/sections/work-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { ConnectSection } from '@/components/sections/connect-section'

const Home: FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Process Section - Adjusted spacing */}
      <section id="process" className="pt-24">
        <ProcessSection />
      </section>
      
      {/* Work Section */}
      <section id="work" className="bg-gray-50">
        <WorkSection />
      </section>
      
      {/* Pricing Section */}
      <section id="pricing">
        <PricingSection />
      </section>

      {/* Connect Section */}
      <section id="connect">
        <ConnectSection />
      </section>
    </div>
  )
}

export default Home 