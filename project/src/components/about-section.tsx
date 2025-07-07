import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Zap, Award, TrendingUp, Heart, Database, Code } from "lucide-react";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { BackgroundGradient } from "./ui/background-gradient";
import { HoverEffect } from "./ui/card-hover-effect";
import clientwork from "./assets/clientwork.svg"; // Ensure this path is correct

export const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "$2.5B+", label: "Revenue Generated", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "300%", label: "Average ROI", icon: <Target className="h-6 w-6" /> },
    { number: "98%", label: "Client Retention", icon: <Heart className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Results-Driven",
      description: "Every campaign and solution is built to deliver measurable ROI and real business growth."
    },
    {
      icon: <Target className="h-8 w-8 text-cyan-600" />,
      title: "Data-Obsessed",
      description: "We let the numbers guide our decisions, not gut feelings or vanity metrics."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "End-to-End Expertise",
      description: "From code to client - developers, engineers, strategists, and marketers all in one team."
    },
    {
      icon: <Award className="h-8 w-8 text-pink-600" />,
      title: "Innovation-Led",
      description: "We stay ahead of trends and use cutting-edge technologies to win."
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
       

        {/* Main Content with Enhanced Design */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-normal text-black mb-8 tracking-tight">
              Our Mission: Accelerate Digital Business Evolution
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-normal">
              Founded to bridge the gap between innovation and measurable growth, we bring together 
              cross-functional expertise in software Marketing , digital marketing , Marketing Consultancy 
              and go-to-market execution.
            </p>

            <p className="text-lg text-gray-600 mb-12 leading-relaxed font-normal">
              We don't just run campaigns or build apps—we create comprehensive growth engines that 
              scale your business through intelligent software, strategic marketing, and transformative technologies.
            </p>

            <BackgroundGradient className="rounded-xl p-1">
              <div className="bg-white p-8 rounded-xl">
                <h4 className="text-xl font-bold text-black mb-4 tracking-wide uppercase">Our Promise</h4>
                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                 From product to platform. From launch to leads.
We build marketing engines that drive revenue and scale.
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
                    src={clientwork}
                    alt="Team collaboration" 
                    className="w-full h-64 object-cover rounded-lg group-hover/card:shadow-xl"
                  />
                </CardItem>
                
                <CardItem
                  translateZ="60"
                  className="text-xl font-bold text-black mb-6 tracking-wide uppercase"
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
                      <span className="text-gray-700 font-medium">{item}</span>
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

        

        {/* Values with Hover Effect */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-6 tracking-tight uppercase">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal">
              The principles that drive everything we do and deliver for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 0 }}
                whileHover={{ y: -16 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer group hover:shadow-xl"
              >
                <div className="mb-4 ">{value.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-black">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        
      </div>
    </div>
  );
};