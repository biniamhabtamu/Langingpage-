import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Code, Smartphone, Cloud, PenTool } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#" },
        { name: "Services", href: "#services" },
        { name: "About Us", href: "#why-us" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#", icon: <Code className="h-4 w-4 mr-2" /> },
        { name: "Mobile Apps", href: "#", icon: <Smartphone className="h-4 w-4 mr-2" /> },
        { name: "UI/UX Design", href: "#", icon: <PenTool className="h-4 w-4 mr-2" /> },
        { name: "Cloud Solutions", href: "#", icon: <Cloud className="h-4 w-4 mr-2" /> }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Github className="h-5 w-5" />, href: "#" }
  ];

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: "contact@glsoftware.com" },
    { icon: <Phone className="h-5 w-5" />, text: "+1 (555) 123-4567" },
    { icon: <MapPin className="h-5 w-5" />, text: "123 Tech Street, Silicon Valley" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"
        >
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Zap className="h-8 w-8 text-blue-400 animate-pulse" />
              <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                GL Software
              </span>
            </motion.div>
            <p className="text-gray-300 leading-relaxed">
              We craft innovative digital solutions that transform businesses and create exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                  >
                    <a 
                      href={link.href} 
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      {link.icon && link.icon}
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">
                    {contact.icon}
                  </span>
                  <span className="ml-3 text-gray-400">{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 my-8"
        />

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} GL Software. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              whileHover={{ y: -2 }}
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;