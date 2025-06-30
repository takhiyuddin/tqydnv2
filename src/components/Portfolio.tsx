import { useEffect, useRef, useState } from 'react';
import { Play, Eye, X, ExternalLink, Calendar, User, Tag } from 'lucide-react';

import ImgTaqiyuddin from '../assets/taqiyuddin.png';
import ImgHealthy from '../assets/healthy.png';
import ImgIris from '../assets/iris.png';
import ImgAwal from '../assets/awal.png';
import ImgAfiftaqiya from '../assets/afiftaqiya.com.png';
import ImgP5 from '../assets/p5.jpg';

type PreviewType = 'video' | 'image' | 'detailed';

interface Project {
  type: 'video' | 'web';
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  tags: string[];
  previewType: PreviewType;
  previewSrc: string;
  url?: string;
  youtubeUrl?: string;
  date: string;
  role: string;
  features?: string[];
  technologies?: string[];
}

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [previewType, setPreviewType] = useState<PreviewType | null>(null);
  const [previewSrc, setPreviewSrc] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const handleOpenPopup = (type: PreviewType, src: string, project?: Project) => {
    setPreviewType(type);
    setPreviewSrc(src);
    setSelectedProject(project || null);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPreviewType(null);
    setPreviewSrc('');
    setSelectedProject(null);
  };

  const projects: Project[] = [
    {
      type: 'web',
      title: 'Taqiyuddin Afif Portfolio v2.1',
      description: 'Developed from scratch using React, styled with Lucide icons, and powered by Vite for a fast, modular workflow.',
      detailedDescription: 'A modern, responsive portfolio website built with cutting-edge web technologies. This project showcases my evolution as a web developer, featuring smooth animations, optimized performance, and a clean, professional design that reflects my personal brand.',
      image: ImgTaqiyuddin,
      tags: ['React', 'Lucide', 'Vite'],
      previewType: 'detailed',
      previewSrc: ImgTaqiyuddin,
      url: '#',
      date: '2024',
      role: 'Full-Stack Developer & Designer',
      features: [
        'Responsive design optimized for all devices',
        'Smooth scroll animations and micro-interactions',
        'Modern component architecture with React',
        'Performance optimized with Vite build system',
        'SEO-friendly structure and meta tags',
        'Accessible design following WCAG guidelines'
      ],
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons', 'Framer Motion']
    },
    {
      type: 'video',
      title: 'Healthy School Project',
      description: 'Edited a school awareness video focusing on smoking prevention, personal health, and environmental consciousness.',
      detailedDescription: 'A comprehensive health awareness campaign video created for educational purposes. This project involved extensive research on health topics, creative storytelling, and professional video editing to deliver an impactful message about healthy living and environmental responsibility.',
      image: ImgHealthy,
      tags: ['Premiere Pro', 'After Effects', 'Canva'],
      previewType: 'video',
      previewSrc: 'https://www.youtube.com/embed/8KLeB_ZF3eA',
      youtubeUrl: 'https://www.youtube.com/watch?v=8KLeB_ZF3eA',
      date: '2024',
      role: 'Video Editor & Content Creator',
      features: [
        'Educational content development',
        'Professional color grading and correction',
        'Motion graphics and text animations',
        'Audio mixing and sound design',
        'Engaging visual storytelling',
        'Health awareness messaging'
      ],
      technologies: ['Adobe Premiere Pro', 'Adobe After Effects', 'Canva', 'Audacity']
    },
    {
      type: 'video',
      title: 'Short Film "Iris"',
      description: 'A short film edited entirely using Adobe Premiere Pro, with soft color tones and cinematic transitions.',
      detailedDescription: 'A cinematic short film that explores themes of identity and self-discovery. This project challenged me to create a compelling narrative through visual storytelling, utilizing advanced editing techniques, color psychology, and atmospheric sound design to create an immersive viewing experience.',
      image: ImgIris,
      tags: ['After Effects', 'Premiere Pro'],
      previewType: 'video',
      previewSrc: 'https://www.youtube.com/embed/eubpKqmfmII',
      youtubeUrl: 'https://www.youtube.com/watch?v=eubpKqmfmII',
      date: '2024',
      role: 'Video Editor & Post-Production Specialist',
      features: [
        'Cinematic color grading with soft tones',
        'Advanced transition effects',
        'Atmospheric sound design',
        'Visual storytelling techniques',
        'Professional post-production workflow',
        'Creative narrative structure'
      ],
      technologies: ['Adobe Premiere Pro', 'Adobe After Effects', 'DaVinci Resolve', 'Adobe Audition']
    },
    {
      type: 'video',
      title: 'Short Film "Awal"',
      description: 'A socially driven short film with cinematic editing and a message of racial equality.',
      detailedDescription: 'A powerful social commentary film addressing themes of racial equality and human dignity. This project required sensitive handling of important social issues while maintaining artistic integrity. The editing process focused on creating emotional impact through careful pacing, symbolic imagery, and meaningful visual metaphors.',
      image: ImgAwal,
      tags: ['Premiere Pro', 'After Effects', 'Photoshop'],
      previewType: 'video',
      previewSrc: 'https://www.youtube.com/embed/wHCb_g6XZis',
      youtubeUrl: 'https://www.youtube.com/watch?v=wHCb_g6XZis',
      date: '2024',
      role: 'Video Editor & Social Content Creator',
      features: [
        'Social message integration',
        'Symbolic visual storytelling',
        'Emotional pacing and rhythm',
        'Professional cinematography enhancement',
        'Meaningful color symbolism',
        'Impactful narrative structure'
      ],
      technologies: ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Photoshop', 'Color Finale']
    },
    {
      type: 'web',
      title: 'afiftaqiya.com',
      description: 'A Blogger-powered blog enhanced with Analytics, AdSense, and SEO tools.',
      detailedDescription: 'A comprehensive blogging platform that serves as a content hub for technology insights, tutorials, and personal reflections. This project involved extensive customization of the Blogger platform, implementation of advanced SEO strategies, and integration of monetization tools to create a professional blogging experience.',
      image: ImgAfiftaqiya,
      tags: ['Blogger', 'Python', 'Java'],
      previewType: 'detailed',
      previewSrc: ImgAfiftaqiya,
      url: 'https://afiftaqiya.blogspot.com',
      date: '2023-2024',
      role: 'Blog Developer & Content Creator',
      features: [
        'Custom Blogger theme development',
        'Google Analytics integration',
        'AdSense monetization setup',
        'SEO optimization and meta tags',
        'Responsive design implementation',
        'Content management system customization'
      ],
      technologies: ['Blogger Platform', 'HTML/CSS', 'JavaScript', 'Google Analytics', 'Google AdSense', 'Python Scripts']
    },
    {
      type: 'video',
      title: 'P5 "Bangunlah Jiwa dan Raganya"',
      description: 'Video of P5 interfaith and health activities edited with Adobe Premiere Pro.',
      detailedDescription: 'A documentary-style video capturing the essence of P5 (Projek Penguatan Profil Pelajar Pancasila) activities focused on interfaith harmony and physical wellness. This project required careful documentation of cultural and religious diversity while promoting unity and health consciousness among students.',
      image: ImgP5,
      tags: ['Premiere Pro', 'After Effects'],
      previewType: 'video',
      previewSrc: 'https://www.youtube.com/embed/wjZQ-SafEwo',
      youtubeUrl: 'https://www.youtube.com/watch?v=wjZQ-SafEwo',
      date: '2024',
      role: 'Documentary Editor & Cultural Content Creator',
      features: [
        'Cultural sensitivity in editing',
        'Documentary-style storytelling',
        'Multi-cultural content integration',
        'Educational value enhancement',
        'Community engagement focus',
        'Inspirational messaging'
      ],
      technologies: ['Adobe Premiere Pro', 'Adobe After Effects', 'Multicam Editing', 'Audio Synchronization']
    },
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
                    <button
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200"
                      onClick={() => handleOpenPopup('detailed', project.previewSrc, project)}
                    >
                      {project.type === 'video' ? <Play size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <button
                    onClick={() => handleOpenPopup('detailed', project.previewSrc, project)}
                    className="text-left w-full group-hover:text-slate-700 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-medium text-slate-900 mb-3 hover:text-slate-700">
                      {project.title}
                    </h3>
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

      {/* Enhanced Pop Up with Detailed Information */}
      {isPopupOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl my-8 animate-scaleIn">
            <button
              className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition z-10"
              onClick={handleClosePopup}
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {/* Header Section */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{selectedProject.title}</h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{selectedProject.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{selectedProject.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={16} />
                    <span>{selectedProject.type === 'video' ? 'Video Project' : 'Web Development'}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Media Section */}
              <div className="mb-8">
                {selectedProject.type === 'video' ? (
                  <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                    <iframe
                      className="w-full h-full"
                      src={selectedProject.previewSrc}
                      title={selectedProject.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img
                      src={selectedProject.previewSrc}
                      alt={selectedProject.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Description Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Overview</h3>
                <p className="text-slate-700 leading-relaxed text-lg">{selectedProject.detailedDescription}</p>
              </div>

              {/* Features Section */}
              {selectedProject.features && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Section */}
              {selectedProject.technologies && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                    Visit Website
                  </a>
                )}
                {selectedProject.youtubeUrl && (
                  <a
                    href={selectedProject.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all duration-200"
                  >
                    <Play size={16} />
                    Watch on YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;