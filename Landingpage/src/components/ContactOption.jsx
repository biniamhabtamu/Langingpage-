import React from 'react';
import { motion } from 'framer-motion';

const ContactOption = ({ option }) => {
  const { title, description, buttonText, color, icon } = option;
  
  const colorClasses = {
    sky: {
      bgGradient: 'from-sky-50 to-blue-50',
      border: 'border-sky-100',
      button: 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700',
      iconColor: 'text-sky-600'
    },
    violet: {
      bgGradient: 'from-violet-50 to-purple-50',
      border: 'border-violet-100',
      button: 'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700',
      iconColor: 'text-violet-600'
    },
    amber: {
      bgGradient: 'from-amber-50 to-orange-50',
      border: 'border-amber-100',
      button: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700',
      iconColor: 'text-amber-600'
    },
    emerald: {
      bgGradient: 'from-emerald-50 to-teal-50',
      border: 'border-emerald-100',
      button: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700',
      iconColor: 'text-emerald-600'
    }
  };

  const colors = colorClasses[color] || colorClasses.sky;

  return (
    <motion.div 
      className={`bg-gradient-to-br ${colors.bgGradient} rounded-xl p-6 md:p-8 border ${colors.border} hover:shadow-lg transition-all`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start mb-4">
        {icon && (
          <div className={`p-2 rounded-lg mr-4 ${colors.iconColor}`}>
            {React.cloneElement(icon, { className: `h-5 w-5 ${colors.iconColor}` })}
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <motion.button
        className={`${colors.button} text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
};

export default ContactOption;