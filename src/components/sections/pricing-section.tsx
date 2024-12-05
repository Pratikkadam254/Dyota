'use client'
import React, { FC } from 'react'
import { Check } from 'lucide-react'
import { DotPattern } from '../ui/dot-pattern'
import { CalButton } from '../ui/cal-button'

interface PricingPlan {
  badge?: string[];
  name: string;
  priceRange: string;
  timeline: string;
  description: string;
  features: {
    title: string;
    items: string[];
  }[];
  buttonText: string;
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    badge: ['Most Popular', 'One time'],
    name: 'AI MVP Development Package',
    priceRange: 'Starting at $2997',
    timeline: '1 Spots left for December.',
    description: "What's Included:",
    features: [
      {
        title: '',
        items: [
          'Complete AI MVP development in 2-3 weeks',
          'Web application',
          'Modern, scalable tech stack',
          'Seamless integrations (payments, auth, etc.)',
          '30 days of Growth Retainer included',
          'Personalized, founder-led development',
          'Regular updates and transparent process'
        ]
      }
    ],
    buttonText: 'Get Started Now ',
    isPopular: true
  },
  {
    badge: ['Ongoing Support', 'Monthly Retainer'],
    name: 'Growth Retainer',
    priceRange: '$3,997/month',
    timeline: '60 hours monthly',
    description: 'Flexible development hours with priority support and continuous optimization',
    features: [
      {
        title: 'Development Benefits',
        items: [
          'Flexible hours allocation',
          'Priority feature development',
          'Weekly strategy calls',
          'Same-day emergency support'
        ]
      },
      {
        title: 'Maintenance & Support',
        items: [
          'Continuous optimization',
          'Performance monitoring',
          'Security updates',
          'Technical consultation'
        ]
      }
    ],
    buttonText: 'Choose Growth Plan',
    isPopular: false
  }
];

export const PricingSection: FC = () => {
  return (
    <section id="pricing" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <DotPattern className="opacity-100" />
      </div>
      
      <div className="relative pt-12 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#18191F]">
              AI Development Plans
            </h2>
            <p className="text-[#18191F]/70 max-w-2xl mx-auto">
              Pick a plan that works for you, and let's build something great together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 relative shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                  !plan.isPopular 
                    ? 'bg-[#18191F] text-white border border-white/10' 
                    : 'bg-white border border-gray-200/20'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center gap-2">
                    {Array.isArray(plan.badge) ? (
                      plan.badge.map((badgeText) => (
                        <span 
                          key={badgeText}
                          className={`px-4 py-1 rounded-full text-sm font-medium ${
                            badgeText === 'Most Popular' 
                              ? 'bg-[#0066FF] text-white'
                              : badgeText === 'Ongoing Support'
                              ? 'bg-[#2563EB] text-white'
                              : badgeText === 'Monthly Retainer'
                              ? 'bg-white text-[#18191F]'
                              : 'bg-[#18191F] text-white'
                          } shadow-lg`}
                        >
                          {badgeText}
                        </span>
                      ))
                    ) : (
                      <span 
                        className={`px-4 py-1 rounded-full text-sm font-medium ${
                          plan.badge === 'Most Popular'
                            ? 'bg-[#0066FF] text-white'
                            : 'bg-[#18191F] text-white'
                        }`}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>
                )}
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold">{plan.priceRange}</span>
                  </div>
                  <p className="text-sm opacity-80 mb-2">
                    {plan.name === 'AI MVP Development Package' ? (
                      <span className="text-red-500">{plan.timeline}</span>
                    ) : (
                      plan.timeline
                    )}
                  </p>
                  <p className={`text-sm mb-8 ${!plan.isPopular ? 'text-white' : 'text-[#18191F]'}`}>
                    {plan.description}
                  </p>
                  
                  {plan.features.map((group) => (
                    <div key={group.title} className="mb-6">
                      <h4 className="text-sm font-medium mb-3 opacity-80">{group.title}</h4>
                      <ul className="space-y-3">
                        {group.items.map((feature) => (
                          <li 
                            key={feature} 
                            className={`flex items-center gap-3 text-sm ${
                              feature.includes('Growth Retainer') 
                                ? 'bg-gradient-to-r from-[#0066FF]/10 to-transparent p-1.5 rounded-md' 
                                : ''
                            }`}
                          >
                            <Check className={`w-5 h-5 ${plan.isPopular ? 'text-[#0066FF]' : 'text-[#0066FF]'}`} />
                            <span>
                              {feature}
                              {feature.includes('Growth Retainer') && (
                                <span className="ml-2 inline-flex items-center bg-[#0066FF] text-white text-xs px-3 py-0.5 rounded-full">
                                  worth $3,997
                                </span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <CalButton 
                    className={`w-full text-center py-3 px-6 rounded-lg transition-all ${
                      plan.isPopular
                        ? 'bg-[#0066FF] text-white hover:bg-[#0066FF]/90'
                        : 'bg-white text-[#18191F] hover:bg-white/90 border border-white/20'
                    }`}
                  >
                    {plan.buttonText}
                  </CalButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 