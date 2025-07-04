import { useEffect, useRef } from 'react';
import { Code, Video, Globe, ShoppingCart, FileText, Users, Briefcase } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-on-scroll, .scale-in-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 100);
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

  const services = [
    {
      icon: Globe,
      title: 'Landing Pages',
      description: 'High-converting landing pages that capture attention and drive action.'
    },
    {
      icon: Users,
      title: 'Portfolio Websites',
      description: 'Professional portfolio websites that showcase your work beautifully.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Website',
      description: 'Feature-rich online stores with seamless shopping experiences.'
    },
    {
      icon: Code,
      title: 'Company Website',
      description: 'Company websites that represent your brand professionally.'
    },
    {
      icon: FileText,
      title: 'Blog',
      description: 'Content-focused blog platforms with excellent user experiences.'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for various types of content.'
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-24 bg-gray-900 relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Work Experience
            </h2>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-12 scale-in-on-scroll">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-700 rounded-lg">
                  <Briefcase className="text-gray-400" size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">
                Remote Web Developer
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                I work remotely as a full-stack web developer, specializing in creating 
                beautiful and functional websites and applications. Additionally, I provide 
                professional video editing services for various clients and projects.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 card-hover scale-in-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-gray-700 rounded-lg w-fit mb-4">
                  <service.icon className="text-gray-400" size={24} />
                </div>
                <h4 className="text-lg font-medium text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;