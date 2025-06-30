import { useEffect, useRef, useState } from 'react';
import { Play, Eye, X, ExternalLink, Calendar, User, Tag, Globe, ArrowRight, Clock, Award } from 'lucide-react';

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
                  
                  {/* Static Floating Type Badge - No Animation */}
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
                  {/* Animated Border */}
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

                  {/* Date and Role Info */}
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

      {/* Enhanced Blog-Style Pop-up */}
      {isPopupOpen && selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] shadow-2xl animate-scale-in transform overflow-hidden">
            {/* Reading Progress Bar */}
            <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out z-10"
                 style={{ width: `${readingProgress}%` }}></div>
            
            {/* Enhanced Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 p-6 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 animate-slide-in-left">
                  <div className="relative">
                    <div className="p-3 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl shadow-sm animate-pulse-subtle">
                      {selectedProject.type === 'video' ? <Play size={24} className="text-slate-700" /> : <Globe size={24} className="text-slate-700" />}
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-1 animate-fade-in-delayed">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-6 text-sm text-slate-500 animate-fade-in-delayed-2">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{selectedProject.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{selectedProject.role}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCloseBlog}
                  className="p-3 hover:bg-slate-100 rounded-xl transition-all duration-200 hover:rotate-90 transform group"
                >
                  <X size={24} className="group-hover:text-red-500 transition-colors" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="blog-modal-content overflow-y-auto max-h-[calc(95vh-120px)]">
              <div className="p-8 space-y-10">
                {/* Hero Section */}
                <div className="animate-scale-in-delayed">
                  {selectedProject.type === 'video' && selectedProject.youtubeId ? (
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl group">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                        title={selectedProject.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ) : (
                    <div className="relative">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                    </div>
                  )}
                </div>

                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-3 animate-fade-in-delayed">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm font-medium hover:from-slate-200 hover:to-slate-300 hover:scale-105 transition-all duration-300 cursor-default animate-bounce-in shadow-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Tag size={14} className="group-hover:rotate-12 transition-transform duration-200" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Blog Content with Enhanced Styling */}
                <article className="prose prose-slate max-w-none">
                  {[
                    { 
                      title: 'Project Overview', 
                      content: selectedProject.blogContent.overview,
                      icon: <Globe size={20} />,
                      gradient: 'from-blue-500 to-cyan-500'
                    },
                    { 
                      title: 'The Challenge', 
                      content: selectedProject.blogContent.challenge,
                      icon: <Award size={20} />,
                      gradient: 'from-orange-500 to-red-500'
                    },
                    { 
                      title: 'The Solution', 
                      content: selectedProject.blogContent.solution,
                      icon: <ArrowRight size={20} />,
                      gradient: 'from-green-500 to-emerald-500'
                    }
                  ].map((section, index) => (
                    <section key={index} className="mb-10 animate-slide-up group" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`p-3 bg-gradient-to-r ${section.gradient} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {section.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                          {section.title}
                        </h3>
                      </div>
                      <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="text-slate-700 leading-relaxed text-lg">{section.content}</p>
                      </div>
                    </section>
                  ))}

                  {/* Enhanced Features Section */}
                  <section className="mb-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white shadow-lg">
                        <Award size={20} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Key Features</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.blogContent.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-md transition-all duration-300 animate-slide-in-left group"
                          style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Enhanced Technologies Section */}
                  <section className="mb-10 animate-slide-up" style={{ animationDelay: '1.2s' }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl text-white shadow-lg">
                        <Tag size={20} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Technologies Used</h3>
                    </div>
                    <div className="space-y-3">
                      {selectedProject.blogContent.technologies.map((tech, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-xl hover:from-white hover:to-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-300 animate-slide-in-right group"
                          style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-slate-700 leading-relaxed font-medium group-hover:text-slate-900 transition-colors duration-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Enhanced Outcome Section */}
                  <section className="mb-10 animate-slide-up" style={{ animationDelay: '1.8s' }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white shadow-lg">
                        <Award size={20} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Outcome & Results</h3>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
                      <p className="text-slate-700 leading-relaxed text-lg">{selectedProject.blogContent.outcome}</p>
                    </div>
                  </section>

                  {/* Enhanced Lessons Section */}
                  <section className="mb-10 animate-slide-up" style={{ animationDelay: '2s' }}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white shadow-lg">
                        <Award size={20} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Key Learnings</h3>
                    </div>
                    <div className="space-y-3">
                      {selectedProject.blogContent.lessons.map((lesson, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl hover:from-orange-50 hover:to-amber-50 hover:shadow-md transition-all duration-300 animate-fade-in group"
                          style={{ animationDelay: `${2.2 + index * 0.1}s` }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </article>

                {/* Enhanced Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-200 animate-slide-up" style={{ animationDelay: '2.5s' }}>
                  {selectedProject.type === 'video' && selectedProject.youtubeId && (
                    <a
                      href={`https://www.youtube.com/watch?v=${selectedProject.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-xl transition-all duration-300 transform group"
                    >
                      <Play size={20} className="group-hover:scale-110 transition-transform duration-200" />
                      Watch on YouTube
                    </a>
                  )}
                  {selectedProject.type === 'web' && selectedProject.url && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-700 hover:scale-105 hover:shadow-xl transition-all duration-300 transform group"
                    >
                      <ExternalLink size={20} className="group-hover:scale-110 transition-transform duration-200" />
                      Visit Website
                    </a>
                  )}
                  <button
                    onClick={handleCloseBlog}
                    className="flex items-center justify-center gap-3 border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-400 hover:bg-slate-50 hover:scale-105 transition-all duration-300 transform group"
                  >
                    <X size={20} className="group-hover:rotate-90 transition-transform duration-200" />
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .portfolio-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .portfolio-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        .portfolio-action-btn {
          backdrop-filter: blur(12px);
        }

        .portfolio-title {
          position: relative;
          overflow: hidden;
        }

        .portfolio-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #64748b, #475569);
          transition: width 0.3s ease;
        }

        .portfolio-title:hover::after {
          width: 100%;
        }

        .portfolio-tag {
          position: relative;
          overflow: hidden;
        }

        .portfolio-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }

        .portfolio-tag:hover::before {
          left: 100%;
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out both;
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        .animate-scale-in-delayed {
          animation: scale-in 0.6s ease-out 0.3s both;
        }

        .blog-modal-content {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f8fafc;
        }

        .blog-modal-content::-webkit-scrollbar {
          width: 6px;
        }

        .blog-modal-content::-webkit-scrollbar-track {
          background: #f8fafc;
          border-radius: 3px;
        }

        .blog-modal-content::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        .blog-modal-content::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;