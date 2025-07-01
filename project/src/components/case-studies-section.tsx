import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, DollarSign, Users, Target, Database, Code } from "lucide-react";

export const CaseStudiesSection = () => {
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
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "bg-black text-white"
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
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "bg-black text-white"
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
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "bg-black text-white"
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
      color: "bg-black text-white"
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
                Proven Results
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-light text-black mb-8 tracking-tight">
              REAL CLIENTS,
              <span className="block font-normal italic text-gray-600">
                real transformations
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              See how our integrated approach to technology and marketing has helped companies 
              achieve breakthrough growth and dominate their markets.
            </p>
          </motion.div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 border border-gray-200 p-1"
            >
              <div className="bg-white p-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="mb-8">
                      <div className="inline-flex px-4 py-2 border border-gray-300 text-gray-600 text-sm font-light tracking-widest uppercase mb-6">
                        {study.industry}
                      </div>
                      <h3 className="text-4xl font-light text-black mb-6 tracking-tight">{study.company}</h3>
                      <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">{study.challenge}</p>
                      
                      <div className="bg-gray-100 border border-gray-200 p-6 mb-8">
                        <h4 className="font-light text-black mb-3 tracking-wide uppercase">Our Integrated Solution:</h4>
                        <p className="text-gray-700 font-light">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="inline-flex p-3 bg-black text-white mb-4">
                            {result.icon}
                          </div>
                          <div className="text-3xl font-light text-black mb-2">{result.value}</div>
                          <div className="text-gray-600 text-sm font-light tracking-wide uppercase">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <button className="bg-black text-white px-8 py-4 font-medium text-sm tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center">
                      READ FULL CASE STUDY
                      <ArrowRight className="ml-3 h-4 w-4" />
                    </button>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <img 
                        src={study.image} 
                        alt={`${study.company} case study`}
                        className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
                      
                      {/* Floating Result Badge */}
                      <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -top-4 -right-4 bg-black text-white px-6 py-3 font-medium text-sm tracking-wide"
                      >
                        {study.results[0].value} {study.results[0].metric}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="mt-20 mb-16">
          <div className="bg-gray-100 border border-gray-200 p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-black mb-6 tracking-tight uppercase">Our Proven Methodology</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Every success story follows our systematic approach to growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: "Discover", desc: "Audit business, data maturity, and customer journey" },
                { step: "Design", desc: "Build growth architecture across tech & marketing" },
                { step: "Deliver", desc: "Deploy campaigns, solutions, and systems" },
                { step: "Optimize", desc: "Improve with data, testing, and automation" },
                { step: "Scale", desc: "Expand into new markets and revenue channels" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white border border-gray-200 p-6">
                    <div className="text-2xl font-light text-black mb-4">{index + 1}</div>
                    <h4 className="text-lg font-light text-black mb-3 tracking-wide uppercase">{process.step}</h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-black text-white p-16">
            <h3 className="text-4xl font-light mb-6 tracking-tight">
              READY TO BE OUR NEXT SUCCESS STORY?
            </h3>
            <p className="text-xl mb-12 font-light text-gray-300">
              Let's discuss how we can achieve similar breakthrough results for your business.
            </p>
            <button className="bg-white text-black px-8 py-4 font-medium text-sm tracking-wide hover:bg-gray-200 transition-all duration-300">
              GET YOUR FREE GROWTH AUDIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};