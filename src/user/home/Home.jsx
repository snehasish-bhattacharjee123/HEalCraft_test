import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import QuickAccess from './components/QuickAccess';
import AboutSection from './components/AboutSection';
import CoreSpecialties from './components/CoreSpecialties';
import DoctorsSection from './components/DoctorsSection';
import TopProcedures from './components/TopProcedures';
import HealthPackages from './components/HealthPackages';
import PatientTestimonials from './components/PatientTestimonials';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="hospital-home">
      {/* Sticky Navbar */}
      <Navbar />
      
      {/* Hero Slider Section */}
      <HeroSlider />
      
      {/* Quick Access Section */}
      <QuickAccess />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Core Specialties Section */}
      <CoreSpecialties />
      
      {/* Doctors Section */}
      <DoctorsSection />
      
      {/* Top Procedures Section */}
      <TopProcedures />
      
      {/* Health Packages Section */}
      {/* <HealthPackages /> */}
      
      {/* Patient Testimonials Section */}
      <PatientTestimonials />
      
      {/* Blog Section */}
      {/* <BlogSection /> */}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
