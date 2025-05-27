import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, HeartIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline';

const About = () => {
  const features = [
    {
      icon: BookOpenIcon,
      title: "Biblical Foundation",
      description: "Grounded in Scripture and committed to sound biblical teaching that transforms lives."
    },
    {
      icon: HeartIcon,
      title: "Community Love",
      description: "A family where every student finds belonging, support, and genuine Christian fellowship."
    },
    {
      icon: UsersIcon,
      title: "Student Focused",
      description: "Designed specifically for university students navigating faith and academic life."
    },
    {
      icon: StarIcon,
      title: "Excellence",
      description: "Pursuing excellence in worship, discipleship, and service to our campus community."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
          >
            About <span className="gradient-text">NUBS KNUST</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We are a vibrant Christian student community at Kwame Nkrumah University of Science and Technology, 
            dedicated to nurturing spiritual growth, academic excellence, and lifelong relationships in Christ.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2325729/pexels-photo-2325729.jpeg"
                alt="African student studying with Bible - representing academic and spiritual growth"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 glass-effect rounded-xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold text-gray-900">
                Our Mission & Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At NUBS KNUST, we believe in the transformative power of Christ in the lives of students. 
                Our mission is to create an environment where students can grow spiritually, academically, 
                and socially while being equipped for kingdom service.
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                <p className="text-primary-800 font-medium italic">
                  "We are committed to presenting every student perfect in Christ, empowered for action 
                  in their academic pursuits and future careers."
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-primary-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;