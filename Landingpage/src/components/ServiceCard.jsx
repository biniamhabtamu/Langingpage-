import React from 'react';
import { Smartphone, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  const { title, description, icon, color, tags } = service;
  
  const IconComponent = icon === "Smartphone" ? Smartphone : Globe;
  const colorClasses = {
    blue: {
      bgGradient: 'from-sky-50 to-blue-50',
      iconBg: 'bg-gradient-to-br from-sky-500 to-blue-600',
      tagBg: 'bg-gradient-to-r from-sky-500 to-blue-600',
      hoverBorder: 'hover:border-sky-200',
      button: 'text-sky-600 hover:text-sky-700 hover:bg-sky-50',
      glow: 'from-sky-400/30 to-blue-400/20'
    },
    purple: {
      bgGradient: 'from-violet-50 to-purple-50',
      iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
      tagBg: 'bg-gradient-to-r from-violet-500 to-purple-600',
      hoverBorder: 'hover:border-violet-200',
      button: 'text-violet-600 hover:text-violet-700 hover:bg-violet-50',
      glow: 'from-violet-400/30 to-purple-400/20'
    },
    teal: {
      bgGradient: 'from-teal-50 to-cyan-50',
      iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600',
      tagBg: 'bg-gradient-to-r from-teal-500 to-cyan-600',
      hoverBorder: 'hover:border-teal-200',
      button: 'text-teal-600 hover:text-teal-700 hover:bg-teal-50',
      glow: 'from-teal-400/30 to-cyan-400/20'
    },
    amber: {
      bgGradient: 'from-amber-50 to-orange-50',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
      tagBg: 'bg-gradient-to-r from-amber-500 to-orange-600',
      hoverBorder: 'hover:border-amber-200',
      button: 'text-amber-600 hover:text-amber-700 hover:bg-amber-50',
      glow: 'from-amber-400/30 to-orange-400/20'
    }
  };
  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <motion.div 
      className={`relative group bg-gradient-to-br ${colors.bgGradient} rounded-xl md:rounded-2xl p-6 md:p-8 border border-transparent ${colors.hoverBorder} transition-all duration-300 hover:shadow-lg hover:shadow-${color}-100/30 overflow-hidden`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Gradient background effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
      
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center mb-4 md:mb-6 gap-4">
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.1 }}
            className={`${colors.iconBg} p-2 md:p-3 rounded-lg md:rounded-xl shadow-md shadow-${color}-500/20 transition-all duration-300 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center`}
          >
            <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </motion.div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 group-hover:text-gray-700 transition-colors">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
          {tags.map((tag, index) => (
            <motion.span 
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`${colors.tagBg} text-white px-3 py-1 text-xs md:text-sm rounded-full shadow-sm transition-all duration-200 font-medium`}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <motion.button 
          whileHover={{ x: 3 }}
          className={`flex items-center ${colors.button} text-sm md:text-base font-medium transition-colors duration-300 rounded-lg px-3 py-2 -ml-3 w-fit`}
        >
          Learn more
          <ArrowRight className="ml-1 md:ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;