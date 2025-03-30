import React from 'react';
import { Link } from 'react-router-dom';

const CoreSpecialties = () => {
  // Specialties data
  const specialties = [
    {
      name: "Orthopedics & Joint Replacement",
      icon: "medical_services",
      link: "/services/orthopedics"
    },
    {
      name: "Pulmonology",
      icon: "air",
      link: "/services/pulmonology"
    },
    {
      name: "General Surgery",
      icon: "healing",
      link: "/services/general-surgery"
    },
    {
      name: "ENT - Otolaryngology",
      icon: "hearing",
      link: "/services/ent"
    },
    {
      name: "Plastic & Cosmetic Surgery",
      icon: "face",
      link: "/services/plastic-surgery"
    },
    {
      name: "Critical Care Medicine",
      icon: "monitor_heart",
      link: "/services/critical-care"
    }
  ];

  // Material Icons mapping to SVG icons
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'medical_services':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14h6m-3-3v6" />
          </svg>
        );
      case 'air':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
          </svg>
        );
      case 'healing':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        );
      case 'hearing':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        );
      case 'face':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'monitor_heart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Specialties</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive healthcare services across multiple specialties to provide you with the best medical care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className="bg-[#eae6e5] rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl "
            >
              <div className="text-red-600 mb-4 flex justify-center">
                {getIcon(specialty.icon)}
              </div>
              <h3 className="text-base font-semibold text-gray-600 mb-3">{specialty.name}</h3>
              {/* <Link 
                to={specialty.link} 
                className="inline-block text-red-600 hover:text-red-700 font-medium text-sm"
              >
                Learn More
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSpecialties;
