import { Github, Linkedin, Instagram, Youtube, Mail, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', gradient: 'from-gray-600 to-gray-800' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', gradient: 'from-blue-600 to-blue-800' },
    { icon: Instagram, href: 'https://www.instagram.com/tqydns/', label: 'Instagram', gradient: 'from-pink-500 to-purple-600' },
    { icon: Youtube, href: '#', label: 'YouTube', gradient: 'from-red-500 to-red-700' }
  ];

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#portfolio', label: 'Portfolio' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                  Taqiyuddin Afif
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  Creative Web Developer passionate about crafting exceptional digital experiences 
                  through innovative design and clean code.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-gradient-to-r ${social.gradient} rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-gray-900"
              >
                Quick Links
              </motion.h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="block text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl font-bold text-gray-900"
              >
                Get In Touch
              </motion.h4>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Mail size={16} className="text-blue-600" />
                  </div>
                  <span className="font-medium">afiftqydns@gmail.com</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-2xl"
                >
                  <p className="text-sm text-blue-700 font-medium">
                    Available for freelance projects and collaborations
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-200/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <span>© {currentYear} Taqiyuddin Afif. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>and lots of coffee</span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowUp size={16} />
              Back to Top
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;