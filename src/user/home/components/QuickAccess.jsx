import React from 'react';
import { Link } from 'react-router-dom';

const QuickAccess = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* Find a Doctor Card */}
          <div className="bg-red-600 text-white shadow-lg overflow-hidden transition-transform hover:transform ">
            <div className="p-2 flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Find a Doctor</h3>
              <p className="mb-6">Search by name, specialty and more...</p>
              {/* <Link to="/find-doctor" className="flex items-center justify-center text-white hover:underline">
                Find Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link> */}
            </div>
          </div>
          
          {/* Health Check-Up Plans Card */}
          <div className="bg-gray-700 text-white shadow-lg overflow-hidden transition-transform hover:transform ">
            <div className="p-2 flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Health Check-Up Plans</h3>
              <p className="mb-6">Personalized & Affordable Health Packages</p>
              {/* <Link to="/health-packages" className="flex items-center justify-center text-white hover:underline">
                View Plans
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link> */}
            </div>
          </div>
          
          {/* Book Appointment Card */}
          <div className="bg-blue-600 text-white shadow-lg overflow-hidden transition-transform hover:transform ">
            <div className="p-2 flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Book Appointment</h3>
              <p className="mb-6">Schedule your visit online</p>
              {/* <Link to="/appointment" className="flex items-center justify-center text-white hover:underline">
                Book Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;