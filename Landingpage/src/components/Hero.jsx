import React from 'react';
import { ArrowRight, Sparkles, Rocket, Code, Shield, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
      {/* Background elements - responsive sizing */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-600/20 rounded-full filter blur-xl sm:blur-2xl md:blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 -right-20 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-indigo-600/20 rounded-full filter blur-xl sm:blur-2xl md:blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-600/10 rounded-full filter blur-lg sm:blur-xl md:blur-2xl animate-pulse"></div>
      </div>

      {/* Content container with responsive padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-40">
        <div className="text-center">
          {/* Badge - responsive text size */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm text-xs sm:text-sm"
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-yellow-300 mr-1 sm:mr-2" />
            <span className="font-medium text-white">Trusted by 99+ Businesses</span>
          </motion.div>

          {/* Headline - responsive font sizes */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-snug sm:leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
              Future-Ready
            </span> <br className="hidden sm:block" />
            Digital Solutions
          </motion.h1>
          
          {/* Subheading - responsive font sizes */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-100 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto"
          >
            We design and develop <span className="font-semibold text-white">high-performance applications</span> that accelerate business growth.
          </motion.p>

          {/* CTA Buttons - responsive sizing */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16"
          >
            <button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 sm:hover:-translate-y-1">
              <span className="relative z-10 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            
            <button className="relative overflow-hidden group border-2 border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:border-transparent transition-all duration-300 transform hover:-translate-y-0.5 sm:hover:-translate-y-1">
              <span className="relative z-10">See Our Work</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
            </button>
          </motion.div>

          {/* Features Grid - responsive columns and spacing */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto"
          >
            {[
              { icon: Rocket, text: "Lightning-Fast" },
              { icon: Code, text: "Modern Tech" },
              { icon: Shield, text: "Secure" },
              { icon: Smartphone, text: "Responsive" }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-300 mx-auto mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm md:text-base font-medium text-white">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - responsive positioning */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 sm:w-7 sm:h-12 md:w-8 md:h-14 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;