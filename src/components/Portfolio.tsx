import { useEffect, useRef, useState } from 'react';
import { Play, Eye, X } from 'lucide-react';

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
      image: 'src/assets/taqiyuddin.png',
      tags: ['React', 'Lucide', 'Vite'],
      previewType: 'image',
      previewSrc: 'src/assets/taqiyuddin.png',
      url: '#',
    },
    {
      type: 'video',
      title: 'Healthy School Project',
      description: 'Edited a school awareness video focusing on smoking prevention, personal health, and environmental consciousness. The project combined visual clarity with a message-driven narrative.',
      image: 'src/assets/healthy.png',
      tags: ['Premiere Pro', 'After Effects', 'Canva'],
      previewType: 'video',
      previewSrc: 'https://www.youtube.com/embed/8KLeB_ZF3eA',
    },
    {
      type: 'video',
      title: 'Short Film “Iris”',
      description: 'A short film edited entirely using Adobe Premiere Pro, with soft color tones and cinematic transitions to emphasize the inner conflict of a schoolgirl who wants to pursue her hobby amid pressure from her parents.',
      image: 'src/assets/iris.png',
      tags: ['After Effects', 'Premiere Pro'],
      previewType: 'video',
      previewSrc: 'https://www.youtube.com/embed/eubpKqmfmII',
    },
    {
      type: 'video',
      title: 'Short Film “Awal”',
      description: 'A socially driven short film with cinematic editing and a meaningful core. “Awal” was cut using Adobe Premiere Pro with dramatic color grading, soft transitions, and precise rhythm to emphasize the value of respecting all races without discrimination.',
      image: 'src/assets/awal.png',
      tags: ['Premiere Pro', 'After Effects', 'Photoshop'],
      previewType: 'video',
      previewSrc: 'https://www.youtube.com/embed/wHCb_g6XZis',
    },
    {
      type: 'web',
      title: 'afiftaqiya.com',
      description: 'A fully functional blog built using the Blogger platform, enhanced with Google Analytics 4 for performance tracking and Google AdSense for monetization. Integrated with Google Tag Manager, Funding Choices, and Open Graph for better user experience, SEO, and cookie compliance. The site supports RSS feeds and runs over HTTP/3 for improved load speed and security.',
      image: 'src/assets/afiftaqiya.com.png',
      tags: ['Blogger', 'Python', 'Java'],
      previewType: 'image',
      previewSrc: 'afiftaqiya.blogspot.com',
      url: 'afiftaqiya.blogspot.com',
    },
      {
      type: 'video',
      title: 'P5 “Bangunlah Jiwa dan Raganya” Kegiatan Kerohanian & Gerakan Senam Sehat Bersama',
      description: 'Edited using Adobe Premiere Pro, this video showcases P5 activities at SMA Negeri 1, highlighting interfaith worship and a healthy breakfast movement. It emphasizes the importance of tolerance, health awareness, and spiritual balance among students.',
      image: 'src/assets/p5.jpg',
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
