import { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Film, Calendar, Edit3, ExternalLink, X } from 'lucide-react';

import sertifikatMGMP from '../assets/sertifikat-mgmp.jpg';
import sertifikatFLS2N from '../assets/sertifikat-fls2n.jpg';

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-on-scroll, .scale-in-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
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

  const achievements = [
    {
      icon: Trophy,
      title: 'First Place Winner',
      event: 'Short Film Competition',
      organization: 'MGMP (Boyolali Regency)',
      year: '2024',
      description: 'Won first place in a prestigious short film competition organized by MGMP in Boyolali Regency.',
      role: 'Video Editor',
      details: [
        '1st Place Winner at District Level',
        'Responsible for complete post-production editing',
        'Color grading and visual effects implementation',
        'Audio synchronization and sound design',
      ],
      image: sertifikatFLS2N,
    },
    {
      icon: Award,
      title: 'First Runner-Up',
      event: 'Short Film Competition',
      organization: 'FLS2N (Boyolali Regency)',
      year: '2024',
      description: 'Received the first runner-up award in the competitive short film category at FLS2N Boyolali Regency.',
      role: 'Video Editor',
      details: [
        '1st Runner-Up at District Level',
        'Advanced editing techniques and transitions',
        'Creative storytelling through visual editing',
        'Professional-grade post-production workflow',
      ],
      image: sertifikatMGMP,
    },
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section ref={sectionRef} id="achievements" className="py-24 bg-slate-50 relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Achievements
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-8 card-hover scale-in-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 bg-slate-100 rounded-lg">
                    <achievement.icon className="text-slate-600" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-slate-900 mb-3">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-2">
                      <Film className="text-slate-400" size={16} />
                      <span className="text-slate-600 font-medium">{achievement.event}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="text-slate-400" size={16} />
                      <span className="text-slate-500">{achievement.year}</span>
                    </div>
                    <p className="text-slate-500 mb-4">{achievement.organization}</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">{achievement.description}</p>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Edit3 className="text-slate-600" size={16} />
                  </div>
                  <span className="text-slate-600 font-medium">Role: {achievement.role}</span>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-slate-900 mb-4">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {achievement.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 leading-relaxed text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openModal(achievement.image)}
                  className="w-full border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  <span>View Credential</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for JPG preview */}
      {modalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4 transition-opacity duration-300">
          <div className="bg-white rounded-xl max-w-4xl w-full relative shadow-xl overflow-hidden transform scale-100 opacity-100 transition-all duration-300 ease-out">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 border border-slate-400 rounded-full p-2 
                         bg-white/80 text-slate-800 
                         hover:bg-slate-100 shadow-lg backdrop-blur 
                         focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="w-full h-auto">
              <img src={selectedImage} alt="Sertifikat" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
