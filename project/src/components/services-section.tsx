import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  MousePointer, 
  BarChart3, 
  Megaphone, 
  Mail, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Database,
  Code,
  TrendingUp,
  Users
} from "lucide-react";

export const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "AI/Data Engineering",
      icon: <Database className="h-8 w-8" />,
      color: "from-black to-gray-800",
      description: "Unlock the full power of Databricks and lakehouse architecture with real-time data pipelines and ML model deployment.",
      features: [
        "Real-time & batch data pipelines (Auto Loader, Spark, Delta Lake)",
        "Lakehouse architecture (Bronze, Silver, Gold layers)",
        "Power BI, Tableau, ThoughtSpot integration",
        "ML model development & MLOps (MLflow, PySpark, AutoML)",
        "Data governance (Unity Catalog, RBAC, encryption)",
        "CI/CD, cloud-native DevOps (Terraform, GitHub, Jenkins)"
      ],
      results: "+300% Data Processing Efficiency"
    },
    {
      title: "Full-Stack Development",
      icon: <Code className="h-8 w-8" />,
      color: "from-black to-gray-800",
      description: "From prototypes to production-ready applications, we build custom web & mobile apps with cloud infrastructure.",
      features: [
        "Custom Web & Mobile Applications",
        "Cloud Infrastructure & DevOps (Azure, AWS)",
        "API Integration & Automation",
        "AI/ML Implementation",
        "MVP Prototyping & Rapid Deployment",
        "Scalable Architecture Design"
      ],
      results: "+250% Development Speed"
    },
    {
      title: "PPC & Paid Media",
      icon: <MousePointer className="h-8 w-8" />,
      color: "from-black to-gray-800",
      description: "Drive qualified traffic and maximize ROI with data-driven paid advertising campaigns across all platforms.",
      features: [
        "Google Ads Management",
        "Facebook & Instagram Ads",
        "LinkedIn Advertising",
        "YouTube Advertising",
        "Shopping Campaigns",
        "Conversion Tracking & Attribution"
      ],
      results: "+127% Average ROAS Increase"
    },
    {
      title: "SEO & Content Marketing",
      icon: <Search className="h-8 w-8" />,
      color: "from-black to-gray-800",
      description: "Dominate search results and build authority with strategic SEO and content marketing that drives organic growth.",
      features: [
        "Technical SEO Audits",
        "Keyword Research & Strategy",
        "Content Strategy & Creation",
        "Link Building Campaigns",
        "Local SEO Optimization",
        "SEO Analytics & Reporting"
      ],
      results: "+89% Organic Traffic Growth"
    },
    {
      title: "Analytics & CRO",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "from-black to-gray-800",
      description: "Turn data into decisions with advanced analytics and conversion optimization that maximizes your ROI.",
      features: [
        "GA4 Setup & Advanced Tracking",
        "Conversion Funnel Analysis",
        "A/B Testing & Experimentation",
        "Heat Map & User Behavior Analysis",
        "UX Optimization",
        "Performance Reporting & Insights"
      ],
      results: "+156% Conversion Rate Boost"
    },
    {
      title: "Software Marketing",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-black to-gray-800",
      description: "Turn software into successful products with comprehensive go-to-market strategies and sales enablement.",
      features: [
        "Market Research & GTM Strategy",
        "Brand Messaging & Value Proposition",
        "Product Launch & PR",
        "Demand Generation (SEO, PPC, Events)",
        "Sales Enablement & CRM Setup",
        "Customer Retention & Loyalty Programs"
      ],
      results: "+200% Product Adoption Rate"
    }
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

        {/* Services Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-8 py-4 font-light tracking-wide transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-black text-white'
                    : 'border border-gray-300 text-gray-600 hover:text-black hover:border-gray-500'
                }`}
              >
                {service.icon}
                <span className="text-sm uppercase">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 border border-gray-200 p-12"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex p-4 bg-black text-white mb-8">
                  {services[activeTab].icon}
                </div>
                
                <h3 className="text-4xl font-light text-black mb-6 tracking-tight">
                  {services[activeTab].title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                  {services[activeTab].description}
                </p>

                <div className="inline-flex items-center px-6 py-3 bg-black text-white font-medium mb-12 text-sm tracking-wide">
                  <BarChart3 className="h-4 w-4 mr-3" />
                  {services[activeTab].results}
                </div>

                <button className="bg-black text-white px-8 py-4 font-medium text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center">
                  GET STARTED TODAY
                  <ArrowRight className="ml-3 h-4 w-4" />
                </button>
              </div>

              <div>
                <div className="bg-white border border-gray-200 p-8">
                  <h4 className="text-xl font-light text-black mb-8 tracking-wide uppercase">What's Included:</h4>
                  <div className="space-y-6">
                    {services[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="p-1 bg-black">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Industries We Serve */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-black mb-6 tracking-tight uppercase">Industries We Serve</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Trusted by leading companies across diverse sectors to drive digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Retail & E-Commerce",
              "Finance & FinTech", 
              "Healthcare & Life Sciences",
              "Manufacturing",
              "EdTech & SaaS",
              "Real Estate",
              "Professional Services",
              "D2C Brands"
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gray-100 border border-gray-200 hover:bg-gray-200 transition-colors">
                <span className="text-gray-700 font-light text-sm tracking-wide uppercase">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-black text-white p-16">
            <h3 className="text-4xl font-light mb-6 tracking-tight">
              READY TO ACCELERATE YOUR GROWTH?
            </h3>
            <p className="text-xl mb-12 font-light text-gray-300">
              From data to decisions. From launch to loyalty. Let's build something remarkable.
            </p>
            <button className="bg-white text-black px-8 py-4 font-medium text-sm tracking-wide hover:bg-gray-200 transition-all duration-300">
              START YOUR TRANSFORMATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};