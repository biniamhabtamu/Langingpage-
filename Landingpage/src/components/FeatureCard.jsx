import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ feature }) => {
  const { title, description, icon: IconComponent, color, stats, statIcon } = feature;

  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-100',
      text: 'text-emerald-600',
      iconBg: 'bg-emerald-500',
      hover: 'hover:bg-emerald-50'
    },
    sky: {
      bg: 'bg-sky-100',
      text: 'text-sky-600',
      iconBg: 'bg-sky-500',
      hover: 'hover:bg-sky-50'
    },
    violet: {
      bg: 'bg-violet-100',
      text: 'text-violet-600',
      iconBg: 'bg-violet-500',
      hover: 'hover:bg-violet-50'
    },
    rose: {
      bg: 'bg-rose-100',
      text: 'text-rose-600',
      iconBg: 'bg-rose-500',
      hover: 'hover:bg-rose-50'
    }
  };

  const colors = colorClasses[color] || colorClasses.sky;

  return (
    <motion.div 
      className={`relative overflow-hidden p-6 rounded-xl border border-gray-200 ${colors.bg} ${colors.hover} transition-all duration-300`}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start mb-4">
        <div className={`${colors.iconBg} p-2 rounded-lg text-white mr-4`}>
          {IconComponent && <IconComponent className="h-5 w-5" />}
        </div>
        <h3 className={`text-xl font-bold ${colors.text}`}>{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      {stats && (
        <div className="flex items-center mt-4">
          <span className={`${colors.text} font-medium mr-2`}>{stats}</span>
          {statIcon && <span className={colors.text}>{statIcon}</span>}
        </div>
      )}
    </motion.div>
  );
};

export default FeatureCard;