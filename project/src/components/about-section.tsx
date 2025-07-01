import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Zap, Award, TrendingUp, Heart, Database, Code } from "lucide-react";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { BackgroundGradient } from "./ui/background-gradient";
import { HoverEffect } from "./ui/card-hover-effect";

export const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "$2.5B+", label: "Revenue Generated", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "300%", label: "Average ROI", icon: <Target className="h-6 w-6" /> },
    { number: "98%", label: "Client Retention", icon: <Heart className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Results-Driven",
      description: "Every campaign and solution is built to deliver measurable ROI and real business growth."
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Data-Obsessed",
      description: "We let the numbers guide our decisions, not gut feelings or vanity metrics."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "End-to-End Expertise",
      description: "From code to client - developers, engineers, strategists, and marketers all in one team."
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Innovation-Led",
      description: "We stay ahead of trends and use cutting-edge technologies to win."
    }
  ];

  const processSteps = [
    { 
      step: "01", 
      title: "Discover", 
      desc: "Audit business, data maturity, and customer journey",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      step: "02", 
      title: "Design", 
      desc: "Build growth architecture across tech & marketing",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      step: "03", 
      title: "Deliver", 
      desc: "Deploy campaigns, solutions, and systems",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      step: "04", 
      title: "Optimize", 
      desc: "Improve with data, testing, and automation",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    { 
      step: "05", 
      title: "Scale", 
      desc: "Expand into new markets, platforms, and revenue channels",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="bg-white py-20 border-t border-gray-200 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/5 rounded-full filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BackgroundGradient className="rounded-full p-1 mb-8">
              <div className="bg-white px-6 py-2 rounded-full">
                <span className="text-gray-600 text-sm font-light tracking-widest uppercase">
                  About GROWTHPULSE
                </span>
              </div>
            </BackgroundGradient>
            
            <h2 className="text-5xl lg:text-7xl font-light text-black mb-8 tracking-tight">
              WE'RE YOUR
              <span className="block font-normal italic bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                growth partner
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              We specialize in blending technology, marketing, data, and artificial intelligence 
              to help organizations scale intelligently and achieve breakthrough growth.
            </p>
          </motion.div>
        </div>

        {/* 3D Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl border-gray-200 border w-auto sm:w-[20rem] h-auto rounded-xl p-6">
                  <CardItem
                    translateZ="50"
                    className="text-center"
                  >
                    <div className="inline-flex p-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white mb-6 rounded-lg">
                      {stat.icon}
                    </div>
                  </CardItem>
                  
                  <CardItem
                    translateZ="60"
                    className="text-4xl font-light text-black mb-3 text-center"
                  >
                    {stat.number}
                  </CardItem>
                  
                  <CardItem
                    translateZ="40"
                    className="text-gray-600 font-light text-sm tracking-wide uppercase text-center"
                  >
                    {stat.label}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* Main Content with Enhanced Design */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-light text-black mb-8 tracking-tight">
              Our Mission: Accelerate Digital Business Evolution
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
              Founded to bridge the gap between innovation and measurable growth, we bring together 
              cross-functional expertise in software development, AI/data engineering, digital marketing, 
              and go-to-market execution.
            </p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
              We don't just run campaigns or build apps—we create comprehensive growth engines that 
              scale your business through intelligent software, strategic marketing, and transformative technologies.
            </p>

            <BackgroundGradient className="rounded-xl p-1">
              <div className="bg-white p-8 rounded-xl">
                <h4 className="text-xl font-light text-black mb-4 tracking-wide uppercase">Our Promise</h4>
                <p className="text-gray-700 font-light leading-relaxed mb-6">
                  "From product to platform. From data to decisions. From launch to loyalty. 
                  We deliver scalable solutions backed by data, focused on ROI."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 text-white flex items-center justify-center font-bold mr-4 rounded-lg">
                    GP
                  </div>
                  <div>
                    <div className="font-medium text-black text-sm tracking-wide">GROWTHPULSE TEAM</div>
                    <div className="text-gray-600 text-sm font-light">Growth Partners & Innovation Leaders</div>
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl border-gray-200 border w-auto sm:w-[35rem] h-auto rounded-xl p-8">
                <CardItem translateZ="100" className="w-full mb-8">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Team collaboration" 
                    className="w-full h-64 object-cover rounded-lg group-hover/card:shadow-xl"
                  />
                </CardItem>
                
                <CardItem
                  translateZ="60"
                  className="text-xl font-light text-black mb-6 tracking-wide uppercase"
                >
                  Why Clients Choose Us
                </CardItem>
                
                <div className="space-y-4">
                  {[
                    "Cross-functional expertise - developers to marketers",
                    "Scalable delivery from startup MVPs to enterprise systems",
                    "Everything backed by data, focused on ROI",
                    "End-to-end solutions from code to client"
                  ].map((item, index) => (
                    <CardItem
                      key={index}
                      translateZ={40 + index * 10}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full"></div>
                      <span className="text-gray-700 font-light">{item}</span>
                    </CardItem>
                  ))}
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-4 rounded-lg"
                >
                  <Database className="h-6 w-6" />
                </motion.div>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>

        {/* Growth Process with Direction-Aware Hover */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-black mb-6 tracking-tight uppercase">Our Growth Process</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              A proven methodology that delivers results across technology and marketing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <DirectionAwareHover
                  imageUrl={process.image}
                  className="bg-gray-100 border border-gray-200 p-6 hover:bg-gray-200 transition-colors h-80 rounded-2xl"
                  overlayClassName="bg-gradient-to-br from-purple-600/90 to-cyan-600/90"
                >
                  <div className="text-center text-white">
                    <div className="text-4xl font-light mb-4 bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                      {process.step}
                    </div>
                    <h4 className="text-xl font-light mb-4 tracking-wide uppercase">{process.title}</h4>
                    <p className="text-white/90 font-light text-sm leading-relaxed">{process.desc}</p>
                  </div>
                </DirectionAwareHover>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values with Hover Effect */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-black mb-6 tracking-tight uppercase">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              The principles that drive everything we do and deliver for our clients.
            </p>
          </div>
          
          <HoverEffect items={values} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4" />
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <BackgroundGradient className="rounded-2xl p-1">
              <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-16 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20"></div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-light mb-6 tracking-tight">
                    READY TO TRANSFORM YOUR BUSINESS?
                  </h3>
                  <p className="text-xl mb-12 font-light text-gray-300">
                    Let's create a growth engine that scales your business through intelligent technology and strategic marketing.
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 font-medium text-sm tracking-wide hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 rounded-lg"
                  >
                    START YOUR GROWTH JOURNEY
                  </motion.button>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </div>
  );
};