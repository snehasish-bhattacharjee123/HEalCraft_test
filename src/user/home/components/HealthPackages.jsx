import React from 'react';
import { Link } from 'react-router-dom';

const HealthPackages = () => {
  // Health packages data
  const packages = [
    {
      name: "Prostate Screening",
      description: "Comprehensive screening for prostate health",
      image: "https://via.placeholder.com/400x250?text=Prostate+Screening",
      link: "/health-packages/prostate"
    },
    {
      name: "Renal Package",
      description: "Complete kidney health assessment",
      image: "https://via.placeholder.com/400x250?text=Renal+Package",
      link: "/health-packages/renal"
    },
    {
      name: "Women's Health Package",
      description: "Specialized care for women's wellness",
      image: "https://via.placeholder.com/400x250?text=Women's+Health",
      link: "/health-packages/womens-health"
    },
    {
      name: "Gastro Package",
      description: "Digestive system health check",
      image: "https://via.placeholder.com/400x250?text=Gastro+Package",
      link: "/health-packages/gastro"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Health Packages</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Preventive healthcare packages designed to keep you and your family healthy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <Link 
                    to={pkg.link} 
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <Link 
                  to={pkg.link} 
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  Know More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/health-packages" 
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
          >
            View All Packages
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthPackages;
