import { useEffect, useRef, useState } from 'react';
import { Play, Eye, X, ExternalLink, Calendar, User, Tag, Globe, ArrowRight, Clock, Award } from 'lucide-react';

// Mock images - in real implementation, these would be your actual image imports
const mockImages = {
  taqiyuddin: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
  healthy: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
  iris: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
  awal: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop',
  afiftaqiya: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
  p5: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
};

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
  const [readingProgress, setReadingProgress] = useState(0);

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

  // Reading progress tracker
  useEffect(() => {
    if (!isPopupOpen) return;

    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollTop = target.scrollTop;
      const scrollHeight = target.scrollHeight - target.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    const modalContent = document.querySelector('.blog-modal-content');
    if (modalContent) {
      modalContent.addEventListener('scroll', handleScroll);
      return () => modalContent.removeEventListener('scroll', handleScroll);
    }
  }, [isPopupOpen]);

  const handleOpenBlog = (project: Project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
    setReadingProgress(0);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseBlog = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
    setReadingProgress(0);
    document.body.style.overflow = 'unset';
  };

  const projects: Project[] = [
    {
      type: 'web',
      title: 'Taqiyuddin Afif Portfolio v2.1',
      description: 'Developed from scratch using React, styled with Lucide icons, and powered by Vite for a fast, modular workflow.',
      image: mockImages.taqiyuddin,
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
      image: mockImages.healthy,
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
      image: mockImages.iris,
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
                className="portfolio-card bg-white border border-slate-200 rounded-lg overflow-hidden scale-in-on-scroll group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <button
                        className="portfolio-action-btn p-4 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg"
                        onClick={() => handleOpenBlog(project)}
                      >
                        {project.type === 'video' ? <Play size={24} /> : <Eye size={24} />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
                      project.type === 'video' 
                        ? 'bg-red-500/80 text-white' 
                        : 'bg-blue-500/80 text-white'
                    }`}>
                      {project.type === 'video' ? 'Video' : 'Web'}
                    </span>
                  </div>
                </div>

                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 group-hover:w-full transition-all duration-500"></div>
                  
                  <button
                    onClick={() => handleOpenBlog(project)}
                    className="portfolio-title text-lg font-medium text-slate-900 mb-3 hover:text-slate-600 transition-all duration-300 text-left w-full group-hover:transform group-hover:-translate-y-1"
                  >
                    {project.title}
                  </button>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed transform group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 transform group-hover:-translate-y-1 transition-transform duration-300 delay-100">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="portfolio-tag px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium hover:bg-slate-200 hover:scale-105 transition-all duration-200"
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {project.role.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ultra Responsive Modal - Adaptif ke Semua Device */}
      {isPopupOpen && selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center animate-fade-in">
          {/* Container yang responsif - menyesuaikan device */}
          <div className="relative w-full h-full max-w-none max-h-none 
                         xs:w-[95%] xs:h-[95%] xs:max-w-md xs:max-h-[90vh] xs:rounded-lg
                         sm:w-[90%] sm:h-[90%] sm:max-w-2xl sm:max-h-[85vh] sm:rounded-xl
                         md:w-[85%] md:h-[85%] md:max-w-4xl md:max-h-[80vh] md:rounded-2xl
                         lg:w-[80%] lg:h-[80%] lg:max-w-5xl lg:max-h-[75vh]
                         xl:w-[75%] xl:h-[75%] xl:max-w-6xl xl:max-h-[70vh]
                         bg-white shadow-2xl animate-scale-in transform overflow-hidden">
            
            {/* Reading Progress Bar */}
            <div className="absolute top-0 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out z-10"
                 style={{ width: `${readingProgress}%` }}></div>
            
            {/* Header yang Sticky */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-10
                           p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6">
              <div className="flex items-start justify-between gap-2 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="relative flex-shrink-0">
                      <div className="p-1.5 sm:p-2 md:p-3 bg-gradient-to-br from-slate-100 to-slate-200 rounded-md sm:rounded-lg shadow-sm">
                        {selectedProject.type === 'video' ? 
                          <Play size={16} className="sm:w-5 sm:h-5 text-slate-700" /> : 
                          <Globe size={16} className="sm:w-5 sm:h-5 text-slate-700" />
                        }
                      </div>
                      <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900 mb-1 leading-tight line-clamp-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-3 text-xs sm:text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={10} className="sm:w-3 sm:h-3" />
                          <span className="text-xs sm:text-sm">{selectedProject.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={10} className="sm:w-3 sm:h-3" />
                          <span className="text-xs sm:text-sm hidden xs:inline">{selectedProject.role}</span>
                          <span className="text-xs sm:text-sm xs:hidden">{selectedProject.role.split(' ')[0]}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={10} className="sm:w-3 sm:h-3" />
                          <span className="text-xs sm:text-sm">5 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCloseBlog}
                  className="flex-shrink-0 p-1.5 sm:p-2 md:p-3 hover:bg-slate-100 rounded-md sm:rounded-lg transition-all duration-200 hover:rotate-90 transform group"
                >
                  <X size={16} className="sm:w-5 sm:h-5 group-hover:text-red-500 transition-colors" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="blog-modal-content overflow-y-auto h-full pb-20 sm:pb-24">
              <div className="p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8">
                {/* Hero Section */}
                <div className="animate-scale-in-delayed">
                  {selectedProject.type === 'video' && selectedProject.youtubeId ? (
                    <div className="relative aspect-video w-full rounded-md sm:rounded-lg md:rounded-xl overflow-hidden shadow-md sm:shadow-lg md:shadow-2xl">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                        title={selectedProject.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-32 xs:h-40 sm:h-48 md:h-64 lg:h-80 object-cover rounded-md sm:rounded-lg md:rounded-xl shadow-md sm:shadow-lg md:shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-md sm:rounded-lg md:rounded-xl"></div>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3 animate-fade-in-delayed">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-xs sm:text-sm font-medium hover:from-slate-200 hover:to-slate-300 transition-all duration-300 cursor-default shadow-sm"
                    >
                      <Tag size={10} className="sm:w-3 sm:h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Blog Content */}
                <article className="prose prose-slate max-w-none">
                  {[
                    { 
                      title: 'Project Overview', 
                      content: selectedProject.blogContent.overview,
                      icon: <Globe size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />,
                      gradient: 'from-blue-500 to-cyan-500'
                    },
                    { 
                      title: 'The Challenge', 
                      content: selectedProject.blogContent.challenge,
                      icon: <Award size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />,
                      gradient: 'from-orange-500 to-red-500'
                    },
                    { 
                      title: 'The Solution', 
                      content: selectedProject.blogContent.solution,
                      icon: <ArrowRight size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />,
                      gradient: 'from-green-500 to-emerald-500'
                    }
                  ].map((section, index) => (
                    <section key={index} className="mb-4 sm:mb-6 md:mb-8">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className={`p-1.5 sm:p-2 md:p-3 bg-gradient-to-r ${section.gradient} rounded-md sm:rounded-lg text-white shadow-md sm:shadow-lg`}>
                          {section.icon}
                        </div>
                        <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900">
                          {section.title}
                        </h3>
                      </div>
                      <div className="bg-gradient-to-r from-slate-50 to-white p-3 sm:p-4 md:p-6 rounded-md sm:rounded-lg border border-slate-200 shadow-sm">
                        <p className="text-slate-700 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">{section.content}</p>
                      </div>
                    </section>
                  ))}

                  {/* Features Section */}
                  <section className="mb-4 sm:mb-6 md:mb-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="p-1.5 sm:p-2 md:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md sm:rounded-lg text-white shadow-md sm:shadow-lg">
                        <Award size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900">Key Features</h3>
                    </div>
                    <div className="grid gap-2 sm:gap-3 md:gap-4">
                      {selectedProject.blogContent.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 bg-white border border-slate-200 rounded-md sm:rounded-lg hover:border-slate-300 hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 leading-relaxed text-xs sm:text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Technologies Section */}
                  <section className="mb-4 sm:mb-6 md:mb-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="p-1.5 sm:p-2 md:p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-md sm:rounded-lg text-white shadow-md sm:shadow-lg">
                        <Tag size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900">Technologies</h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {selectedProject.blogContent.technologies.map((tech, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-md sm:rounded-lg hover:from-white hover:to-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 leading-relaxed font-medium text-xs sm:text-sm md:text-base">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Outcome Section */}
                  <section className="mb-4 sm:mb-6 md:mb-8">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="p-1.5 sm:p-2 md:p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-md sm:rounded-lg text-white shadow-md sm:shadow-lg">
                        <Award size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-900">Outcome & Results