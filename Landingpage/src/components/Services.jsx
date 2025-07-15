import React from 'react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';
import { Smartphone, Globe, Code, Server, Database, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Mobile App Development",
      description: "We create high-performance mobile applications for iOS and Android platforms using cutting-edge technologies like Flutter and React Native, delivering seamless user experiences that drive engagement and growth.",
      icon: Smartphone,
      color: "blue",
      tags: ["iOS", "Android", "Flutter", "React Native", "Swift", "Kotlin"],
      features: ["App Store Optimization", "Push Notifications", "Offline Support", "Biometric Auth"]
    },
    {
      title: "Web Development",
      description: "Our team builds responsive, scalable web applications using modern frameworks like Next.js and Node.js, optimized for performance and security across all devices.",
      icon: Globe,
      color: "purple",
      tags: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL", "WebSockets"],
      features: ["Progressive Web Apps", "SEO Optimization", "Payment Integration", "Real-time Updates"]
    },
    {
      title: "Backend Services",
      description: "Robust backend solutions with microservices architecture, cloud integration, and API development to power your applications with reliability and scalability.",
      icon: Server,
      color: "emerald",
      tags: ["Node.js", "Python", "Java", "AWS", "Firebase", "Docker"],
      features: ["RESTful APIs", "Database Design", "Cloud Deployment", "CI/CD Pipelines"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed to enhance user engagement and satisfaction, backed by thorough research and usability testing.",
      icon: Cpu,
      color: "amber",
      tags: ["Figma", "Adobe XD", "User Research", "Prototyping", "Animation", "WCAG"],
      features: ["Wireframing", "User Testing", "Design Systems", "Accessibility"]
    }
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
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="inline-block mb-4 px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-100 to-sky-100 text-blue-600 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="bg-gradient-to-r from-blue-500 to-sky-600 bg-clip-text text-transparent">Digital Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end services designed to transform your ideas into high-performing digital products
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;