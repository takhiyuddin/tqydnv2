import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-gray-900 relative">
      <div className="section-divider absolute top-0 left-0 right-0"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              Contact Me
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="slide-in-left-on-scroll">
              <h3 className="text-2xl font-medium text-white mb-6">
                Let's Work Together
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                I'm always excited to take on new projects and collaborate with 
                great people. Whether you need a website, video editing services, 
                or just want to say hi, I'd love to hear from you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <Mail className="text-gray-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-400">afiftqydns@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <MapPin className="text-gray-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-400">Boyolali, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 slide-in-right-on-scroll">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="p-4 bg-green-900 rounded-lg w-fit mx-auto mb-6">
                    <CheckCircle className="text-green-400" size={32} />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 text-white bg-gray-700"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 text-white bg-gray-700"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 text-white bg-gray-700"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-200 text-white bg-gray-700 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-black px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;