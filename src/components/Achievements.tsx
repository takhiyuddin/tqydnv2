import { useRef, useState } from 'react';
import { Trophy, Award, Film, Calendar, Edit3, ExternalLink, X, Star, Medal } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

import sertifikatMGMP from '../assets/sertifikat-mgmp.jpg';
import sertifikatFLS2N from '../assets/sertifikat-fls2n.jpg';

const Achievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const achievements = [
    {
      icon: Trophy,
      title: 'First Place Winner',
      event: 'Short Film Competition',
      organization: 'MGMP (Boyolali Regency)',
      year: '2024',
      description: 'Won first place in a prestigious short film competition organized by MGMP in Boyolali Regency.',
      role: 'Video Editor',
      gradient: 'from-yellow-500 to-orange-500',
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
      gradient: 'from-silver-400 to-gray-500',
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
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section ref={sectionRef} id="achievements" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-100/30 to-orange-100/30 rounded-full blur-3xl"
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
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200/50 rounded-full text-sm font-medium text-yellow-700 mb-6">
                Recognition & Awards
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                My <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Achievements</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Recognition for excellence in creative video editing and storytelling
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group bg-white p-8 lg:p-10 rounded-3xl border border-gray-200/50 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="flex items-start gap-6 mb-8 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`p-5 bg-gradient-to-r ${achievement.gradient} rounded-3xl text-white shadow-lg`}
                  >
                    <achievement.icon size={32} />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-yellow-50 transition-colors duration-300">
                          <Film className="text-gray-600 group-hover:text-yellow-600 transition-colors duration-300" size={16} />
                        </div>
                        <span className="text-gray-700 font-medium">{achievement.event}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-yellow-50 transition-colors duration-300">
                          <Calendar className="text-gray-600 group-hover:text-yellow-600 transition-colors duration-300" size={16} />
                        </div>
                        <span className="text-gray-600">{achievement.year}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 mb-4">{achievement.organization}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg relative z-10">{achievement.description}</p>

                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className={`p-3 bg-gradient-to-r ${achievement.gradient} rounded-2xl text-white`}>
                    <Edit3 size={20} />
                  </div>
                  <div>
                    <span className="text-gray-600 font-medium">Role: </span>
                    <span className="text-gray-900 font-bold">{achievement.role}</span>
                  </div>
                </div>

                <div className="mb-8 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 bg-gradient-to-r ${achievement.gradient} rounded-lg text-white`}>
                      <Star size={16} />
                    </div>
                    <h4 className="font-bold text-gray-900">Key Contributions</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {achievement.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: detailIndex * 0.1, duration: 0.5 }}
                        className="flex items-start gap-4 p-4 bg-gray-50/50 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200/50"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${achievement.gradient} rounded-full mt-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 leading-relaxed">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal(achievement.image)}
                  className={`w-full bg-gradient-to-r ${achievement.gradient} text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 relative z-10`}
                >
                  <Medal size={20} />
                  <span>View Credential</span>
                  <ExternalLink size={16} />
                </motion.button>
                
                {/* Hover effect border */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${achievement.gradient} group-hover:w-full transition-all duration-500`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {modalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
              className="bg-white rounded-3xl max-w-5xl w-full relative shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-2xl text-gray-800 hover:bg-white shadow-lg transition-all duration-300"
              >
                <X size={24} />
              </motion.button>
              
              <div className="p-2">
                <img 
                  src={selectedImage} 
                  alt="Certificate" 
                  className="w-full h-auto object-contain rounded-2xl" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;