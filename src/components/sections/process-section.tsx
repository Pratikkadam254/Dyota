import { FC } from 'react';
import { Target, Brain, GitMerge, Rocket } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';

// Define the process step type
interface ProcessStep {
  number: string;
  title: string;
  icon: any; // Lucide icon component type
  description: string;
  keyPoints: string[];
}

export const ProcessSection: FC = () => {
  // Define the process steps with AI focus
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Plan',
      icon: Target,
      description: 'We start by understanding your vision and mapping out the perfect solution',
      keyPoints: [
        'Define your AI needs',
        'Plan the approach'
      ]
    },
    {
      number: '02',
      title: 'Create',
      icon: Brain,
      description: 'This is where your AI solution takes shape, piece by piece',
      keyPoints: [
        'Build the core AI',
        'Test and refine'
      ]
    },
    {
      number: '03',
      title: 'Integrate',
      icon: GitMerge,
      description: 'Everything comes together in a seamless experience',
      keyPoints: [
        'Connect all parts',
        'Ensure smooth flow',
        'Fine-tune details'
      ]
    },
    {
      number: '04',
      title: 'Launch',
      icon: Rocket,
      description: 'Your solution goes live, ready to make an impact',
      keyPoints: [
        'Final testing',
        'Go live',
        'Monitor success'
      ]
    }
  ];

  return (
    <section id="process" className="relative overflow-hidden py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <DotPattern />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#18191F] mb-4">
            How We Work
          </h2>
          <p className="text-[#18191F]/70 text-lg max-w-2xl mx-auto">
            Simple steps. Remarkable results.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 w-full h-0.5 bg-[#E5E7EB] hidden md:block" />

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.number}
                  className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#0066FF]/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#0066FF]" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#0066FF] text-white 
                                  flex items-center justify-center text-sm font-medium">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[#18191F] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#18191F]/70 mb-4 text-sm">
                    {step.description}
                  </p>

                  {/* Key Points */}
                  <ul className="space-y-2">
                    {step.keyPoints.map((point, i) => (
                      <li key={i} className="text-sm text-[#18191F]/70 flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mr-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};