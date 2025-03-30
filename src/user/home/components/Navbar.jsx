import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isSticky }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPatientsOpen, setIsPatientsOpen] = useState(false);
  const [isVaccinationOpen, setIsVaccinationOpen] = useState(false);
  const [isInternationalOpen, setIsInternationalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (setter) => {
    setter(prev => !prev);
  };

  return (
    <header className={`w-full transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 z-50 bg-white shadow-md' : ''}`}>
      {/* Top Bar */}
      <div className="bg-[#eae6e5] py-2">
        <div className="container mx-auto px-4 flex justify-end items-center ">
          <a href="#hom" className="text-sm mr-4 flex items-center font-bold text-black/80">
          <i class="fa-solid fa-house text-red-500 text-1xl pr-2"></i>
            Home
          </a>
          <a href="tel:+918062136598" className="text-sm text-red-600 font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
            Emergency: 8062136598
          </a>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl font-bold text-red-700">CK Birla Hospitals CMRI</h1>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6">
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => toggleDropdown(setIsServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isServicesOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link to="/services/cardiology" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Cardiology</Link>
                <Link to="/services/orthopedics" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Orthopedics</Link>
                <Link to="/services/neurology" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Neurology</Link>
                <Link to="/services/oncology" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Oncology</Link>
              </div>
            )}
          </div>
          
          {/* Patients & Visitors Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => toggleDropdown(setIsPatientsOpen)}
              onMouseEnter={() => setIsPatientsOpen(true)}
              onMouseLeave={() => setIsPatientsOpen(false)}
            >
              Patients & Visitors
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isPatientsOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                onMouseEnter={() => setIsPatientsOpen(true)}
                onMouseLeave={() => setIsPatientsOpen(false)}
              >
                <Link to="/patients/admission" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Admission Process</Link>
                <Link to="/patients/insurance" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Insurance</Link>
                <Link to="/patients/visiting-hours" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Visiting Hours</Link>
              </div>
            )}
          </div>
          
          {/* Vaccination & Immunization Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => toggleDropdown(setIsVaccinationOpen)}
              onMouseEnter={() => setIsVaccinationOpen(true)}
              onMouseLeave={() => setIsVaccinationOpen(false)}
            >
              Vaccination & Immunization
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isVaccinationOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                onMouseEnter={() => setIsVaccinationOpen(true)}
                onMouseLeave={() => setIsVaccinationOpen(false)}
              >
                <Link to="/vaccination/schedule" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Vaccination Schedule</Link>
                <Link to="/vaccination/types" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Types of Vaccines</Link>
                <Link to="/vaccination/book" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Book Vaccination</Link>
              </div>
            )}
          </div>
          
          {/* International Patients Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => toggleDropdown(setIsInternationalOpen)}
              onMouseEnter={() => setIsInternationalOpen(true)}
              onMouseLeave={() => setIsInternationalOpen(false)}
            >
              International Patients
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isInternationalOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                onMouseEnter={() => setIsInternationalOpen(true)}
                onMouseLeave={() => setIsInternationalOpen(false)}
              >
                <Link to="/international/services" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Services</Link>
                <Link to="/international/accommodation" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Accommodation</Link>
                <Link to="/international/visa-assistance" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Visa Assistance</Link>
              </div>
            )}
          </div>
          
          {/* About Us Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-gray-800 hover:text-red-600 transition-colors"
              onClick={() => toggleDropdown(setIsAboutOpen)}
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              About Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isAboutOpen && (
              <div 
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <Link to="/about/history" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Our History</Link>
                <Link to="/about/leadership" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Leadership</Link>
                <Link to="/about/awards" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">Awards & Recognition</Link>
              </div>
            )}
          </div>
        </nav>
        
        <Link to="/appointment" className="hidden lg:inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
          Book Appointment
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gray-700 hover:text-red-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="space-y-1">
              <button 
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded flex justify-between items-center"
                onClick={() => toggleDropdown(setIsServicesOpen)}
              >
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isServicesOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="pl-6 space-y-1">
                  <Link to="/services/cardiology" className="block px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded">Cardiology</Link>
                  <Link to="/services/orthopedics" className="block px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded">Orthopedics</Link>
                  <Link to="/services/neurology" className="block px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded">Neurology</Link>
                  <Link to="/services/oncology" className="block px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded">Oncology</Link>
                </div>
              )}
              
              {/* Other mobile dropdowns follow the same pattern */}
              <button 
                className="w-full text-left px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded flex justify-between items-center"
                onClick={() => toggleDropdown(setIsPatientsOpen)}
              >
                Patients & Visitors
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isPatientsOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isPatientsOpen && (
                <div className="pl-6 space-y-1">
                  <Link to="/patients/admission" className="block px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded">Admission Process</Link>
                  <Link to="/patients/insurance" className="block px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded">Insurance</Link>
                  <Link to="/patients/visiting-hours" className="block px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded">Visiting Hours</Link>
                </div>
              )}
              
              {/* Add the rest of the mobile menu items */}
              
              <Link to="/appointment" className="block mt-4 text-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
