import { useEffect, useRef, useState } from 'react';
import { Play, Eye, X } from 'lucide-react';

import ImgTaqiyuddin from '../assets/taqiyuddin.png';
import ImgHealthy from '../assets/healthy.png';
import ImgIris from '../assets/iris.png';
import ImgAwal from '../assets/awal.png';
import ImgAfiftaqiya from '../assets/afiftaqiya.com.png';
import ImgP5 from '../assets/p5.jpg';

type PreviewType = 'video' | 'image';

interface Project {
  type: 'video' | 'web';
  title: string;
  description: string;
  image: string;
  tags: string[];
  previewType: PreviewType;
  previewSrc: string;
  url?: string;
}

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [previewType, setPreviewType] = useState<PreviewType | null>(null);
  const [previewSrc, setPreviewSrc] = useState('');

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

  const handleOpenPopup = (type: PreviewType, src: string) => {
    setPreviewType(type);
    setPreviewSrc(src);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPreviewType(null);
    setPreviewSrc('');
  };

  const projects: Project[] = [
    {
      type: 'web',
      title: 'Taqiyuddin Afif Portfolio v2.1',
      description: 'Developed from scratch using React, styled with Lucide icons, and powered by Vite for a fast, modular workflow.',
      image: ImgTaqiyuddin,
      tags: ['React', 'Lucide', 'Vite'],
      previewType: 'image',
      previewSrc: ImgTaqiyuddin,
      url: '#',
    },
    {
      type: 'video',
      title: 'Healthy School Project',
      description: 'Edited a school awareness video focusing on smoking prevention, personal health, and environmental consciousness.',
      image: ImgHealthy,
      tags: ['Premiere Pro', 'After Effects', 'Canva'],
      previewType: 'video',
      previewSrc: 'https://www.youtube.com/embed/8KLeB_ZF3eA',
    },
    {
      type: 'video',
      title: 'Short Film “Iris”',
      description: 'A short film edited entirely using Adobe Premiere Pro, with soft color tones and cinematic transitions.',
      image: ImgIris,
      tags: ['After Effects', 'Premiere Pro'],
      previewType: 'video',
      previewSrc: 'https://www.youtube.com/embed/eubpKqmfmII',
    },
    {
      type: 'video',
      title: 'Short Film “Awal”',
      description: 'A socially driven short film with cinematic editing and a message of racial equality.',
      image: ImgAwal,
      tags: ['Premiere Pro', 'After Effects', 'Photoshop'],
      previewType: 'video',
      previewSrc: 'https://www.youtube.com/embed/wHCb_g6XZis',
    },
    {
      type: 'web',
      title: 'afiftaqiya.com',
      description: 'A Blogger-powered blog enhanced with Analytics, AdSense, and SEO tools.',
      image: ImgAfiftaqiya,
      tags: ['Blogger', 'Python', 'Java'],
      previewType: 'image',
      previewSrc: ImgAfiftaqiya,
      url: 'https://afiftaqiya.blogspot.com',
    },
    {
      type: 'video',
      title: 'P5 “Bangunlah Jiwa dan Raganya”',
      description: 'Video of P5 interfaith and health activities edited with Adobe Premiere Pro.',
      image: ImgP5,
      tags: ['Premiere Pro', 'After Effects'],
      previewType: 'video',
      previewSrc: 'https://www.youtube.com/embed/wjZQ-SafEwo',
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
                    {project.type === 'video' ? (
                      <button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200"
                        onClick={() => handleOpenPopup(project.previewType, project.previewSrc)}
                      >
                        <Play size={20} />
                      </button>
                    ) : project.type === 'web' && project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200"
                      >
                        <Eye size={20} />
                      </a>
                    ) : (
                      <button
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-all duration-200"
                        onClick={() => handleOpenPopup(project.previewType, project.previewSrc)}
                      >
                        <Eye size={20} />
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-3">{project.title}</h3>
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

      {/* Pop Up Preview */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden animate-scaleIn">
            <button
              className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
              onClick={handleClosePopup}
            >
              <X size={20} />
            </button>
            {previewType === 'video' ? (
              <iframe
                className="w-full h-full"
                src={`${previewSrc}?autoplay=1`}
                title="Video Preview"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <img src={previewSrc} alt="Preview" className="w-full h-full object-cover" />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
