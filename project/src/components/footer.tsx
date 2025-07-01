import React from "react";
import { Zap, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, Database, Code, TrendingUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white text-black py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-black flex items-center justify-center">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-light tracking-wide">GROWTHPULSE</span>
            </div>
            
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed font-light">
              From product to platform. From data to decisions. From launch to loyalty. 
              We create growth engines that scale your business through intelligent technology and strategic marketing.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-100 border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 group">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-gray-100 border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 group">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-gray-100 border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 group">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-gray-100 border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 group">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-light mb-8 tracking-wide uppercase">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light flex items-center"><Database className="h-4 w-4 mr-2" />AI/Data Engineering</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light flex items-center"><Code className="h-4 w-4 mr-2" />Full-Stack Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light flex items-center"><TrendingUp className="h-4 w-4 mr-2" />Digital Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Software Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Analytics & CRO</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Growth Strategy</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-light mb-8 tracking-wide uppercase">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-600 hover:text-black transition-colors font-light">About Us</a></li>
              <li><a href="#case-studies" className="text-gray-600 hover:text-black transition-colors font-light">Case Studies</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-black transition-colors font-light">Testimonials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors font-light">Blog</a></li>
            </ul>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-black" />
              <span className="text-gray-600 font-light">hello@growthpulse.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-black" />
              <span className="text-gray-600 font-light">+1 (555) 123-GROW</span>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0 font-light">
            © 2025 GROWTHPULSE. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm font-light">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm font-light">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm font-light">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};