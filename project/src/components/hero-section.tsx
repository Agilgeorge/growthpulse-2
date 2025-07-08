import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Zap, Target, Star } from "lucide-react";
import Lottie from "lottie-react";
import gphero1 from "./assets/gphero1.json";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #000000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-2xl font-light text-black tracking-wide">GROWTHPULSE</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          <a href="#services" className="text-gray-700 hover:text-black transition-colors text-sm tracking-wide">SERVICES</a>
          <a href="#about" className="text-gray-700 hover:text-black transition-colors text-sm tracking-wide">ABOUT</a>
          <a href="#case-studies" className="text-gray-700 hover:text-black transition-colors text-sm tracking-wide">WORK</a>
          <a href="#business" className="text-gray-700 hover:text-black transition-colors text-sm tracking-wide">BUSINESS</a>
          <a href="#contact" className="text-gray-700 hover:text-black transition-colors text-sm tracking-wide">CONTACT</a>
        </div>

        <button className="bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors tracking-wide">
          GET STARTED
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm tracking-wide">
                  TRUSTED BY 500+ COMPANIES
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl lg:text-8xl font-light text-black mb-6 leading-[0.9] tracking-tight">
  We Are  
  <span className="block font-normal italic text-gray-700">
    Your Growth Partner
  </span>
</h1>


              {/* Subheadline */}
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl font-normal">
               From launch to pipeline, from product to profit — we turn software into scalable businesses through data-led marketing.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <button
  onClick={() => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="group bg-black text-white px-8 py-4 font-medium text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
>
  START YOUR GROWTH JOURNEY
  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
</button>
                
                <button className="flex items-center justify-center space-x-3 text-black hover:text-gray-700 transition-colors">
                  <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:border-black transition-colors">
                    <Play className="h-4 w-4 ml-1" />
                  </div>
                  <span className="font-light tracking-wide">WATCH OUR STORY</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-12">
                <div>
                  <div className="text-3xl font-light text-black mb-2">500+</div>
                  <div className="text-gray-500 text-sm tracking-wide uppercase">Clients Grown</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-black mb-2">$2.5B+</div>
                  <div className="text-gray-500 text-sm tracking-wide uppercase">Revenue Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-black mb-2">300%</div>
                  <div className="text-gray-500 text-sm tracking-wide uppercase">Avg ROI Increase</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Hero Image (replaced with Lottie) */}
              <div className="relative">
                <Lottie 
                  animationData={gphero1}
                  loop
                  className="w-full h-[600px] "
                />
                
                {/* Overlay Stats Card */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm border border-gray-200 p-6 max-w-xs">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="h-5 w-5 text-black" />
                    <span className="text-black font-medium text-sm tracking-wide">LIVE RESULTS</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Conversion Rate</span>
                      <span className="text-black font-medium">+127%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-black h-1 w-4/5"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Revenue Growth</span>
                      <span className="text-black font-medium">+89%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1">
                      <div className="bg-black h-1 w-3/4"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 font-medium text-sm tracking-wide"
                >
                  #1 GROWTH AGENCY
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    
    </div>
  );
};