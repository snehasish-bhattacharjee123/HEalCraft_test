import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Footer - Contact & Directions */}
      <div className="bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Emergency Contact */}
            <div className="flex items-start">
              <div className="bg-red-600 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Emergency & Appointment</h3>
                <p className="text-gray-300">8062136595 / 8062136598</p>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="flex items-start">
              <div className="bg-red-600 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">Newsletter</h3>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="flex-1 px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
                  />
                  <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            
            {/* Directions */}
            <div className="flex items-start">
              <div className="bg-red-600 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Get Directions</h3>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition-colors"
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer - Links */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* For Patients */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">For Patients</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/find-doctor" className="text-gray-300 hover:text-white transition-colors">
                    Find a Doctor
                  </Link>
                </li>
                <li>
                  <Link to="/appointment" className="text-gray-300 hover:text-white transition-colors">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link to="/second-opinion" className="text-gray-300 hover:text-white transition-colors">
                    Second Opinion
                  </Link>
                </li>
                <li>
                  <Link to="/insurance" className="text-gray-300 hover:text-white transition-colors">
                    Insurance
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* International Patients */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">International Patients</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/international/plan-visit" className="text-gray-300 hover:text-white transition-colors">
                    Plan Your Visit
                  </Link>
                </li>
                <li>
                  <Link to="/international/services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/international/accommodation" className="text-gray-300 hover:text-white transition-colors">
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link to="/international/visa" className="text-gray-300 hover:text-white transition-colors">
                    Visa Assistance
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Center of Excellence */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Center of Excellence</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/services/orthopedics" className="text-gray-300 hover:text-white transition-colors">
                    Orthopedics
                  </Link>
                </li>
                <li>
                  <Link to="/services/cardiology" className="text-gray-300 hover:text-white transition-colors">
                    Cardiology
                  </Link>
                </li>
                <li>
                  <Link to="/services/neurology" className="text-gray-300 hover:text-white transition-colors">
                    Neurology
                  </Link>
                </li>
                <li>
                  <Link to="/services/surgery" className="text-gray-300 hover:text-white transition-colors">
                    Surgery
                  </Link>
                </li>
                <li>
                  <Link to="/services/oncology" className="text-gray-300 hover:text-white transition-colors">
                    Oncology
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/csr" className="text-gray-300 hover:text-white transition-colors">
                    CSR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer - Legal */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} CK Birla Hospitals. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
