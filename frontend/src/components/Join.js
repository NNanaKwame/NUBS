import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CheckCircleIcon, UserIcon, EnvelopeIcon, PhoneIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const Join = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


const onSubmit = async (data) => {
  setIsLoading(true);
  
  try {
    // Replace with your Google Apps Script Web App URL
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby9jbvCeOjrO-OUpJZuK-i5HFLZmmAuxPP1hIgME4WQIpdgFOZRivFsrUCEVVOcmOK2kA/exec';
    
    // Create FormData object (this avoids CORS preflight)
    const formData = new FormData();
    formData.append('fullName', data.fullName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('program', data.program);
    formData.append('year', data.year);
    formData.append('hearAbout', data.hearAbout || '');
    
    console.log('Submitting form data...');
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      body: formData // No Content-Type header needed with FormData
    });
    
    console.log('Response status:', response.status);
    
    if (response.ok) {
      // Try to parse as JSON, fallback to text
      let result;
      const responseText = await response.text();
      
      try {
        result = JSON.parse(responseText);
      } catch {
        // If not JSON, assume success if status is OK
        result = { success: true, message: 'Registration submitted successfully!' };
      }
      
      if (result.success !== false) {
        console.log('Form submitted successfully');
        setIsSubmitted(true);
        reset();
        
        // Reset success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } else {
      throw new Error(`Server error: ${response.status}`);
    }
    
  } catch (error) {
    console.error('Error submitting form:', error);
    
    // Show user-friendly error message
    alert('There was an error submitting your registration. Please try again or contact support if the problem persists.');
    
  } finally {
    setIsLoading(false);
  }
};

  const benefits = [
    "Weekly worship services and Bible studies",
    "Leadership development opportunities",
    "Academic and spiritual mentorship",
    "Community service projects",
    "Campus-wide evangelism initiatives",
    "Social events and fellowship activities",
    "Prayer support and pastoral care",
    "Ministry involvement opportunities"
  ];

  if (isSubmitted) {
    return (
      <section id="join" className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="glass-effect rounded-2xl p-12">
              <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to NUBS KNUST!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for joining our community. We'll be in touch soon with more information about upcoming events and how to get involved.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={() => setIsSubmitted(false)}
              >
                Register Another Member
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
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
            Join Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the next step in your spiritual journey. Become part of a vibrant community that will support 
            your growth in faith, academics, and life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Join NUBS KNUST?</h3>
              <p className="text-lg text-gray-600 mb-8">
                When you join our community, you become part of something bigger than yourself. 
                Here's what awaits you:
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircleIcon className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="glass-effect rounded-xl p-6 bg-gradient-to-r from-primary-50 to-blue-50">
              <h4 className="font-semibold text-gray-900 mb-2">Ready to Get Started?</h4>
              <p className="text-gray-600">
                Fill out the form and we'll connect you with our welcome team who will help you 
                find your place in our community.
              </p>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-effect rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Membership Registration</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('fullName', { required: 'Full name is required' })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('phone', { required: 'Phone number is required' })}
                      type="tel"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Program of Study */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program of Study *
                  </label>
                  <div className="relative">
                    <AcademicCapIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      {...register('program', { required: 'Program of study is required' })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="e.g., Computer Science, Engineering"
                    />
                  </div>
                  {errors.program && (
                    <p className="text-red-500 text-sm mt-1">{errors.program.message}</p>
                  )}
                </div>

                {/* Year of Study */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year of Study *
                  </label>
                  <select
                    {...register('year', { required: 'Year of study is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select your year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="graduate">Graduate Student</option>
                  </select>
                  {errors.year && (
                    <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>
                  )}
                </div>

                {/* How did you hear about us */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    {...register('hearAbout')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="friend">Friend/Word of mouth</option>
                    <option value="social">Social Media</option>
                    <option value="campus">Campus event</option>
                    <option value="website">Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Registering...
                    </div>
                  ) : (
                    'Join NUBS KNUST'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Join;