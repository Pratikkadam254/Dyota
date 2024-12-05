"use client";

import { FC } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from 'lucide-react';

// Define project type for better type safety
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Smart Document Reader',
    description: 'Turn paper business cards into digital contacts in seconds. Save hours of manual data entry.',
    image: '/business-card-reader.png',
    tags: ['Document AI', 'Business Tool', 'Time-Saver']
  },
  {
    title: 'Visual Quality Check',
    description: "Know your product's quality instantly. Perfect for retail and inventory management.",
    image: '/smart-vision.png',
    tags: ['Quality Control', 'Retail', 'Automation']
  },
  {
    title: 'Smart Chat Assistant',
    description: 'A chat assistant that truly understands your business. Available 24/7, in multiple languages.',
    image: '/ai-chat.png',
    tags: ['Customer Service', 'Support', 'Communication']
  }
];

export const WorkSection: FC = () => {
  return (
    <section id="work" className="relative overflow-hidden">
      <div className="h-full w-full bg-white relative">
        <div className="absolute inset-0 bg-grid-black/[0.1] pointer-events-none"></div>
        
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight drop-shadow-sm">
              Our Work
            </h2>
            <p className="text-xl text-zinc-400 font-medium max-w-2xl mx-auto">
              Real solutions. Real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            {projects.map((project) => (
              <div 
                key={project.title} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f2126] via-[#1f2126]/80 to-transparent" />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-[#0066FF] text-white rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">
                    {project.description}
                  </p>

                  {(project.demoUrl || project.githubUrl) && (
                    <div className="flex gap-4 mt-4">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white hover:text-[#0066FF] transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white hover:text-[#0066FF] transition-colors"
                        >
                          <Github size={16} />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 