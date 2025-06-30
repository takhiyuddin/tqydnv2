import { useEffect, useRef, useState } from 'react';
import { Play, Eye, X, ExternalLink, Calendar, User, Tag, Globe } from 'lucide-react';

import ImgTaqiyuddin from '../assets/taqiyuddin.png';
import ImgHealthy from '../assets/healthy.png';
import ImgIris from '../assets/iris.png';
import ImgAwal from '../assets/awal.png';
import ImgAfiftaqiya from '../assets/afiftaqiya.com.png';
import ImgP5 from '../assets/p5.jpg';

interface Project {
  type: 'video' | 'web';
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  role: string;
  url?: string;
  youtubeId?: string;
  blogContent: {
    overview: string;
    challenge: string;
    solution: string;
    features: string[];
    technologies: string[];
    outcome: string;
    lessons: string[];
  };
}

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-on-scroll, .scale-in-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
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

  const handleOpenBlog = (project: Project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseBlog = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const projects: Project[] = [
    {
      type: 'web',
      title: 'Taqiyuddin Afif Portfolio v2.1',
      description: 'Developed from scratch using React, styled with Lucide icons, and powered by Vite for a fast, modular workflow.',
      image: ImgTaqiyuddin,
      tags: ['React', 'Lucide', 'Vite'],
      date: 'December 2024',
      role: 'Full-Stack Developer',
      url: '#',
      blogContent: {
        overview: 'This portfolio represents the culmination of my journey as a web developer, showcasing not just my projects but also my growth in modern web development technologies. Built entirely from scratch using React and powered by Vite, this portfolio demonstrates my commitment to creating fast, responsive, and visually appealing web experiences.',
        challenge: 'The main challenge was creating a portfolio that would stand out in a crowded digital landscape while maintaining excellent performance and user experience. I needed to balance visual appeal with functionality, ensuring the site loads quickly and works seamlessly across all devices.',
        solution: 'I chose React for its component-based architecture, allowing for modular and maintainable code. Vite was selected as the build tool for its lightning-fast development experience and optimized production builds. Lucide icons provided a consistent and professional icon system throughout the site.',
        features: [
          'Responsive design that works perfectly on all devices',
          'Smooth scroll animations and micro-interactions',
          'Optimized performance with lazy loading and code splitting',
          'SEO-friendly structure with proper meta tags',
          'Interactive portfolio showcase with modal previews',
          'Contact form with validation and user feedback',
          'Professional typography and color scheme',
          'Accessibility features for inclusive user experience'
        ],
        technologies: [
          'React 18 - Latest version with concurrent features',
          'TypeScript - Type-safe development',
          'Vite - Fast build tool and development server',
          'Tailwind CSS - Utility-first CSS framework',
          'Lucide React - Beautiful icon library',
          'Framer Motion - Smooth animations',
          'ESLint & Prettier - Code quality and formatting'
        ],
        outcome: 'The portfolio successfully showcases my skills and projects in a professional manner. It has received positive feedback for its clean design, smooth performance, and comprehensive project documentation. The site loads in under 2 seconds and maintains a 95+ Lighthouse score.',
        lessons: [
          'Importance of performance optimization in modern web development',
          'Value of component-based architecture for maintainable code',
          'Significance of responsive design in today\'s multi-device world',
          'Benefits of using TypeScript for larger projects',
          'Impact of good UX design on user engagement'
        ]
      }
    },
    {
      type: 'video',
      title: 'Healthy School Project',
      description: 'Edited a school awareness video focusing on smoking prevention, personal health, and environmental consciousness.',
      image: ImgHealthy,
      tags: ['Premiere Pro', 'After Effects', 'Canva'],
      date: 'October 2024',
      role: 'Video Editor & Motion Graphics Designer',
      youtubeId: '8KLeB_ZF3eA',
      blogContent: {
        overview: 'The Healthy School Project was an educational initiative aimed at raising awareness about health issues among students. This video project focused on three critical areas: smoking prevention, personal health maintenance, and environmental consciousness. The goal was to create an engaging and informative video that would resonate with young audiences.',
        challenge: 'Creating educational content that would capture and maintain the attention of students while delivering important health messages. The challenge was to make serious topics engaging without losing the educational value, and to present complex health information in an easily digestible format.',
        solution: 'I developed a comprehensive video editing approach that combined dynamic visuals, engaging animations, and clear messaging. Using Adobe Premiere Pro for the main editing, After Effects for motion graphics, and Canva for additional graphic elements, I created a cohesive and visually appealing educational video.',
        features: [
          'Engaging opening sequence to capture attention',
          'Clear and concise messaging about health topics',
          'Dynamic transitions between different segments',
          'Animated infographics to explain complex concepts',
          'Background music that enhances without distracting',
          'Call-to-action segments encouraging healthy behaviors',
          'Professional color grading for visual consistency',
          'Subtitles for accessibility and better comprehension'
        ],
        technologies: [
          'Adobe Premiere Pro - Primary video editing platform',
          'Adobe After Effects - Motion graphics and animations',
          'Canva - Graphic design and visual elements',
          'Adobe Audition - Audio editing and enhancement',
          'Color grading tools for visual consistency',
          'Typography and text animation techniques'
        ],
        outcome: 'The video was successfully implemented in the school\'s health education program and received positive feedback from both educators and students. It effectively communicated important health messages while maintaining student engagement throughout the presentation.',
        lessons: [
          'Importance of understanding your target audience when creating educational content',
          'Value of combining multiple software tools for comprehensive video production',
          'Significance of visual storytelling in educational materials',
          'Benefits of iterative feedback during the creative process',
          'Impact of professional presentation on message effectiveness'
        ]
      }
    },
    {
      type: 'video',
      title: 'Short Film "Iris"',
      description: 'A short film edited entirely using Adobe Premiere Pro, with soft color tones and cinematic transitions.',
      image: ImgIris,
      tags: ['After Effects', 'Premiere Pro'],
      date: 'September 2024',
      role: 'Video Editor & Colorist',
      youtubeId: 'eubpKqmfmII',
      blogContent: {
        overview: '"Iris" is a cinematic short film that explores themes of perception, identity, and human connection. This project challenged me to create a visually compelling narrative through careful editing, color grading, and post-production techniques. The film showcases my ability to work with cinematic footage and create professional-quality content.',
        challenge: 'The main challenge was creating a cohesive visual narrative that would engage viewers emotionally while maintaining cinematic quality. I needed to balance artistic vision with technical execution, ensuring that every cut, transition, and color choice served the story.',
        solution: 'I employed advanced editing techniques in Adobe Premiere Pro, focusing on creating smooth, cinematic transitions and maintaining visual continuity. The color grading process was crucial, using soft, warm tones to create an intimate atmosphere that supports the film\'s emotional core.',
        features: [
          'Cinematic color grading with warm, soft tones',
          'Smooth transitions that enhance narrative flow',
          'Professional audio mixing and sound design',
          'Careful pacing to build emotional engagement',
          'Visual effects that support rather than distract from the story',
          'Consistent visual language throughout the film',
          'Professional title sequences and credits',
          'Optimized export settings for various platforms'
        ],
        technologies: [
          'Adobe Premiere Pro - Primary editing platform',
          'Adobe After Effects - Visual effects and motion graphics',
          'Color grading tools and techniques',
          'Audio editing and mixing software',
          'Professional export codecs and settings',
          'Cinematic editing principles and techniques'
        ],
        outcome: 'The short film was well-received for its professional quality and emotional impact. It demonstrated my ability to work with cinematic content and create compelling visual narratives. The film has been used as a portfolio piece to showcase advanced video editing capabilities.',
        lessons: [
          'Importance of color grading in establishing mood and atmosphere',
          'Value of careful pacing in narrative filmmaking',
          'Significance of audio design in creating immersive experiences',
          'Benefits of planning post-production workflow in advance',
          'Impact of consistent visual language on storytelling effectiveness'
        ]
      }
    },
    {
      type: 'video',
      title: 'Short Film "Awal"',
      description: 'A socially driven short film with cinematic editing and a message of racial equality.',
      image: ImgAwal,
      tags: ['Premiere Pro', 'After Effects', 'Photoshop'],
      date: 'August 2024',
      role: 'Video Editor & Visual Effects Artist',
      youtubeId: 'wHCb_g6XZis',
      blogContent: {
        overview: '"Awal" is a powerful short film that addresses important social issues, particularly focusing on racial equality and social justice. This project required sensitive handling of serious subject matter while maintaining high production values. The film demonstrates my ability to work on socially conscious content and create meaningful visual narratives.',
        challenge: 'Creating a film that addresses sensitive social issues required careful consideration of messaging, visual representation, and cultural sensitivity. The challenge was to create content that would provoke thought and discussion while remaining respectful and impactful.',
        solution: 'I developed a comprehensive post-production approach that combined powerful visual storytelling with subtle yet effective editing techniques. Using Premiere Pro for editing, After Effects for visual enhancements, and Photoshop for graphic elements, I created a cohesive and impactful final product.',
        features: [
          'Thoughtful editing that supports the social message',
          'Professional color grading to enhance emotional impact',
          'Carefully selected music and sound design',
          'Visual effects that reinforce the narrative themes',
          'Graphic elements created in Photoshop for additional context',
          'Smooth transitions that maintain viewer engagement',
          'Professional title treatment and credits',
          'Optimized delivery for multiple platforms'
        ],
        technologies: [
          'Adobe Premiere Pro - Primary editing and assembly',
          'Adobe After Effects - Visual effects and motion graphics',
          'Adobe Photoshop - Graphic design and image manipulation',
          'Professional color grading workflows',
          'Audio editing and mixing techniques',
          'Social media optimization and delivery formats'
        ],
        outcome: 'The film successfully conveyed its important social message while maintaining professional production quality. It sparked meaningful discussions about racial equality and demonstrated the power of visual media in addressing social issues.',
        lessons: [
          'Responsibility of content creators in addressing social issues',
          'Importance of cultural sensitivity in visual storytelling',
          'Value of collaboration in creating meaningful content',
          'Significance of proper research when dealing with serious topics',
          'Impact of visual media on social consciousness and change'
        ]
      }
    },
    {
      type: 'web',
      title: 'afiftaqiya.com',
      description: 'A Blogger-powered blog enhanced with Analytics, AdSense, and SEO tools.',
      image: ImgAfiftaqiya,
      tags: ['Blogger', 'Python', 'Java'],
      date: 'July 2024',
      role: 'Web Developer & Content Creator',
      url: 'https://afiftaqiya.blogspot.com',
      blogContent: {
        overview: 'afiftaqiya.com is a comprehensive blog platform built on Google Blogger, enhanced with custom features and optimizations. This project demonstrates my ability to work with existing platforms while adding custom functionality and optimizations for better performance and user experience.',
        challenge: 'Working within the constraints of the Blogger platform while adding advanced features like analytics integration, SEO optimization, and monetization through AdSense. The challenge was to create a professional blog that could compete with custom-built solutions.',
        solution: 'I leveraged Blogger\'s flexibility while adding custom code enhancements using Python for backend processes and Java for additional functionality. The blog was optimized for search engines and integrated with various analytics and monetization tools.',
        features: [
          'Custom theme design optimized for readability',
          'Google Analytics integration for detailed visitor insights',
          'AdSense integration for monetization',
          'SEO optimization with proper meta tags and structure',
          'Responsive design that works on all devices',
          'Fast loading times through optimization techniques',
          'Social media integration for content sharing',
          'Comment system with spam protection',
          'Search functionality for easy content discovery',
          'Category and tag organization for better navigation'
        ],
        technologies: [
          'Google Blogger - Primary blogging platform',
          'HTML/CSS/JavaScript - Custom theme development',
          'Python - Backend automation and data processing',
          'Java - Additional functionality and integrations',
          'Google Analytics - Visitor tracking and insights',
          'Google AdSense - Monetization platform',
          'SEO tools and techniques for better visibility'
        ],
        outcome: 'The blog successfully established an online presence with steady traffic growth and effective monetization. It demonstrates the ability to work with existing platforms while adding significant value through custom enhancements and optimizations.',
        lessons: [
          'Value of working within platform constraints while adding custom features',
          'Importance of SEO optimization for organic traffic growth',
          'Benefits of analytics integration for understanding audience behavior',
          'Significance of responsive design in today\'s mobile-first world',
          'Impact of content quality on long-term success'
        ]
      }
    },
    {
      type: 'video',
      title: 'P5 "Bangunlah Jiwa dan Raganya"',
      description: 'Video of P5 interfaith and health activities edited with Adobe Premiere Pro.',
      image: ImgP5,
      tags: ['Premiere Pro', 'After Effects'],
      date: 'June 2024',
      role: 'Video Editor & Documentary Filmmaker',
      youtubeId: 'wjZQ-SafEwo',
      blogContent: {
        overview: 'This documentary-style video captures the essence of P5 (Projek Penguatan Profil Pelajar Pancasila) activities focusing on interfaith dialogue and health awareness. The project required documenting real events while creating an engaging narrative that would inspire and educate viewers about the importance of unity and health consciousness.',
        challenge: 'Creating a cohesive narrative from documentary footage while maintaining authenticity and educational value. The challenge was to balance entertainment with education, ensuring the video would engage viewers while delivering important messages about interfaith harmony and health awareness.',
        solution: 'I employed documentary editing techniques combined with educational video principles. Using Premiere Pro for the main edit and After Effects for enhanced graphics and transitions, I created a compelling narrative that showcases the activities while highlighting their significance.',
        features: [
          'Documentary-style editing that maintains authenticity',
          'Educational graphics and text overlays for context',
          'Smooth transitions between different activity segments',
          'Professional audio mixing for clear narration',
          'Color correction to ensure visual consistency',
          'Engaging opening and closing sequences',
          'Subtitles for accessibility and comprehension',
          'Optimized pacing for educational content'
        ],
        technologies: [
          'Adobe Premiere Pro - Primary editing platform',
          'Adobe After Effects - Motion graphics and visual enhancements',
          'Audio editing tools for clear sound quality',
          'Color correction and grading techniques',
          'Text animation and graphic design elements',
          'Export optimization for educational distribution'
        ],
        outcome: 'The video successfully documented the P5 activities and was used for educational purposes within the school system. It effectively communicated the importance of interfaith dialogue and health awareness while showcasing student participation and engagement.',
        lessons: [
          'Importance of storytelling in documentary-style content',
          'Value of maintaining authenticity while enhancing production quality',
          'Significance of clear audio in educational videos',
          'Benefits of proper planning in documentary editing',
          'Impact of visual consistency on professional presentation'
        ]
      }
    }
  ];

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Portfolio Showcase
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden card-hover scale-in-on-scroll group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.type === 'video' ? (
                      <button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200"
                        onClick={() => handleOpenBlog(project)}
                      >
                        <Play size={20} />
                      </button>
                    ) : (
                      <button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200"
                        onClick={() => handleOpenBlog(project)}
                      >
                        <Eye size={20} />
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <button
                    onClick={() => handleOpenBlog(project)}
                    className="text-lg font-medium text-slate-900 mb-3 hover:text-slate-600 transition-colors duration-200 text-left w-full"
                  >
                    {project.title}
                  </button>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog-Style Pop-up */}
      {isPopupOpen && selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-slate-100 rounded-lg">
                  {selectedProject.type === 'video' ? <Play size={20} /> : <Globe size={20} />}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{selectedProject.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{selectedProject.role}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handleCloseBlog}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Featured Image/Video */}
              <div className="w-full">
                {selectedProject.type === 'video' && selectedProject.youtubeId ? (
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                      title={selectedProject.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Blog Content */}
              <article className="prose prose-slate max-w-none">
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Overview</h3>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.blogContent.overview}</p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">The Challenge</h3>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.blogContent.challenge}</p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">The Solution</h3>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.blogContent.solution}</p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.blogContent.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies Used</h3>
                  <ul className="space-y-2">
                    {selectedProject.blogContent.technologies.map((tech, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 leading-relaxed">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Outcome & Results</h3>
                  <p className="text-slate-600 leading-relaxed">{selectedProject.blogContent.outcome}</p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Learnings</h3>
                  <ul className="space-y-2">
                    {selectedProject.blogContent.lessons.map((lesson, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 leading-relaxed">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </article>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200">
                {selectedProject.type === 'video' && selectedProject.youtubeId && (
                  <a
                    href={`https://www.youtube.com/watch?v=${selectedProject.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                  >
                    <Play size={16} />
                    Watch on YouTube
                  </a>
                )}
                {selectedProject.type === 'web' && selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Visit Website
                  </a>
                )}
                <button
                  onClick={handleCloseBlog}
                  className="flex items-center justify-center gap-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;