import React from "react";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  DollarSign, 
  Heart, 
  Factory, 
  GraduationCap, 
  Home, 
  Briefcase, 
  Package 
} from "lucide-react";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export const IndustriesSection = () => {
  const industries = [
    { 
      name: "Retail & E-Commerce", 
      icon: <ShoppingCart className="h-8 w-8" />,
      description: "Drive online sales with data-driven marketing and seamless customer experiences",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-600 to-purple-600",
      stats: "300% avg revenue increase"
    },
    { 
      name: "Finance & FinTech", 
      icon: <DollarSign className="h-8 w-8" />,
      description: "Secure, compliant solutions that scale financial services and build trust",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-green-600 to-blue-600",
      stats: "245% lead generation boost"
    },
    { 
      name: "Healthcare & Life Sciences", 
      icon: <Heart className="h-8 w-8" />,
      description: "HIPAA-compliant platforms that improve patient outcomes and operational efficiency",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-red-600 to-pink-600",
      stats: "180% patient engagement"
    },
    { 
      name: "Manufacturing", 
      icon: <Factory className="h-8 w-8" />,
      description: "IoT integration and supply chain optimization for Industry 4.0 transformation",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-orange-600 to-red-600",
      stats: "150% operational efficiency"
    },
    { 
      name: "EdTech & SaaS", 
      icon: <GraduationCap className="h-8 w-8" />,
      description: "Scalable learning platforms and SaaS solutions that drive user adoption",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-600 to-indigo-600",
      stats: "400% user growth"
    },
    { 
      name: "Real Estate", 
      icon: <Home className="h-8 w-8" />,
      description: "Digital transformation for property management and real estate marketing",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-teal-600 to-green-600",
      stats: "220% lead conversion"
    },
    { 
      name: "Professional Services", 
      icon: <Briefcase className="h-8 w-8" />,
      description: "Streamlined operations and client management for service-based businesses",
      image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-indigo-600 to-purple-600",
      stats: "190% client retention"
    },
    { 
      name: "D2C Brands", 
      icon: <Package className="h-8 w-8" />,
      description: "End-to-end brand building from product launch to customer loyalty",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-pink-600 to-rose-600",
      stats: "350% brand awareness"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>

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
                Industries We Transform
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-light text-black mb-8 tracking-tight">
              TRUSTED ACROSS
              <span className="block font-normal italic bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                every sector
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              From startups to Fortune 500 companies, we deliver industry-specific solutions 
              that drive measurable growth and digital transformation.
            </p>
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <DirectionAwareHover
                imageUrl={industry.image}
                className="h-80 rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500"
                overlayClassName={`bg-gradient-to-br ${industry.gradient}/95`}
              >
                <div className="text-center text-white p-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 inline-flex mb-6">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-light mb-4 tracking-wide uppercase">
                    {industry.name}
                  </h3>
                  <p className="text-white/90 font-light text-sm leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                    <span className="text-white font-medium text-sm">
                      {industry.stats}
                    </span>
                  </div>
                </div>
              </DirectionAwareHover>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 p-12 rounded-2xl"
          >
            <h3 className="text-3xl font-light text-black mb-8 tracking-tight uppercase">
              Cross-Industry Impact
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "8+", label: "Industries Served" },
                { number: "500+", label: "Companies Transformed" },
                { number: "$2.5B+", label: "Revenue Generated" },
                { number: "98%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-light text-black mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-light tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                "Every industry has unique challenges. Our cross-functional expertise allows us to deliver 
                tailored solutions that drive real business outcomes across diverse sectors."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};