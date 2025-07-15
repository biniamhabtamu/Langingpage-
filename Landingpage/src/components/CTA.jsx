import React from 'react';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-pink-400/10 rounded-full filter blur-xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 sm:w-48 sm:h-48 bg-indigo-500/20 rounded-full filter blur-xl animate-float-delay"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
        >
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300 mr-2" />
          <span className="text-sm sm:text-base font-medium text-white">Let's Create Something Amazing</span>
        </motion.div>

        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Transform Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-pink-300">Digital Masterpieces</span>
        </motion.h2>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We blend creativity with technology to build solutions that captivate audiences and drive business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden group bg-gradient-to-r from-amber-400 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold hover:shadow-lg hover:shadow-pink-500/30 transition-all"
          >
            <span className="relative z-10 flex items-center justify-center">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-base sm:text-lg font-semibold hover:border-amber-300/50 transition-all"
          >
            <span className="relative z-10 flex items-center justify-center">
              <Rocket className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-amber-300" />
              Explore Our Work
            </span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
          </motion.button>
        </motion.div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default CTA;