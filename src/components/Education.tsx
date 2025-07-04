import { useRef } from 'react';
import { BookOpen, Calendar, Award, GraduationCap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

import LogoAmikom from '../assets/logo-amikom.svg';
import LogoSMAN1Teras from '../assets/logo-sman1teras.svg';
import LogoNgruki from '../assets/logo-ngruki.svg';

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
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const educationHistory: EducationItem[] = [
    {
      institution: 'Universitas Amikom Yogyakarta',
      logo: <img src={LogoAmikom} alt="Logo Amikom" className="w-10 h-10" />,
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
      logo: <img src={LogoSMAN1Teras} alt="Logo SMAN 1 Teras" className="w-10 h-10" />,
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
        'Contributed as Video Editor for Sekolah Sehat initiative',
        'Contributed as Video Editor for Project P5 Bangunlah Jiwa & Raganya',
        'Contributed as Video Editor for Duta Wisata Boyolali Regency 2024',
        'Assisted in editing videos for teacher projects, including creative video competitions and Aksi Nyata',
      ],
    },
    {
      institution: 'MTSS Islam Ngruki',
      logo: <img src={LogoNgruki} alt="Logo MTSS Ngruki" className="w-10 h-10" />,
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
    <section ref={sectionRef} id="education" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-r from-purple-100/30 to-blue-100/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/50 rounded-full text-sm font-medium text-purple-700 mb-6">
                Academic Journey
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Education</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Building knowledge through continuous learning and academic excellence
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {educationHistory.map((education, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white p-8 lg:p-10 rounded-3xl border border-gray-200/50 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex items-center gap-6 mb-6 lg:mb-0">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200/50 group-hover:from-purple-50 group-hover:to-blue-50 group-hover:border-purple-200/50 transition-all duration-500"
                    >
                      {education.logo}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {education.institution}
                      </h3>
                      <p className="text-gray-600 mt-1">{education.faculty}</p>
                    </div>
                  </div>
                  
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`inline-block px-6 py-3 rounded-2xl text-sm font-bold shadow-lg ${
                      education.status === 'Current'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    }`}
                  >
                    {education.status}
                  </motion.span>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-2xl group-hover:bg-purple-50/50 transition-colors duration-300">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <BookOpen className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{education.degree}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-2xl group-hover:bg-blue-50/50 transition-colors duration-300">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <Calendar className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{education.period}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg mb-8">{education.description}</p>

                {education.achievements.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="border-t border-gray-200/50 pt-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white">
                        <Award size={20} />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Achievements & Activities</h4>
                    </div>
                    <div className="grid gap-3">
                      {education.achievements.map((achievement, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          className="flex items-start gap-4 p-4 bg-gradient-to-r from-amber-50/50 to-orange-50/50 rounded-2xl border border-amber-200/30 hover:border-amber-300/50 transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;