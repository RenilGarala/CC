import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Laptop, Smartphone, Globe, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies for optimal performance and user experience."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile solutions that engage users and drive business growth."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Solutions",
      description: "Enterprise-grade software development tailored to your unique business requirements."
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that provide exceptional user experiences across all devices."
    }
  ];

  const works = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop"
    },
    {
      title: "Finance Mobile App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
    },
    {
      title: "Healthcare Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    },
    {
      title: "CRM System",
      category: "Software Solutions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-white">Clutch</span>
            <span className="text-purple-500">Coders</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'services', 'works', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors ${
                  activeSection === item ? 'text-purple-500' : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm py-4">
            {['home', 'services', 'works', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-purple-900/20 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse top-1/4 left-1/4"></div>
          <div className="absolute w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-pulse bottom-1/4 right-1/4 animation-delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-black"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Digital Vision
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
              We craft innovative IT solutions that drive business growth and exceed expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-linear-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollToSection('works')}
                className="border-2 border-purple-500 px-8 py-4 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-purple-500">Services</span>
            </h2>
            <p className="text-gray-400 text-lg">Comprehensive IT solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 p-8 rounded-2xl hover:border-purple-500/50 transition-all hover:transform hover:scale-105 group"
              >
                <div className="text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-20 bg-gradient-to-b from-black to-purple-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-purple-500">Portfolio</span>
            </h2>
            <p className="text-gray-400 text-lg">Showcasing our latest projects and innovations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {works.map((work, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-purple-400 text-sm font-semibold">{work.category}</span>
                    <h3 className="text-2xl font-bold mt-2">{work.title}</h3>
                    <button className="mt-4 flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      View Project <ChevronRight size={20} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-purple-500">Clutch Coders</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We are a team of passionate developers, designers, and innovators dedicated to transforming ideas into powerful digital solutions. With years of experience and a commitment to excellence, we deliver cutting-edge technology that drives business success.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to empower businesses with innovative IT solutions that not only meet today's challenges but anticipate tomorrow's opportunities. We believe in building long-term partnerships based on trust, quality, and results.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">15+</div>
                <div className="text-gray-400">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-purple-500">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg">Let's discuss how we can help your business grow</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-purple-500 mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400">info@clutchcoders.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-purple-500 mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-400">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-purple-500 mt-1" size={24} />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-400">123 Tech Street, Silicon Valley, CA 94025</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-white/5 border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                ></textarea>
                <button
                  onClick={() => alert('Message sent! We will get back to you soon.')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">
              <span className="text-white">Clutch</span>
              <span className="text-purple-500">Coders</span>
            </div>
            <div className="text-gray-400 text-center md:text-left">
              © 2024 Clutch Coders. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Home;