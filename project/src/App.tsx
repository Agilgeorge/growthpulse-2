import React from 'react';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { EnhancedServicesSection } from './components/enhanced-services-section';
import { EnhancedCaseStudiesSection } from './components/enhanced-case-studies-section';
import { IndustriesSection } from './components/industries-section';
import { EnhancedTestimonialsSection } from './components/enhanced-testimonials-section';
import { BusinessSection } from './components/business-section';
import { ContactSection } from './components/contact-section';
import { Footer } from './components/footer';
import { Chatbot } from './components/chatbot';

function App() {
  return (
    <div className="relative">
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="services">
        <EnhancedServicesSection />
      </section>
      
      <section id="case-studies">
        <EnhancedCaseStudiesSection />
      </section>

      <section id="industries">
        <IndustriesSection />
      </section>

      <section id="testimonials">
        <EnhancedTestimonialsSection />
      </section>

      <section id="business">
        <BusinessSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;