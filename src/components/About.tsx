import { useEffect, useRef } from 'react';
import { MapPin, Mail } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-on-scroll, .scale-in-on-scroll, .slide-in-left-on-scroll, .slide-in-right-on-scroll');
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

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-slate-50 relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              About Me
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left-on-scroll">
              <h3 className="text-2xl font-medium text-slate-900 mb-6">
                Hello, I am Taqiyuddin Afif
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                I am a Web Developer committed to creating responsive, aesthetically pleasing, and efficient digital experiences. I believe that technology is a powerful tool for conveying ideas, solving problems, and building meaningful connections.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Outside of development, I’m always learning — exploring emerging technologies, contributing to creative initiatives, and sharing insights with the tech community. I’m driven by the belief that technology, when used thoughtfully, can create meaningful impact and lasting value.
              </p>
            </div>

            <div className="space-y-6 slide-in-right-on-scroll">
              <div className="bg-white p-6 rounded-lg border border-slate-200 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <MapPin className="text-slate-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Location</h4>
                    <p className="text-slate-600">Boyolali, Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Mail className="text-slate-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">afiftqydns@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;