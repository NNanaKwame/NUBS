import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  MusicalNoteIcon, 
  HeartIcon, 
  UserGroupIcon,
  MegaphoneIcon,
  BookOpenIcon 
} from '@heroicons/react/24/outline';

const Ministries = () => {
  const ministries = [
    {
      icon: MusicalNoteIcon,
      title: "Worship Ministry",
      description: "Leading the congregation in spirit-filled worship through music, vocals, and instruments.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: AcademicCapIcon,
      title: "Student Leadership",
      description: "Developing the next generation of Christian leaders on campus and beyond.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: HeartIcon,
      title: "Pastoral Care",
      description: "Providing spiritual guidance, counseling, and support for students in need.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: MegaphoneIcon,
      title: "Evangelism Team",
      description: "Sharing the gospel on campus and reaching out to non-believing students.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BookOpenIcon,
      title: "Bible Study Groups",
      description: "Small group discipleship focused on deep study of God's Word and application.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: UserGroupIcon,
      title: "Fellowship Ministry",
      description: "Building community through social events, retreats, and relationship building.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="ministries" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Ministries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover ways to get involved and use your gifts to serve God and build His kingdom on campus.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/18459701/pexels-photo-18459701.jpeg"
              alt="Group of African youth together - representing community and fellowship"
              className="w-full h-96 md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-accent-600/80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center text-white"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Find Your Place to Serve</h3>
                <p className="text-xl text-white/90">Every gift matters in God's kingdom</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Ministries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ministries.map((ministry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="glass-effect rounded-xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${ministry.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <ministry.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {ministry.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {ministry.description}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary-600 hover:text-primary-700 font-semibold flex items-center group"
              >
                Learn More
                <svg 
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-12 bg-gradient-to-r from-primary-50 to-blue-50">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Involved?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're called to worship, leadership, or service, there's a place for you in our ministry family.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Our Ministry Team
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ministries;