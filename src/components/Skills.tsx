import { useRef } from 'react';
import { Code2, Palette, Globe, Zap, Star, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
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

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming & Development',
      description: 'Full-stack web development with modern frameworks and technologies.',
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', desc: 'Advanced component architecture and state management', level: 90 },
        { name: 'Next.js', desc: 'Server-side rendering and static site generation', level: 85 },
        { name: 'TypeScript', desc: 'Type-safe development and enhanced code quality', level: 80 },
        { name: 'JavaScript ES6+', desc: 'Modern JavaScript features and best practices', level: 95 },
        { name: 'TailwindCSS', desc: 'Utility-first CSS framework for rapid UI development', level: 90 },
        { name: 'Node.js', desc: 'Backend development and API creation', level: 75 },
        { name: 'Git & GitHub', desc: 'Version control and collaborative development', level: 85 },
        { name: 'Responsive Design', desc: 'Mobile-first approach and cross-browser compatibility', level: 95 }
      ]
    },
    {
      icon: Palette,
      title: 'Video Editing & Design',
      description: 'Professional video editing and visual design with industry-standard tools.',
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Adobe Premiere Pro', desc: 'Professional video editing and post-production', level: 95 },
        { name: 'Adobe After Effects', desc: 'Motion graphics and visual effects', level: 85 },
        { name: 'Color Grading', desc: 'Professional color correction and enhancement', level: 90 },
        { name: 'Audio Editing', desc: 'Sound design and audio synchronization', level: 80 },
        { name: 'Figma', desc: 'UI/UX design and prototyping', level: 85 },
        { name: 'Adobe Photoshop', desc: 'Image editing and graphic design', level: 80 },
        { name: 'Storytelling', desc: 'Visual narrative and creative direction', level: 90 },
        { name: 'Project Management', desc: 'Timeline management and client coordination', level: 85 }
      ]
    },
    {
      icon: Globe,
      title: 'Languages & Communication',
      description: 'Multilingual communication skills for global collaboration.',
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Indonesian', desc: 'Native speaker with excellent written and verbal skills', level: 100 },
        { name: 'English', desc: 'Fluent in technical and business communication', level: 85 },
        { name: 'Javanese', desc: 'Cultural language proficiency', level: 90 },
        { name: 'Technical Writing', desc: 'Documentation and project specifications', level: 80 },
        { name: 'Client Communication', desc: 'Professional correspondence and presentations', level: 85 },
        { name: 'Cross-cultural Communication', desc: 'Working with international teams', level: 80 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"
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
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-sm font-medium text-blue-700 mb-6">
                Technical Expertise
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive skill set spanning development, design, and communication
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group bg-white p-8 lg:p-10 rounded-3xl border border-gray-200/50 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="text-center mb-10 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-5 bg-gradient-to-r ${category.gradient} rounded-3xl text-white shadow-lg shadow-gray-900/10 mb-6`}
                  >
                    <category.icon size={36} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 bg-gradient-to-r ${category.gradient} rounded-lg text-white`}>
                      <Star size={16} />
                    </div>
                    <h4 className="font-bold text-gray-900">Core Competencies</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                        className="group/skill p-4 bg-gray-50/50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200/50"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-semibold text-gray-900 group-hover/skill:text-blue-600 transition-colors duration-300">
                            {skill.name}
                          </h5>
                          {skill.level && (
                            <span className="text-sm font-medium text-gray-500">
                              {skill.level}%
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">
                          {skill.desc}
                        </p>
                        
                        {skill.level && (
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ delay: skillIndex * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                              className={`h-2 bg-gradient-to-r ${category.gradient} rounded-full`}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect border */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${category.gradient} group-hover:w-full transition-all duration-500`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;