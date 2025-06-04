import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      title: "Lahore Food Festival",
      description: "Experience the rich culinary heritage of Pakistan",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&h=1000&auto=format&fit=crop"
    },
    {
      title: "Karachi Tech Summit",
      description: "Pakistan's largest technology conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&h=1000&auto=format&fit=crop"
    },
    {
      title: "Basant Festival",
      description: "Celebrate spring with kite flying and cultural performances",
      image: "https://images.unsplash.com/photo-1614851099511-773084f6911d?q=80&w=800&h=1000&auto=format&fit=crop"
    },
    {
      title: "Traditional Weddings",
      description: "Discover the finest wedding vendors and services",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&h=1000&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&h=1000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">Pakistan's Premier Event Platform</span>
            </div>
            
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 opacity-0 animate-fade-in leading-tight"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Celebrate Life's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Special Moments</span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl opacity-0 animate-fade-in leading-relaxed"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              From traditional weddings to modern corporate events, we bring your vision to life with authentic Pakistani hospitality and world-class service.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
            >
              <a 
                href="#events" 
                className="btn btn-secondary group/btn inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-200"
              >
                Explore Events
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-full border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Enhanced Card Stack Animation with Precise Sizing */}
          <div className="relative w-[400px] h-[600px] hidden lg:block perspective-1000 mx-auto">
            {images.map((image, index) => {
              const isCurrent = index === currentImageIndex;
              const isPrevious = index === (currentImageIndex - 1 + images.length) % images.length;
              const isNext = index === (currentImageIndex + 1) % images.length;
              
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 transform-gpu ${
                    isCurrent
                      ? 'opacity-100 translate-x-0 translate-z-0 rotate-y-0 z-20'
                      : isPrevious
                      ? 'opacity-70 -translate-x-8 -translate-z-20 rotate-y-5 z-10'
                      : isNext
                      ? 'opacity-70 translate-x-8 -translate-z-20 -rotate-y-5 z-10'
                      : 'opacity-0 translate-x-0 translate-z-0 rotate-y-0 z-0'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    width: '400px',
                    height: '600px'
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transform-gpu hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      style={{
                        aspectRatio: '2/3',
                        objectPosition: 'center'
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                      <p className="text-gray-300">{image.description}</p>
                    </div>
                    {/* Card Stack Effect Elements */}
                    <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
                    <div className="absolute -bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full blur-sm"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;