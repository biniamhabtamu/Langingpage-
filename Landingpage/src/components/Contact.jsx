import React from 'react';
import ContactOption from './ContactOption';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactOptions = [
    {
      title: "Get a Quote",
      description: "Receive a customized proposal for your project within 24 hours of your inquiry.",
      buttonText: "Request Quote",
      color: "sky",
      icon: <Mail className="h-6 w-6 text-sky-600" />
    },
    {
      title: "Schedule Consultation",
      description: "Book a free 30-minute strategy session with our development team.",
      buttonText: "Book Meeting",
      color: "violet",
      icon: <Calendar className="h-6 w-6 text-violet-600" />
    },
    {
      title: "Call Us Directly",
      description: "Speak immediately with our support team during business hours.",
      buttonText: "Call Now",
      color: "amber",
      icon: <Phone className="h-6 w-6 text-amber-600" />
    },
    {
      title: "Live Chat",
      description: "Get instant answers to your questions via our messaging system.",
      buttonText: "Start Chat",
      color: "emerald",
      icon: <MessageSquare className="h-6 w-6 text-emerald-600" />
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Build Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can bring your digital vision to life.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          viewport={{ once: true }}
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={{
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
              }}
            >
              <ContactOption option={option} />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          className="mt-16 bg-white rounded-2xl shadow-sm p-8 sm:p-10 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Prefer Traditional Contact Methods?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4">
                <Mail className="h-8 w-8 text-sky-600 mx-auto mb-3" />
                <h4 className="font-medium text-gray-900 mb-1">Email Us</h4>
                <p className="text-gray-600">contact@glsoftware.com</p>
              </div>
              <div className="p-4">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-medium text-gray-900 mb-1">Call Us</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div className="p-4">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-medium text-gray-900 mb-1">Office Hours</h4>
                <p className="text-gray-600">Mon-Fri, 9AM-5PM EST</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;