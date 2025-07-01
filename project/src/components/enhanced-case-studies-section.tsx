import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, DollarSign, Users, Target, Database, Code } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { cn } from "../lib/utils";

export const EnhancedCaseStudiesSection = () => {
  const caseStudies = [
    {
      company: "TechFlow SaaS",
      industry: "B2B Software",
      challenge: "Outdated data infrastructure and low trial-to-paid conversion rates",
      solution: "Databricks lakehouse implementation + conversion funnel optimization + email nurture sequences",
      results: [
        { metric: "Data Processing", value: "+300%", icon: <Database className="h-5 w-5" /> },
        { metric: "Conversion Rate", value: "+187%", icon: <Target className="h-5 w-5" /> },
        { metric: "MRR Growth", value: "+$47K", icon: <DollarSign className="h-5 w-5" /> }
      ],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      company: "EcoStyle",
      industry: "E-commerce",
      challenge: "High ad costs, low ROAS, and fragmented customer data",
      solution: "Multi-channel attribution framework + creative testing + customer data platform",
      results: [
        { metric: "ROAS", value: "+312%", icon: <DollarSign className="h-5 w-5" /> },
        { metric: "Revenue", value: "+$2.1M", icon: <TrendingUp className="h-5 w-5" /> },
        { metric: "New Customers", value: "+89%", icon: <Users className="h-5 w-5" /> }
      ],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-green-600 to-blue-600"
    },
    {
      company: "FinanceForward",
      industry: "FinTech",
      challenge: "Struggling to scale lead generation and complex compliance requirements",
      solution: "LinkedIn + Google Ads + content marketing integration + compliance-ready data architecture",
      results: [
        { metric: "Qualified Leads", value: "+245%", icon: <Users className="h-5 w-5" /> },
        { metric: "Cost per Lead", value: "-56%", icon: <Target className="h-5 w-5" /> },
        { metric: "Pipeline Value", value: "+$890K", icon: <DollarSign className="h-5 w-5" /> }
      ],
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      company: "DataVault AI",
      industry: "AI/ML",
      challenge: "Need for scalable ML infrastructure and go-to-market strategy",
      solution: "End-to-end ML pipeline + product positioning + developer marketing + API documentation",
      results: [
        { metric: "Model Training", value: "+400%", icon: <Code className="h-5 w-5" /> },
        { metric: "API Adoption", value: "+250%", icon: <Database className="h-5 w-5" /> },
        { metric: "Developer Signups", value: "+180%", icon: <Users className="h-5 w-5" /> }
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-white py-20 border-t border-gray-200 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg rotate-45 opacity-20 animate-bounce" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse" />

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
                Proven Results
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-light text-black mb-8 tracking-tight">
              REAL CLIENTS,
              <span className="block font-normal italic bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                real transformations
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              See how our integrated approach to technology and marketing has helped companies 
              achieve breakthrough growth and dominate their markets.
            </p>
          </motion.div>
        </div>

        {/* 3D Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl border-gray-200 border w-auto sm:w-[35rem] h-auto rounded-xl p-8">
                  <CardItem
                    translateZ="50"
                    className="text-xs font-light tracking-widest uppercase text-gray-600 mb-4"
                  >
                    <div className="inline-flex px-4 py-2 border border-gray-300 bg-white/80 backdrop-blur-sm rounded-full">
                      {study.industry}
                    </div>
                  </CardItem>

                  <CardItem
                    translateZ="60"
                    className="text-3xl font-light text-black mb-4 tracking-tight"
                  >
                    {study.company}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-600 text-sm mb-6 font-light leading-relaxed"
                  >
                    <strong>Challenge:</strong> {study.challenge}
                  </CardItem>

                  <CardItem
                    translateZ="70"
                    className="bg-gray-100 border border-gray-200 p-4 mb-6 rounded-lg"
                  >
                    <h4 className="font-light text-black mb-2 tracking-wide uppercase text-sm">Our Integrated Solution:</h4>
                    <p className="text-gray-700 font-light text-sm">{study.solution}</p>
                  </CardItem>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <CardItem
                        key={resultIndex}
                        translateZ={80 + resultIndex * 10}
                        className="text-center"
                      >
                        <div className={cn("inline-flex p-2 bg-gradient-to-r", study.gradient, "text-white mb-2 rounded-lg")}>
                          {result.icon}
                        </div>
                        <div className="text-2xl font-light text-black mb-1">{result.value}</div>
                        <div className="text-gray-600 text-xs font-light tracking-wide uppercase">{result.metric}</div>
                      </CardItem>
                    ))}
                  </div>

                  <CardItem translateZ="100" className="w-full mb-6">
                    <img
                      src={study.image}
                      height="1000"
                      width="1000"
                      className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
                      alt={`${study.company} case study`}
                    />
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    as="button"
                    className={cn("w-full bg-gradient-to-r", study.gradient, "text-white py-3 px-6 rounded-xl font-medium text-sm tracking-wide hover:shadow-lg transition-all duration-300 flex items-center justify-center")}
                  >
                    READ FULL CASE STUDY
                    <ArrowRight className="ml-3 h-4 w-4" />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* CTA Section (FIXED motion.button) */}
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
                READY TO BE OUR NEXT SUCCESS STORY?
              </h3>
              <p className="text-xl mb-12 font-light text-gray-300">
                Let's discuss how we can achieve similar breakthrough results for your business.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 font-medium text-sm tracking-wide hover:from-blue-600 hover:to-purple-600 transition-all duration-300 rounded-lg"
              >
                GET YOUR FREE GROWTH AUDIT
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
