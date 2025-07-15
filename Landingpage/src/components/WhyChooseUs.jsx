import React from 'react';
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';
import { Users, Zap, Clock, Heart, Award, Code, Shield, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Industry Experts",
      description: "Our team includes certified specialists with 8+ years average experience in cutting-edge technologies",
      icon: Users,
      color: "emerald",
      stats: "150+ Projects",
      statIcon: <Award className="h-6 w-6 text-emerald-500" />
    },
    {
      title: "Innovative Approach",
      description: "We leverage the latest frameworks and methodologies to deliver future-proof solutions",
      icon: Code,
      color: "sky",
      stats: "99% Satisfaction",
      statIcon: <Zap className="h-6 w-6 text-sky-500" />
    },
    {
      title: "Agile Delivery",
      description: "Rapid development cycles that deliver value faster without compromising quality",
      icon: Clock,
      color: "violet",
      stats: "40% Faster",
      statIcon: <Clock className="h-6 w-6 text-violet-500" />
    },
    {
      title: "Comprehensive Support",
      description: "End-to-end partnership with 24/7 availability and proactive maintenance",
      icon: Shield,
      color: "rose",
      stats: "24/7 Coverage",
      statIcon: <Shield className="h-6 w-6 text-rose-500" />
    }
  ];

  const stats = [
    { value: "75+", label: "Global Clients", icon: <Globe className="h-8 w-8" /> },
    { value: "200+", label: "Projects Delivered", icon: <Code className="h-8 w-8" /> },
    { value: "98%", label: "Client Retention", icon: <Heart className="h-8 w-8" /> },
    { value: "4.9/5", label: "Average Rating", icon: <Award className="h-8 w-8" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="inline-block mb-4 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-sky-100 to-blue-100 text-sky-600 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            Why We're Different
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">GL Software</span> Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond development to become your strategic <span className="font-semibold text-gray-800">technology innovation partner</span>
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-blue-500/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-white/80">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-center mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-center text-blue-100 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;