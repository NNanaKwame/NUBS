import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, ClockIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Campus Revival Week",
      date: "March 15-19, 2024",
      time: "7:00 PM Daily",
      location: "University Auditorium",
      description: "A week of powerful worship, preaching, and spiritual breakthrough for the entire campus.",
      attendees: "500+ Expected",
      featured: true
    },
    {
      title: "Leadership Conference",
      date: "April 5, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Conference Hall",
      description: "Equipping student leaders with tools for effective ministry and campus influence.",
      attendees: "100+ Leaders"
    },
    {
      title: "Community Service Day",
      date: "April 20, 2024",
      time: "8:00 AM - 2:00 PM",
      location: "Various Locations",
      description: "Serving our local community through practical acts of love and kindness.",
      attendees: "200+ Volunteers"
    },
    {
      title: "Student Retreat",
      date: "May 3-5, 2024",
      time: "Friday - Sunday",
      location: "Retreat Center",
      description: "A weekend of fellowship, worship, and spiritual growth away from campus.",
      attendees: "150+ Students"
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
    <section id="events" className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 0 8-4 8-8s-4-8-8-8-8 4-8 8 8 8 8 8z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Upcoming <span className="text-accent-400">Events</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join us for life-changing events that will deepen your faith, expand your network, and impact our campus community.
          </p>
        </motion.div>

        {/* Main Featured Event Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/6860390/pexels-photo-6860390.jpeg"
              alt="People studying the Bible together - perfect for Bible study events and fellowship activities"
              className="w-full h-96 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Don't Miss Our Next Event</h3>
                <p className="text-white/90">Experience fellowship, growth, and God's presence with our community</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`glass-effect rounded-xl p-8 hover:shadow-xl transition-all duration-300 ${
                event.featured ? 'ring-2 ring-accent-500/50' : ''
              }`}
            >
              {event.featured && (
                <div className="inline-block bg-accent-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Featured Event
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-white/80">
                  <CalendarDaysIcon className="w-5 h-5 mr-3 text-accent-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <ClockIcon className="w-5 h-5 mr-3 text-accent-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <MapPinIcon className="w-5 h-5 mr-3 text-accent-400" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <UsersIcon className="w-5 h-5 mr-3 text-accent-400" />
                  <span>{event.attendees}</span>
                </div>
              </div>
              
              <p className="text-white/70 mb-6 leading-relaxed">{event.description}</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                Register for Event
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Media Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Connected</h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Follow us on social media for daily updates, event announcements, and inspiring content.
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://instagram.com/_nubsknust"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-4 rounded-full hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://tiktok.com/@_nubsknust"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 rounded-full hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://x.com/_nubsknust"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-full hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;