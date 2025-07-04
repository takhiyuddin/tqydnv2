import { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const showCursor = true;
  const fullText = 'Taqiyuddin Afif';

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const typeWriter = () => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
          timeout = setTimeout(typeWriter, 100);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
          timeout = setTimeout(typeWriter, 50);
        } else {
          setIsDeleting(false);
          timeout = setTimeout(typeWriter, 500);
        }
      }
    };

    timeout = setTimeout(typeWriter, 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black relative"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto pt-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
              <span className="font-medium">
                {displayedText}
                {showCursor && (
                  <span className="animate-pulse border-r-2 border-white ml-1"></span>
                )}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light animate-fade-in-delayed">
              Web Developer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-delayed-2">
            <button className="btn-primary text-black px-8 py-3 rounded-lg font-medium flex items-center gap-2 text-sm">
              <Download size={16} />
              Download Resume
            </button>
            <button
              onClick={scrollToContact}
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-900 transition-all duration-200 flex items-center gap-2 text-sm"
            >
              <Mail size={16} />
              Get in Touch
            </button>
          </div>

          <button
            onClick={scrollToAbout}
            className="text-gray-600 hover:text-gray-400 transition-colors duration-200 animate-bounce"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;