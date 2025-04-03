import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  // For animation
  const [formRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required')
  });

  // Initial form values
  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Example EmailJS setup - uncomment and replace with your actual service IDs
      // const result = await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: values.name,
      //     reply_to: values.email,
      //     message: values.message
      //   },
      //   'YOUR_PUBLIC_KEY'
      // );

      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear form
      resetForm();
      setStatus({ submitting: false, submitted: true, error: null });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const contactOptions = [
    {
      id: 'email',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      ),
      title: 'Email',
      value: 'mhamza@mail.com',
      link: 'mailto:mhamza@mail.com',
      color: 'blue'
    },
    {
      id: 'whatsapp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      ),
      title: 'Whatsapp',
      value: '+923304853534',
      link: 'https://wa.me/923304853534',
      color: 'green'
    },
    {
      id: 'linkedin',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      ),
      title: 'LinkedIn',
      value: 'M Hamza',
      link: 'https://linkedin.com/in/mhamza',
      color: 'indigo'
    }
  ];

  const inputFields = [
    { 
      id: 'name', 
      label: 'Name', 
      type: 'text', 
      placeholder: 'Hamza',
    },
    { 
      id: 'email', 
      label: 'Mail', 
      type: 'email', 
      placeholder: 'example@gmail.com',
    },
    { 
      id: 'message', 
      label: 'Message', 
      type: 'textarea', 
      placeholder: 'Converting figma to React Web App',
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left Column - Talk To Me */}
          <motion.div
            className="flex flex-col space-y-2"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >


              {contactOptions.map((option) => (
                <motion.div
                  key={option.id}
                  className={`bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`bg-${option.color}-100 p-2 rounded-full mb-4`}>
                      {option.icon}
                    </div>
                    <h3 className="font-medium text-gray-900">{option.title}</h3>
                    <p className="text-gray-600">{option.value}</p>
                    <motion.a
                      href={option.link}
                      className={`mt-1 text-gray-600 inline-flex items-center text-${option.color}-600 hover:text-${option.color}-800`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Write Me 
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            ref={formRef}
            className="flex flex-col"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-gray-800 font-medium text-3xl  mb-6 text-center md:text-left"
              variants={itemVariants}
            >
              Write Me your Project
            </motion.h2>
            
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, status = { submitting: false, submitted: false, error: null } }) => (
                <Form className="space-y-6">
                  {inputFields.map((field, index) => (
                    <motion.div 
                      key={field.id} 
                      className="relative"
                      variants={itemVariants}
                    >
                      <motion.label 
                        htmlFor={field.id}
                        className="block text-sm font-medium text-gray-500 mb-1"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {field.label}
                      </motion.label>
                      
                      {field.type === 'textarea' ? (
                        <motion.div whileFocus={{ scale: 1.01 }}>
                          <Field
                            as="textarea"
                            id={field.id}
                            name={field.id}
                            rows={5}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 focus:outline-none resize-none"
                          />
                        </motion.div>
                      ) : (
                        <motion.div whileFocus={{ scale: 1.01 }}>
                          <Field
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            placeholder={field.placeholder}
                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 focus:outline-none"
                          />
                        </motion.div>
                      )}
                      
                      <ErrorMessage name={field.id}>
                        {msg => (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm mt-1"
                          >
                            {msg}
                          </motion.div>
                        )}
                      </ErrorMessage>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="text-center md:text-left"
                    variants={itemVariants}
                  >
                    <motion.button
                      type="submit"
                      className={`px-6 py-3 rounded-lg bg-gray-800 text-white inline-flex items-center space-x-2 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-700'
                      }`}
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    >
                      {isSubmitting || status.submitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                  
                  {/* Success or error message */}
                  <AnimatedFeedback status={status} />
                </Form>
              )}
            </Formik>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Animated feedback component
const AnimatedFeedback = ({ status }) => {
  if (!status || (!status.submitted && !status.error)) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`mt-4 p-3 rounded-md ${
        status.submitted ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
      }`}
    >
      {status.submitted ? (
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
      ) : (
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          <span>{status.error}</span>
        </div>
      )}
    </motion.div>
  );
};

export default ContactSection;