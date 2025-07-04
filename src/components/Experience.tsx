import { useRef } from 'react';
import { Code, Video, Globe, ShoppingCart, FileText, Users, Briefcase, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: Globe,
      title: 'Landing Pages',
      description: 'High-converting landing pages that capture attention and drive action.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Portfolio Websites',
      description: 'Professional portfolio websites that showcase your work beautifully.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Website',
      description: 'Feature-rich online stores with seamless shopping experiences.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Company Website',
      description: 'Company websites that represent your brand professionally.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: FileText,
      title: 'Blog',
      description: 'Content-focused blog platforms with excellent user experiences.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for various types of content.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-green-100/30 to-blue-100/30 rounded-full blur-3xl"
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
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200/50 rounded-full text-sm font-medium text-green-700 mb-6">
                Professional Journey
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Work <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Delivering exceptional digital solutions through expertise and creativity
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white p-10 lg:p-12 rounded-3xl border border-gray-200/50 shadow-xl shadow-gray-900/5 mb-16 relative overflow-hidden group"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="text-center relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl text-white shadow-lg shadow-blue-500/25 mb-8"
              >
                <Briefcase size={40} />
              </motion.div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                Remote Web Developer
              </h3>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                I work remotely as a full-stack web developer, specializing in creating 
                beautiful and functional websites and applications. Additionally, I provide 
                professional video editing services for various clients and projects.
              </p>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring", bounce: 0.3 }}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-blue-700 font-medium"
              >
                <Sparkles size={16} className="animate-pulse" />
                Currently Available for Projects
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-white p-8 rounded-3xl border border-gray-200/50 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 bg-gradient-to-r ${service.gradient} rounded-2xl text-white shadow-lg mb-6 relative z-10`}
                >
                  <service.icon size={28} />
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                  {service.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {service.description}
                </p>
                
                {/* Hover effect border */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;