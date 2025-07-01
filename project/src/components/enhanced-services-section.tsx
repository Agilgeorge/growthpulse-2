import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Code,
  MousePointer,
  Search,
  BarChart3,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export const EnhancedServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "AI/Data Engineering",
      icon: <Database className="h-8 w-8" />,
      description:
        "Unlock the full power of Databricks and lakehouse architecture with real-time data pipelines and ML model deployment.",
      features: [
        "Real-time & batch data pipelines (Auto Loader, Spark, Delta Lake)",
        "Lakehouse architecture (Bronze, Silver, Gold layers)",
        "Power BI, Tableau, ThoughtSpot integration",
        "ML model development & MLOps (MLflow, PySpark, AutoML)",
        "Data governance (Unity Catalog, RBAC, encryption)",
        "CI/CD, cloud-native DevOps (Terraform, GitHub, Jenkins)"
      ],
      results: "+300% Data Processing Efficiency",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      title: "Full-Stack Development",
      icon: <Code className="h-8 w-8" />,
      description:
        "From prototypes to production-ready applications, we build custom web & mobile apps with cloud infrastructure.",
      features: [
        "Custom Web & Mobile Applications",
        "Cloud Infrastructure & DevOps (Azure, AWS)",
        "API Integration & Automation",
        "AI/ML Implementation",
        "MVP Prototyping & Rapid Deployment",
        "Scalable Architecture Design"
      ],
      results: "+250% Development Speed",
      image:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-green-600 to-blue-600"
    },
    {
      title: "PPC & Paid Media",
      icon: <MousePointer className="h-8 w-8" />,
      description:
        "Drive qualified traffic and maximize ROI with data-driven paid advertising campaigns across all platforms.",
      features: [
        "Google Ads Management",
        "Facebook & Instagram Ads",
        "LinkedIn Advertising",
        "YouTube Advertising",
        "Shopping Campaigns",
        "Conversion Tracking & Attribution"
      ],
      results: "+127% Average ROAS Increase",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "SEO & Content Marketing",
      icon: <Search className="h-8 w-8" />,
      description:
        "Dominate search results and build authority with strategic SEO and content marketing that drives organic growth.",
      features: [
        "Technical SEO Audits",
        "Keyword Research & Strategy",
        "Content Strategy & Creation",
        "Link Building Campaigns",
        "Local SEO Optimization",
        "SEO Analytics & Reporting"
      ],
      results: "+89% Organic Traffic Growth",
      image:
        "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Analytics & CRO",
      icon: <BarChart3 className="h-8 w-8" />,
      description:
        "Turn data into decisions with advanced analytics and conversion optimization that maximizes your ROI.",
      features: [
        "GA4 Setup & Advanced Tracking",
        "Conversion Funnel Analysis",
        "A/B Testing & Experimentation",
        "Heat Map & User Behavior Analysis",
        "UX Optimization",
        "Performance Reporting & Insights"
      ],
      results: "+156% Conversion Rate Boost",
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Software Marketing",
      icon: <TrendingUp className="h-8 w-8" />,
      description:
        "Turn software into successful products with comprehensive go-to-market strategies and sales enablement.",
      features: [
        "Market Research & GTM Strategy",
        "Brand Messaging & Value Proposition",
        "Product Launch & PR",
        "Demand Generation (SEO, PPC, Events)",
        "Sales Enablement & CRM Setup",
        "Customer Retention & Loyalty Programs"
      ],
      results: "+200% Product Adoption Rate",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <div className="bg-white py-20 border-t border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-2 border border-gray-300 mb-8 bg-white/80 backdrop-blur-sm">
              <span className="text-gray-600 text-sm font-light tracking-widest uppercase">
                End-to-End Growth Solutions
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-light text-black mb-8 tracking-tight">
              FROM PRODUCT TO
              <span className="block font-normal italic text-gray-600">
                platform
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              We blend technology, marketing, data, and AI to help organizations scale intelligently. 
              From code to client, we deliver measurable results.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl border-gray-200 border w-auto sm:w-[30rem] h-auto rounded-xl p-6">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg`}>
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-light tracking-wide uppercase text-black">{service.title}</h3>
                    </div>
                  </CardItem>

                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2">
                    {service.description}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={service.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={service.title}
                    />
                  </CardItem>

                  <div className="flex justify-between items-center mt-6">
                    <CardItem
                      translateZ={20}
                      className={`px-4 py-2 rounded-xl text-xs font-normal text-white bg-gradient-to-r ${service.gradient}`}
                    >
                      {service.results}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
                    >
                      Learn More
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 opacity-20">
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <motion.div
            animate={{ y: [20, -20, 20], x: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg rotate-45"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-16 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-light mb-6 tracking-tight">
                READY TO ACCELERATE YOUR GROWTH?
              </h3>
              <p className="text-xl mb-12 font-light text-gray-300">
                From data to decisions. From launch to loyalty. Let's build something remarkable.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 font-medium text-sm tracking-wide hover:bg-gray-200 transition-all duration-300 rounded-lg"
              >
                START YOUR TRANSFORMATION
              </motion.button>
            </div>
          </motion.div> {/* ✅ Corrected closing tag */}
        </div>
      </div>
    </div>
  );
};
