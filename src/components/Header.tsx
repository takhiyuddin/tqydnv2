import { useState, useEffect } from 'react';
import { Menu, X, Home, User, BookOpen, Briefcase, Sparkles, Trophy, Layout, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'education', 'experience', 'skills', 'achievements', 'portfolio', 'contact'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#hero', label: 'Home', icon: <Home size={16} /> },
    { href: '#about', label: 'About', icon: <User size={16} /> },
    { href: '#education', label: 'Education', icon: <BookOpen size={16} /> },
    { href: '#experience', label: 'Experience', icon: <Briefcase size={16} /> },
    { href: '#skills', label: 'Skills', icon: <Sparkles size={16} /> },
    { href: '#achievements', label: 'Achievements', icon: <Trophy size={16} /> },
    { href: '#portfolio', label: 'Projects', icon: <Layout size={16} /> },
    { href: '#contact', label: 'Contact', icon: <Mail size={16} /> },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-xl font-semibold text-slate-900 hover:text-slate-600 transition-colors duration-200"
          >
            Taqiyuddin
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4 pb-4 bg-white/90 backdrop-blur-md rounded-lg border border-slate-200/50 shadow-md"
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'text-slate-900 bg-slate-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
