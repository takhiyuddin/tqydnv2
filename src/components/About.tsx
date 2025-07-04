import { useEffect, useRef } from 'react';
import { MapPin, Mail, Heart, Code, Palette } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"
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
                Get to know me
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Passionate about creating digital experiences that make a difference
              </p>
            </motion.div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Hello, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Taqiyuddin Afif</span>
                </h3>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    I'm a passionate Web Developer committed to creating responsive, aesthetically pleasing, 
                    and efficient digital experiences. I believe that technology is a powerful tool for 
                    conveying ideas, solving problems, and building meaningful connections.
                  </p>
                  <p>
                    Outside of development, I'm always learning — exploring emerging technologies, 
                    contributing to creative initiatives, and sharing insights with the tech community. 
                    I'm driven by the belief that technology, when used thoughtfully, can create 
                    meaningful impact and lasting value.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Code, label: "Clean Code", color: "from-blue-500 to-cyan-500" },
                  { icon: Palette, label: "Creative Design", color: "from-purple-500 to-pink-500" },
                  { icon: Heart, label: "User Focus", color: "from-red-500 to-orange-500" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl border border-gray-200/50 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-300"
                  >
                    <div className={`p-2 bg-gradient-to-r ${item.color} rounded-xl text-white`}>
                      <item.icon size={16} />
                    </div>
                    <span className="font-medium text-gray-700">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  value: "Boyolali, Indonesia",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  icon: Mail,
                  title: "Email",
                  value: "afiftqydns@gmail.com",
                  gradient: "from-blue-500 to-purple-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-white p-8 rounded-3xl border border-gray-200/50 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-4 bg-gradient-to-r ${item.gradient} rounded-2xl text-white shadow-lg`}
                    >
                      <item.icon size={24} />
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-lg">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;