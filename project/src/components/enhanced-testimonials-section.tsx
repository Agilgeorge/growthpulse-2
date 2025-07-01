import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { AppleCardsCarousel, Card } from "./ui/apple-cards-carousel";

export const EnhancedTestimonialsSection = () => {
  const testimonials = [
    {
      quote: "GROWTHPULSE transformed our entire data infrastructure and marketing approach. Their Databricks implementation increased our processing efficiency by 300%, while their PPC campaigns delivered a 187% conversion rate increase.",
      name: "Sarah Chen",
      title: "CEO, TechFlow SaaS"
    },
    {
      quote: "The team's multi-channel attribution framework and creative testing completely revolutionized our e-commerce performance. We went from struggling with high ad costs to achieving a 312% ROAS increase.",
      name: "Marcus Rodriguez",
      title: "Founder & CTO, EcoStyle"
    },
    {
      quote: "Their integrated LinkedIn, Google Ads, and content marketing strategy scaled our lead generation beyond our expectations. The 245% increase in qualified leads and 56% reduction in cost per lead speaks for itself.",
      name: "Jennifer Walsh",
      title: "VP of Marketing, FinanceForward"
    },
    {
      quote: "GROWTHPULSE built our entire ML pipeline and go-to-market strategy from scratch. Their lakehouse architecture and product marketing approach helped us achieve product-market fit 6 months ahead of schedule.",
      name: "David Kim",
      title: "Head of Growth, DataVault AI"
    },
    {
      quote: "The combination of their technical expertise and marketing prowess is unmatched. They built our patient data platform while simultaneously creating campaigns that increased our customer acquisition by 280%.",
      name: "Lisa Thompson",
      title: "CMO, HealthTech Solutions"
    },
    {
      quote: "Their full-stack approach to growth is incredible. From rebuilding our e-commerce platform to optimizing our entire marketing funnel, they delivered a complete transformation that tripled our revenue.",
      name: "Alex Johnson",
      title: "CEO, RetailMax"
    }
  ];

  const carouselCards = [
    {
      category: "B2B Software",
      title: "TechFlow SaaS Transformation",
      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "300% data processing efficiency increase"
    },
    {
      category: "E-commerce",
      title: "EcoStyle Growth Story",
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "312% ROAS improvement"
    },
    {
      category: "FinTech",
      title: "FinanceForward Scale",
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "245% qualified leads increase"
    },
    {
      category: "AI/ML",
      title: "DataVault AI Success",
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "400% user adoption growth"
    },
    {
      category: "HealthTech",
      title: "HealthTech Solutions",
      src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "280% customer acquisition"
    },
    {
      category: "Retail",
      title: "RetailMax Revolution",
      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: "300% revenue growth"
    }
  ];

  const cards = carouselCards.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-2 border border-gray-600 mb-8 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-gray-300 text-sm font-light tracking-widest uppercase">
                Client Success Stories
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-light text-white mb-8 tracking-tight">
              TRUSTED BY
              <span className="block font-normal italic bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                industry leaders
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              See how we've helped companies across diverse industries achieve breakthrough growth 
              through our integrated technology and marketing solutions.
            </p>
          </motion.div>
        </div>

        {/* Apple Cards Carousel */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-white mb-12 text-center tracking-tight uppercase">
            Success Stories Gallery
          </h3>
          <AppleCardsCarousel items={cards} initialScroll={0} />
        </div>

        {/* Infinite Moving Cards */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-white mb-12 text-center tracking-tight uppercase">
            What Our Clients Say
          </h3>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Trust Indicators with 3D Effect */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-12 rounded-2xl">
              <h3 className="text-2xl font-light text-white mb-8 tracking-tight uppercase">Trusted Across Industries</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {[
                  { number: "500+", label: "Projects Delivered" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "$2.5B+", label: "Revenue Generated" },
                  { number: "300%", label: "Average ROI Increase" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-light text-white mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm font-light tracking-wide uppercase">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-center space-x-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white font-medium ml-3">4.9/5 Client Rating</span>
              </div>

              <p className="text-gray-300 font-light text-sm max-w-2xl mx-auto">
                "GROWTHPULSE consistently delivers exceptional results across technology and marketing. 
                Their integrated approach sets them apart from traditional agencies."
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA with Gradient Background */}
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
                READY TO JOIN OUR SUCCESS STORIES?
              </h3>
              <p className="text-xl mb-12 font-light text-white/90">
                Let's discuss how we can achieve similar breakthrough results for your business.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 font-medium text-sm tracking-wide hover:bg-gray-200 transition-all duration-300 flex items-center mx-auto rounded-lg"
              >
                GET YOUR FREE GROWTH AUDIT
                <ArrowRight className="ml-3 h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};