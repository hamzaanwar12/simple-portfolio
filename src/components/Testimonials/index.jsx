import React, { useState, useEffect, useRef } from 'react';
import CommonPage from '../common';
import { motion, AnimatePresence } from 'framer-motion';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Abdullah",
    image: "/images/testimonials/abdullah.jpg", // Replace with your image path
    role: "Frontend Developer",
    text: "If you want a JavaScript developer who truly cares about your project, look no further than Hamza. He was professional, responsive, and always went the extra mile to ensure success."
  },
  {
    id: 2,
    name: "Mohsin",
    image: "/images/testimonials/mohsin.jpg", // Replace with your image path
    role: "Project Manager",
    text: "I recently had a project developed with Hamza, and I'm highly impressed with his work. Their attention to detail, responsiveness, and technical expertise exceeded my expectations. I highly recommend his services for any development needs."
  },
  {
    id: 3,
    name: "Sarah Johnson",
    image: "/images/testimonials/sarah.jpg", // Replace with your image path
    role: "UX Designer",
    text: "Working with Hamza was a pleasure. He brought our designs to life with perfect precision and added thoughtful improvements along the way. The code quality was excellent and well-documented."
  },
  {
    id: 4,
    name: "Michael Chen",
    image: "/images/testimonials/michael.jpg", // Replace with your image path
    role: "Startup Founder",
    text: "Hamza delivered our MVP ahead of schedule with all requirements met. His communication was clear and consistent throughout the project. We're already planning our next collaboration."
  },
  {
    id: 5,
    name: "Priya Patel",
    image: "/images/testimonials/priya.jpg", // Replace with your image path
    role: "E-commerce Director",
    text: "Our online store's performance improved significantly after Hamza's optimization work. Page load times decreased by 40% and the checkout experience is now seamless. Highly recommended!"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Testimonials visible at one time (1 on mobile, 2 on larger screens)
  const [visibleCount, setVisibleCount] = useState(1);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth >= 768 ? 2 : 1);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Only trigger once
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  // Pause autoplay on hover
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);

  // Handle navigation
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  // Get visible testimonials based on current index
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  // Animation variants
  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    })
  };

  // Container entrance animation
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  // Navigation buttons entrance animation
  const controlsVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  return (
    <CommonPage Heading={"My Clients Say"} SubHeading={"Testimonials"}>
      <motion.div 
        ref={sectionRef}
        className="w-full py-16"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        {/* Testimonials Container */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Cards Container */}
          <div className="relative overflow-hidden">
            <div className="flex justify-center md:justify-between gap-6 h-96">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${index}`}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex-shrink-0 w-full md:w-[calc(50%-12px)] bg-white rounded-2xl shadow-lg overflow-hidden relative"
                  >
                    <div className="h-full flex flex-col p-8">
                      {/* Quote icon */}
                      <div className="absolute top-0 right-4 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                        </svg>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow flex flex-col justify-between">
                        <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                        
                        <div className="flex items-center mt-4">
                          {/* Profile image */}
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-600">
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                              {testimonial.image ? (
                                <img 
                                  src={testimonial.image} 
                                  alt={testimonial.name} 
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.parentNode.innerHTML = testimonial.name.charAt(0);
                                  }} 
                                />
                              ) : (
                                <span className="text-xl font-bold text-white">
                                  {testimonial.name.charAt(0)}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          {/* Name and role */}
                          <div className="ml-4">
                            <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation buttons */}
          <motion.div 
            className="flex justify-center mt-10"
            variants={controlsVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Previous button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-10 h-10 mx-1 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-md hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>
            
            {/* Indicators */}
            <div className="flex items-center mx-4">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index || (visibleCount === 2 && (currentIndex + 1) % testimonials.length === index) ? 'bg-gray-600' : 'bg-gray-300'}`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Next button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-10 h-10 mx-1 rounded-full bg-gray-600 text-white flex items-center justify-center shadow-md hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </CommonPage>
  );
}

export default Testimonials;