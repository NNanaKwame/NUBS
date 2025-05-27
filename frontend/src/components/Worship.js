import React from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, MapPinIcon, CalendarDaysIcon, MusicalNoteIcon } from '@heroicons/react/24/outline';

const Worship = () => {
  const services = [
    {
      title: "Sunday Worship Service",
      time: "9:00 AM - 11:30 AM",
      location: "Main Auditorium, KNUST",
      description: "Join us for uplifting worship, powerful preaching, and community fellowship."
    },
    {
      title: "Wednesday Bible Study",
      time: "6:00 PM - 7:30 PM", 
      location: "Fellowship Hall",
      description: "Deep dive into God's Word with interactive discussions and prayer."
    },
    {
      title: "Friday Prayer Meeting",
      time: "7:00 PM - 8:30 PM",
      location: "Prayer Room",
      description: "Powerful times of intercession and spiritual breakthrough."
    }
  ];

  const expectations = [
    {
      icon: MusicalNoteIcon,
      title: "Contemporary Worship",
      description: "Modern worship music that connects with the student generation"
    },
    {
      icon: CalendarDaysIcon,
      title: "Relevant Teaching",
      description: "Biblical messages that address real-life student challenges"
    },
    {
      icon: MapPinIcon,
      title: "Accessible Location",
      description: "Conveniently located on campus for easy attendance"
    }
  ];

  return (
    <section id="worship" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
            Worship <span className="text-accent-400">Times</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Come as you are and experience the presence of God with fellow students who are passionate about worship and the Word.
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
              src="https://images.pexels.com/photos/2774570/pexels-photo-2774570.jpeg"
              alt="African worshippers with raised hands in praise - capturing worship service energy"
              className="w-full h-96 md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Join Us This Sunday</h3>
                <p className="text-white/90">Experience authentic worship and life-changing messages</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <div className="space-y-3">
                <div className="flex items-center text-white/80">
                  <ClockIcon className="w-5 h-5 mr-3 text-accent-400" />
                  <span>{service.time}</span>
                </div>
                <div className="flex items-center text-white/80">
                  <MapPinIcon className="w-5 h-5 mr-3 text-accent-400" />
                  <span>{service.location}</span>
                </div>
              </div>
              <p className="text-white/70 mt-4 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-12">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expectations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 rounded-full mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Worship;