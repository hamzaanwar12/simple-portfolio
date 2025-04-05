import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
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
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="text-center"
        variants={itemVariants}
      >
        <motion.h1 
          className="text-9xl font-bold text-gray-800 mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          404
        </motion.h1>
        <motion.h2 
          className="text-2xl font-medium text-gray-600 mb-8"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          className="text-gray-500 max-w-md mb-8"
          variants={itemVariants}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;