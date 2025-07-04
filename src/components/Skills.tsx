import { useEffect, useRef } from 'react';
import { Code2, Palette, Globe } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-on-scroll, .scale-in-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming & Development',
      description: 'Full-stack web development with modern frameworks and technologies.',
      skills: [
        'React.js - Advanced component architecture and state management',
        'Next.js - Server-side rendering and static site generation',
        'TypeScript - Type-safe development and enhanced code quality',
        'JavaScript ES6+ - Modern JavaScript features and best practices',
        'TailwindCSS - Utility-first CSS framework for rapid UI development',
        'Node.js - Backend development and API creation',
        'Git & GitHub - Version control and collaborative development',
        'Responsive Design - Mobile-first approach and cross-browser compatibility'
      ]
    },
    {
      icon: Palette,
      title: 'Video Editing & Design',
      description: 'Professional video editing and visual design with industry-standard tools.',
      skills: [
        'Adobe Premiere Pro - Professional video editing and post-production',
        'Adobe After Effects - Motion graphics and visual effects',
        'Color Grading - Professional color correction and enhancement',
        'Audio Editing - Sound design and audio synchronization',
        'Figma - UI/UX design and prototyping',
        'Adobe Photoshop - Image editing and graphic design',
        'Storytelling - Visual narrative and creative direction',
        'Project Management - Timeline management and client coordination'
      ]
    },
    {
      icon: Globe,
      title: 'Languages & Communication',
      description: 'Multilingual communication skills for global collaboration.',
      skills: [
        'Indonesian - Native speaker with excellent written and verbal skills',
        'English - Fluent in technical and business communication',
        'Javanese - Cultural language proficiency',
        'Technical Writing - Documentation and project specifications',
        'Client Communication - Professional correspondence and presentations',
        'Cross-cultural Communication - Working with international teams'
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-black relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Skills & Expertise
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-900 border border-gray-800 rounded-lg p-8 card-hover scale-in-on-scroll"
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                <div className="text-center mb-8">
                  <div className="p-4 bg-gray-800 rounded-lg w-fit mx-auto mb-4">
                    <category.icon className="text-gray-400" size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-white">
                    Core Competencies:
                  </h4>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-400 leading-relaxed text-sm">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;