import { useEffect, useRef, useState } from 'react';

// Import icon SVG
import IconReact from '../assets/icons/react.svg';
import IconTypeScript from '../assets/icons/typescript.svg';
import IconNode from '../assets/icons/node.svg';
import IconPython from '../assets/icons/nextjs.svg';
import IconDesign from '../assets/icons/premierepro.svg';
import IconDatabase from '../assets/icons/aftereffects.svg';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed,] = useState(150);
  const roles = ['Web Developer', 'Front End Developer'];

  useEffect(() => {
    const current = loopIndex % roles.length;
    const fullText = roles[current];

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopIndex(loopIndex + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(
              '.fade-in-on-scroll, .scale-in-on-scroll, .slide-in-left-on-scroll, .slide-in-right-on-scroll'
            );
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 120);
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

  const skills = [
    { name: 'React', icon: IconReact },
    { name: 'TypeScript', icon: IconTypeScript },
    { name: 'Node.js', icon: IconNode },
    { name: 'Next.js', icon: IconPython },
    { name: 'Adobe Premiere Pro', icon: IconDesign },
    { name: 'Adobe After Effects', icon: IconDatabase },
  ];

  return (
    <>
      <style>{`
        .fade-in-on-scroll {
          opacity: 0;
          transform: translateY(25px);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-in-left-on-scroll {
          opacity: 0;
          transform: translateX(-35px);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-in-right-on-scroll {
          opacity: 0;
          transform: translateX(35px);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scale-in-on-scroll {
          opacity: 0;
          transform: scale(0.92);
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .visible {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) scale(1) !important;
        }

        .grid-pattern {
          background-image: 
            linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .gradient-border {
          position: relative;
          background: white;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(135deg, #f1f5f9, #e2e8f0, #cbd5e1);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: subtract;
          -webkit-mask-composite: xor;
        }

        .text-shadow {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s ease;
        }

        .shine-effect:hover::before {
          left: 100%;
        }

        .diagonal-lines {
          background-image: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 8px,
            rgba(148, 163, 184, 0.03) 8px,
            rgba(148, 163, 184, 0.03) 16px
          );
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>

      <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="absolute inset-0 diagonal-lines"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-purple-50 to-pink-100 rounded-full opacity-40 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="fade-in-on-scroll mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                  <div className="w-24 h-px bg-slate-300 mx-4"></div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] px-4 py-2 bg-slate-100 rounded-full">
                    About Me
                  </span>
                  <div className="w-24 h-px bg-slate-300 mx-4"></div>
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-slate-900 text-shadow">
                Creative <span className="font-light italic text-slate-600">Developer</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Profile Card */}
              <div className="lg:col-span-1 slide-in-left-on-scroll">
                <div className="gradient-border rounded-2xl p-8 card-hover shine-effect h-full">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>

                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Taqiyuddin Afif</h3>
                    <p className="text-slate-500 text-sm mb-6">
                      <span className="font-mono">{text}</span>
                      <span className="animate-blink">|</span>
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Experience</span>
                        <span className="font-medium text-slate-800">3 Years</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Projects</span>
                        <span className="font-medium text-slate-800">10+ Completed</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Specialty</span>
                        <span className="font-medium text-slate-800">Front End Developer & Video Editing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="lg:col-span-2 space-y-8">
                <div className="slide-in-right-on-scroll">
                  <div className="gradient-border rounded-2xl p-8 card-hover shine-effect">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center mr-6">
                        <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1..." />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-4">My Philosophy</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          I am a Web Developer committed to creating responsive, aesthetically pleasing, and efficient digital experiences. I believe that technology is a powerful tool for conveying ideas, solving problems, and building meaningful connections.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slide-in-right-on-scroll">
                  <div className="gradient-border rounded-2xl p-8 card-hover shine-effect">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-200 rounded-xl flex items-center justify-center mr-6">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-800 mb-4">Beyond Development</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          Outside of development, I’m always learning — exploring emerging technologies, contributing to creative initiatives, and sharing insights with the tech community. I’m driven by the belief that technology, when used thoughtfully, can create meaningful impact and lasting value.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="scale-in-on-scroll">
              <div className="gradient-border rounded-2xl p-8 card-hover shine-effect">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">Technologies & Skills</h3>
                  <p className="text-slate-500">Tools I use to bring ideas to life</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="text-center p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300">
                      <img src={skill.icon} alt={skill.name} className="w-10 h-10 mx-auto mb-2" />
                      <div className="text-sm font-medium text-slate-700">{skill.name}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
  <div className="inline-flex items-center space-x-4">
    <a
      href="#contact"
      className="px-8 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors duration-300 transform hover:scale-105"
    >
      Let's Work Together
    </a>
    <span className="text-slate-400">•</span>
    <a
      href="#portfolio"
      className="px-8 py-3 border-2 border-slate-200 text-slate-700 font-medium rounded-full hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
    >
      View Portfolio
    </a>
  </div>
</div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
