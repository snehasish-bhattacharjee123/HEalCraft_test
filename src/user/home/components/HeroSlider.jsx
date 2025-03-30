import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero slider data
  const heroSlides = [
    {
      image: "https://ckbirlahospitals.com/_next/image?url=https%3A%2F%2Fckbh.ckbirlahospitals.com%2Fstorage%2Fcmri%2Fuploadedfiles%2Fgallery%2Fbanner%2F1733121748_CMRI-website-banner-1280x363.webp&w=1920&q=75",
      title: "CK Birla Hospital's CMRI wins",
      subtitle: "The Leading Multispeciality Hospital 2024",
      description: "by Times Business Awards"
    },
    {
      image: "https://ckbirlahospitals.com/_next/image?url=https%3A%2F%2Fckbh.ckbirlahospitals.com%2Fstorage%2Fuploads%2Fimages%2Fpage%2Fbanner%2F55-faundation-day-website-1736170612.webp&w=1920&q=75",
      title: "Advanced Healthcare",
      subtitle: "State-of-the-art Medical Facilities",
      description: "Providing exceptional care with cutting-edge technology"
    },
    {
      image: "https://ckbirlahospitals.com/_next/image?url=https%3A%2F%2Fckbh.ckbirlahospitals.com%2Fstorage%2Fcmri%2Fuploadedfiles%2Fgallery%2Fbanner%2F1732543534_Stroke_CMRI-Banner-1280x363.webp&w=1920&q=75",
      title: "Expert Medical Team",
      subtitle: "Experienced Specialists",
      description: "Our team of dedicated professionals committed to your well-being"
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[380px] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-2xl text-white">
              <h1 
                className={`text-4xl md:text-5xl font-bold mb-2 transform transition-all duration-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                {slide.title}
              </h1>
              
              <h2 
                className={`text-2xl md:text-3xl font-semibold mb-4 transform transition-all duration-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                {slide.subtitle}
              </h2>
              
              <p 
                className={`text-lg mb-6 transform transition-all duration-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                {slide.description}
              </p>
              
              <Link 
                to="/about/awards" 
                className={`inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-all duration-700 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '900ms' }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 focus:outline-none"
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 focus:outline-none"
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
