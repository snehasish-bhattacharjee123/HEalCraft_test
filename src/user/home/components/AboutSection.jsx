import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side - Hospital Image */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://ckbirlahospitals.com/_next/image?url=https%3A%2F%2Fckbh.ckbirlahospitals.com%2Fstorage%2Fcmri%2Fuploadedfiles%2Fassets%2Fabout-us.jpg&w=640&q=75" 
                alt="CMRI Hospital Building" 
                className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 relative">
              Why Choose CMRI?
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-red-600 -mb-2"></span>
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              CK Birla Hospitals CMRI is a leading multi-specialty hospital known for its excellence in patient care, 
              cutting-edge technology, and world-class medical expertise. With over 50 years of trusted healthcare 
              experience, we provide comprehensive medical services across various specialties.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our state-of-the-art facilities, combined with our team of experienced doctors and healthcare professionals, 
              ensure that patients receive the highest quality of care. We are committed to delivering personalized 
              treatment plans that address each patient's unique needs.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Experienced Doctors</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Advanced Technology</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Patient-Centered Care</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Affordable Treatments</span>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
            >
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
