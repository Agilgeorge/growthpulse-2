import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Code,
  MousePointer,
  Search,
  BarChart3,
  TrendingUp
} from "lucide-react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export const EnhancedServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Software Marketing",
      icon: <TrendingUp className="h-8 w-8" />,
      description:
        "Transform your software into a market leader. We craft full-funnel go-to-market strategies that connect your product with the right audience — and convert them into paying users.",
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
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="h-8 w-8" />,
      description:
        "From awareness to acquisition, we manage multi-channel digital marketing strategies that drive results — tailored for your industry and audience.",
      features: [
        "360° Campaign Planning",
        "Meta & Google Ads Management",
        "Email Marketing & Drip Campaigns",
        "Influencer & Affiliate Marketing",
        "Lead Generation Funnels",
        "Campaign Performance Optimization"
      ],
      results: "+175% Engagement Lift",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "PPC & Paid Media",
      icon: <MousePointer className="h-8 w-8" />,
      description:
        "Accelerate customer acquisition with performance-driven advertising. We run paid campaigns across Google, Meta, LinkedIn, and YouTube — optimized to generate qualified leads and scale spend efficiently.",
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
        "We build demand and authority through content that ranks and converts. Our SEO strategies drive organic growth, and our content educates, nurtures, and closes.",
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
      title: "Technical Consulting",
      icon: <Code className="h-8 w-8" />,
      description:
        "Expert guidance for your technology roadmap, architecture, and digital transformation. We help you make the right technical decisions to scale and innovate.",
      features: [
        "Technology Strategy & Roadmapping",
        "Architecture Review & Optimization",
        "Cloud & Infrastructure Consulting",
        "Security & Compliance Advisory",
        "Vendor & Tool Selection",
        "Digital Transformation Planning"
      ],
      results: "+300% Project Success Rate",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-green-600 to-blue-600"
    },
    {
      title: "Analytics & CRO",
      icon: <BarChart3 className="h-8 w-8" />,
      description:
        "Maximize every visitor’s potential with powerful analytics and CRO. We turn insights into action to boost conversions, reduce friction, and increase lifetime value.",
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

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
              From Market strategy to Customer acquisition, we help you sell smarter, scale faster, and grow demand.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl border-gray-200 border rounded-2xl p-8 pb-8 flex flex-col h-full min-h-[540px]">
                  <CardItem translateZ="50" className="text-xl font-bold text-neutral-600">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`p-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-medium tracking-wide uppercase text-black">{service.title}</h3>
                    </div>
                  </CardItem>

                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-base max-w-sm mt-2">
                    {service.description}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mt-6">
                    <img
                      src={service.image}
                      height="1200"
                      width="1200"
                      className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={service.title}
                    />
                  </CardItem>

                  <div className="flex justify-between items-center mt-8 mt-auto">
                    <CardItem
                      translateZ={20}
                      className={`px-5 py-2 rounded-xl text-sm font-normal text-white bg-gradient-to-r ${service.gradient}`}
                    >
                      {service.results}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-5 py-2 rounded-xl bg-black text-white text-sm font-bold"
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
      </div>
    </div>
  );
};
