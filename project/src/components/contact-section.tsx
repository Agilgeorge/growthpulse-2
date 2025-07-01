import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle, Database, Code } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    budget: "",
    services: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const budgetOptions = [
    "Under $5K/month",
    "$5K - $15K/month", 
    "$15K - $50K/month",
    "$50K+ /month",
    "Let's discuss"
  ];

  const serviceOptions = [
    "AI/Data Engineering",
    "Full-Stack Development",
    "Digital Marketing",
    "Software Marketing",
    "Complete Growth Solution",
    "Not sure - need consultation"
  ];

  return (
    <div className="bg-white py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-2 border border-gray-300 mb-8">
              <span className="text-gray-600 text-sm font-light tracking-widest uppercase">
                Ready to Grow?
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-light text-black mb-8 tracking-tight">
              LET'S BUILD YOUR
              <span className="block font-normal italic text-gray-600">
                growth engine
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Ready to accelerate your digital transformation? Let's discuss your goals and create 
              a custom growth strategy that delivers measurable results.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-light text-black mb-8 tracking-tight uppercase">Get in Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-black text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium text-sm tracking-wide uppercase">Email Us</h4>
                      <p className="text-gray-600 font-light">hello@growthpulse.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-black text-white">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium text-sm tracking-wide uppercase">Call Us</h4>
                      <p className="text-gray-600 font-light">+1 (555) 123-GROW</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-black text-white">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-black font-medium text-sm tracking-wide uppercase">Location</h4>
                      <p className="text-gray-600 font-light">Global Remote Team</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-100 border border-gray-200 p-8">
                <h4 className="text-black font-light mb-6 text-sm tracking-widest uppercase">Quick Actions</h4>
                <div className="space-y-4">
                  <button className="w-full flex items-center space-x-4 p-4 bg-white border border-gray-200 hover:bg-gray-200 transition-colors text-left">
                    <Calendar className="h-5 w-5 text-black" />
                    <span className="text-black font-light">Book a Free Strategy Call</span>
                  </button>
                  <button className="w-full flex items-center space-x-4 p-4 bg-white border border-gray-200 hover:bg-gray-200 transition-colors text-left">
                    <MessageCircle className="h-5 w-5 text-black" />
                    <span className="text-black font-light">Start Live Chat</span>
                  </button>
                  <button className="w-full flex items-center space-x-4 p-4 bg-white border border-gray-200 hover:bg-gray-200 transition-colors text-left">
                    <Database className="h-5 w-5 text-black" />
                    <span className="text-black font-light">Data & AI Consultation</span>
                  </button>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-gray-100 border border-gray-200 p-8">
                <h4 className="text-black font-light mb-6 text-sm tracking-widest uppercase">Our Promise</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black"></div>
                    <span className="font-light">Free initial consultation & technical audit</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black"></div>
                    <span className="font-light">Custom growth strategy & roadmap</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black"></div>
                    <span className="font-light">Scalable solutions from MVP to enterprise</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black"></div>
                    <span className="font-light">Measurable results within 90 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-100 border border-gray-200 p-12">
              <h3 className="text-3xl font-light text-black mb-8 tracking-tight uppercase">Start Your Growth Journey</h3>
              
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-black font-light mb-3 text-sm tracking-wide uppercase">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black font-light"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-black font-light mb-3 text-sm tracking-wide uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black font-light"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-black font-light mb-3 text-sm tracking-wide uppercase">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black font-light"
                      placeholder="Company name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-black font-light mb-3 text-sm tracking-wide uppercase">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black font-light"
                      placeholder="https://yoursite.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="services" className="block text-black font-light mb-3 text-sm tracking-wide uppercase">
                      Services Needed
                    </label>
                    <select
                      id="services"
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black focus:outline-none focus:border-black font-light"
                    >
                      <option value="" className="text-gray-900">Select services</option>
                      {serviceOptions.map((option, index) => (
                        <option key={index} value={option} className="text-gray-900">{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-black font-light mb-3 text-sm tracking-wide uppercase">
                      Monthly Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border border-gray-300 text-black focus:outline-none focus:border-black font-light"
                    >
                      <option value="" className="text-gray-900">Select budget range</option>
                      {budgetOptions.map((option, index) => (
                        <option key={index} value={option} className="text-gray-900">{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-black font-light mb-3 text-sm tracking-wide uppercase">
                    Tell us about your goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:border-black resize-none font-light"
                    placeholder="What are your biggest challenges? What growth goals do you want to achieve? Any specific technology or marketing needs?"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white font-medium py-4 px-6 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 text-sm tracking-wide"
                >
                  <span>GET MY FREE GROWTH STRATEGY</span>
                  <Send className="h-4 w-4" />
                </button>
                
                <p className="text-gray-600 text-sm text-center font-light">
                  We'll respond within 24 hours with a custom growth plan and technical recommendations for your business.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};