import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Zap, 
  Award, 
  TrendingUp, 
  Heart,
  Shield,
  Lightbulb,
  Globe,
  Clock
} from "lucide-react";

export const BusinessSection = () => {
  const businessValues = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description: "Every strategy is built to deliver measurable ROI and real business growth.",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We become an extension of your team.",
      gradient: "from-green-600 to-blue-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation-Led",
      description: "We stay ahead of trends and use cutting-edge technologies to win.",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Transparency",
      description: "Complete transparency in our processes, pricing, and performance.",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const businessStats = [
    {
      icon: <Globe className="h-6 w-6" />,
      number: "Global",
      label: "Remote Team",
      description: "Talent from around the world"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      number: "24/7",
      label: "Support",
      description: "Always here when you need us"
    },
    {
      icon: <Award className="h-6 w-6" />,
      number: "5+",
      label: "Years Experience",
      description: "Proven track record"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      number: "98%",
      label: "Client Retention",
      description: "Long-term partnerships"
    }
  ];

  const whyChooseUs = [
    {
      title: "End-to-End Expertise",
      description: "From developers to marketers, we have all the skills under one roof.",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Whether you're a startup or enterprise, we scale with your needs.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Data-Driven Decisions",
      description: "Every recommendation is backed by data and proven methodologies.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Rapid Implementation",
      description: "Fast execution without compromising quality or attention to detail.",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <div className="bg-white py-20 border-t border-gray-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-cyan-500/10 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-2 border border-gray-300 mb-8 bg-white/80 backdrop-blur-sm rounded-full">
              <span className="text-gray-600 text-sm font-light tracking-widest uppercase">
                Our Business
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-light text-black mb-8 tracking-tight">
              BUILT FOR
              <span className="block font-normal italic bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                your success
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              We're not just another agency. We're your growth partners, committed to delivering 
              exceptional results through innovation, expertise, and unwavering dedication.
            </p>
          </motion.div>
        </div>

        {/* Business Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {businessValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-100 border border-gray-200 p-8 rounded-2xl hover:bg-gray-200 transition-all duration-300 group-hover:scale-105 h-full">
                <div className={`inline-flex p-4 bg-gradient-to-r ${value.gradient} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-light text-black mb-4 tracking-wide uppercase">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-black mb-6 tracking-tight uppercase">
              Why Choose GROWTHPULSE
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              We combine technical expertise with marketing excellence to deliver unmatched results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-gray-100 border border-gray-200 rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-light text-black mb-2 tracking-wide uppercase">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Business Stats */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-100 border border-gray-200 p-12 rounded-2xl"
          >
            <h3 className="text-2xl font-light text-black mb-8 tracking-tight uppercase">
              Our Commitment to Excellence
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {businessStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex p-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-light text-black mb-2 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-light tracking-wide uppercase mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-500 text-xs font-light">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-600 font-light text-lg max-w-3xl mx-auto leading-relaxed">
                "We believe in building long-term partnerships, not just completing projects. 
                Your growth is our mission, and we're committed to being the catalyst for your success."
              </p>
              <div className="flex items-center justify-center mt-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  GP
                </div>
                <div className="text-left">
                  <div className="font-medium text-black text-sm tracking-wide">GROWTHPULSE TEAM</div>
                  <div className="text-gray-600 text-sm font-light">Your Growth Partners</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 p-16 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-light mb-6 tracking-tight text-white">
                READY TO PARTNER WITH US?
              </h3>
              <p className="text-xl mb-12 font-light text-white/90">
                Let's build something extraordinary together. Your success story starts here.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 font-medium text-sm tracking-wide hover:bg-gray-200 transition-all duration-300 rounded-lg"
              >
                START YOUR JOURNEY
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};