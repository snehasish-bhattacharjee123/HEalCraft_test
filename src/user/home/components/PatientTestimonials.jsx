import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Testimonials data
  const testimonials = [
    {
      name: "Rajiv Sharma",
      condition: "Heart Surgery",
      doctor: "Dr. Priya Sharma",
      image: "https://via.placeholder.com/150x150?text=Patient1",
      quote: "The care I received at CMRI was exceptional. Dr. Sharma's expertise and the staff's attention made my recovery smooth."
    },
    {
      name: "Anita Desai",
      condition: "Joint Replacement",
      doctor: "Dr. Rajesh Kumar",
      image: "https://via.placeholder.com/150x150?text=Patient2",
      quote: "After years of pain, I can finally walk without discomfort. The surgical team was professional and caring throughout."
    },
    {
      name: "Rahul Khanna",
      condition: "Respiratory Treatment",
      doctor: "Dr. Vikram Singh",
      image: "https://via.placeholder.com/150x150?text=Patient3",
      quote: "The pulmonology department at CMRI provided excellent care for my chronic condition. I'm breathing better than I have in years."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">PATIENT TESTIMONIALS</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hear from our patients about their experiences and successful treatments at CMRI.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <svg className="h-8 w-8 text-red-600 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                        </div>
                        <p className="text-gray-600 italic text-lg mb-6">{testimonial.quote}</p>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.condition}</p>
                          <p className="text-red-600">Patient of {testimonial.doctor}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 focus:outline-none z-10 hover:bg-gray-100"
            onClick={prevSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 focus:outline-none z-10 hover:bg-gray-100"
            onClick={nextSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-red-600 scale-125' : 'bg-gray-300'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/testimonials" 
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
          >
            View All Testimonials
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
