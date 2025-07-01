import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO",
      company: "TechFlow SaaS",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "GROWTHPULSE transformed our entire data infrastructure and marketing approach. Their Databricks implementation increased our processing efficiency by 300%, while their PPC campaigns delivered a 187% conversion rate increase.",
      results: "+187% Conversion Rate",
      industry: "B2B Software"
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder & CTO",
      company: "EcoStyle",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The team's multi-channel attribution framework and creative testing completely revolutionized our e-commerce performance. We went from struggling with high ad costs to achieving a 312% ROAS increase.",
      results: "+312% ROAS",
      industry: "E-commerce"
    },
    {
      name: "Jennifer Walsh",
      title: "VP of Marketing",
      company: "FinanceForward",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Their integrated LinkedIn, Google Ads, and content marketing strategy scaled our lead generation beyond our expectations. The 245% increase in qualified leads and 56% reduction in cost per lead speaks for itself.",
      results: "+245% Qualified Leads",
      industry: "FinTech"
    },
    {
      name: "David Kim",
      title: "Head of Growth",
      company: "DataVault AI",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "GROWTHPULSE built our entire ML pipeline and go-to-market strategy from scratch. Their lakehouse architecture and product marketing approach helped us achieve product-market fit 6 months ahead of schedule.",
      results: "+400% User Adoption",
      industry: "AI/ML"
    },
    {
      name: "Lisa Thompson",
      title: "CMO",
      company: "HealthTech Solutions",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The combination of their technical expertise and marketing prowess is unmatched. They built our patient data platform while simultaneously creating campaigns that increased our customer acquisition by 280%.",
      results: "+280% Customer Acquisition",
      industry: "HealthTech"
    },
    {
      name: "Alex Johnson",
      title: "CEO",
      company: "RetailMax",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Their full-stack approach to growth is incredible. From rebuilding our e-commerce platform to optimizing our entire marketing funnel, they delivered a complete transformation that tripled our revenue.",
      results: "+300% Revenue Growth",
      industry: "Retail"
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
                Client Success Stories
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-light text-black mb-8 tracking-tight">
              TRUSTED BY
              <span className="block font-normal italic text-gray-600">
                industry leaders
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              See how we've helped companies across diverse industries achieve breakthrough growth 
              through our integrated technology and marketing solutions.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 border border-gray-200 p-8 hover:bg-gray-200 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-8 w-8 text-black" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 font-light leading-relaxed mb-8 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Results Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-medium tracking-wide mb-6">
                {testimonial.results}
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div>
                  <h4 className="font-medium text-black text-sm tracking-wide">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs font-light">{testimonial.title}, {testimonial.company}</p>
                  <p className="text-gray-500 text-xs font-light tracking-wide uppercase">{testimonial.industry}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 border border-gray-200 p-12">
              <h3 className="text-2xl font-light text-black mb-8 tracking-tight uppercase">Trusted Across Industries</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-light text-black mb-2">500+</div>
                  <div className="text-gray-600 text-sm font-light tracking-wide uppercase">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-black mb-2">98%</div>
                  <div className="text-gray-600 text-sm font-light tracking-wide uppercase">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-black mb-2">$2.5B+</div>
                  <div className="text-gray-600 text-sm font-light tracking-wide uppercase">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-light text-black mb-2">300%</div>
                  <div className="text-gray-600 text-sm font-light tracking-wide uppercase">Average ROI Increase</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-black font-medium ml-3">4.9/5 Client Rating</span>
              </div>

              <p className="text-gray-600 font-light text-sm max-w-2xl mx-auto">
                "GROWTHPULSE consistently delivers exceptional results across technology and marketing. 
                Their integrated approach sets them apart from traditional agencies."
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-black text-white p-16">
            <h3 className="text-4xl font-light mb-6 tracking-tight">
              READY TO JOIN OUR SUCCESS STORIES?
            </h3>
            <p className="text-xl mb-12 font-light text-gray-300">
              Let's discuss how we can achieve similar breakthrough results for your business.
            </p>
            <button className="bg-white text-black px-8 py-4 font-medium text-sm tracking-wide hover:bg-gray-200 transition-all duration-300 flex items-center mx-auto">
              GET YOUR FREE GROWTH AUDIT
              <ArrowRight className="ml-3 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};