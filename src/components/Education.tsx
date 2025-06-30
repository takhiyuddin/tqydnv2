import { useEffect, useRef, useState } from 'react';
import { BookOpen, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

import LogoAmikom from '../assets/logo-amikom.svg';
import LogoSMAN1Teras from '../assets/logo-sman1teras.svg';
import LogoNgruki from '../assets/logo-ngruki.svg';

// Define interface for education history items
interface EducationItem {
  institution: string;
  logo: JSX.Element;
  degree: string;
  faculty: string;
  period: string;
  status: string;
  description: string;
  achievements: string[];
}

const Education = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-on-scroll, .scale-in-on-scroll');
            elements.forEach((el: Element, index: number) => {
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

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const educationHistory: EducationItem[] = [
    {
      institution: 'Universitas Amikom Yogyakarta',
      logo: <img src={LogoAmikom} alt="Logo Amikom" className="w-8 h-8" />,
      degree: 'Bachelor of Information Systems',
      faculty: 'Faculty of Computer Science',
      period: 'Currently Pursuing',
      status: 'Current',
      description:
        "Pursuing a bachelor's degree in Information Systems, building a strong foundation in software development, database management, and system analysis.",
      achievements: [],
    },
    {
      institution: 'SMA Negeri 1 Teras',
      logo: <img src={LogoSMAN1Teras} alt="Logo SMAN 1 Teras" className="w-8 h-8" />,
      degree: 'Senior High School',
      faculty: 'IPS Informatics',
      period: '2022 - 2025',
      status: 'Graduated',
      description:
        'Completed high school education with a focus on Social Sciences and Informatics, developing foundational knowledge in technology and social studies.',
      achievements: [
        'Participated in Tantangan Inovasi Siswa SMA - Direktorat SMA 2024 (Short Film Competition)',
        'Participated in Festival dan Lomba Seni Siswa Nasional 2024 (Short Film Competition)',
        'Participated in Tantangan Inovasi Siswa SMA - Direktorat SMA 2025 (Short Film Competition)',
        'Participated in Musyawarah Guru Mata Pelajaran Bahasa Indonesia 2025 (Short Film Competition)',
        'Contributed as Video Editor for Sekolah Sehat SMA Negeri 1 Teras initiative',
        'Contributed as Video Editor for Project P5 Bangunlah Jiwa & Raganya',
        'Contributed as Video Editor for Duta Wisata Boyolali Regency 2024',
        'Assisted in editing videos for teacher projects, including creative video competitions and Aksi Nyata',
      ],
    },
    {
      institution: 'MTSS Islam Ngruki',
      logo: <img src={LogoNgruki} alt="Logo MTSS Ngruki" className="w-8 h-8" />,
      degree: 'Islamic Junior High School',
      faculty: 'General Education',
      period: '2019 - 2022',
      status: 'Graduated',
      description:
        'Completed Islamic junior high school education, combining religious studies with general academic curriculum.',
      achievements: ['Completed memorization of 10 juz of the Quran in Grade 9, 2022'],
    },
  ];

  return (
    <section ref={sectionRef} id="education" className="py-24 bg-white relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Education
            </h2>
          </div>

          <div className="space-y-8">
            {educationHistory.map((education, index: number) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-8 card-hover scale-in-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center gap-4 mb-4 lg:mb-0">
                    <div className="p-3 bg-slate-100 rounded-lg">{education.logo}</div>
                    <h3 className="text-2xl font-medium text-slate-900">{education.institution}</h3>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      education.status === 'Current'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {education.status}
                  </span>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-slate-400" size={16} />
                    <span className="text-slate-600 font-medium">{education.degree}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="text-slate-400" size={16} />
                    <span className="text-slate-500">{education.period}</span>
                  </div>

                  <div className="text-slate-500">{education.faculty}</div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4">{education.description}</p>

                {education.achievements.length > 0 && (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Achievements
                      {openDropdown === index ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    {openDropdown === index && (
                      <ul
                        className="mt-4 list-disc list-inside text-slate-600 dropdown-animation"
                      >
                        {education.achievements.map((achievement, idx: number) => (
                          <li key={idx} className="mb-2">{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .dropdown-animation {
          animation: slideIn 0.3s ease-in-out;
          transform-origin: top;
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Education;