import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationMessage = ({ 
    message, 
    type = 'success', 
    duration = 5000, 
    onClose 
  }) => {
    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
      if (duration !== null) {
        const timer = setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            if (onClose) onClose();
          }, 300); // Wait for exit animation
        }, duration);
        
        return () => clearTimeout(timer);
      }
    }, [duration, onClose]);
    
    const variants = {
      initial: { 
        opacity: 0, 
        y: -20,
        scale: 0.95
      },
      animate: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15
        }
      },
      exit: { 
        opacity: 0, 
        y: -10,
        scale: 0.95,
        transition: { 
          duration: 0.2 
        }
      }
    };
    
    const getColorClasses = () => {
      switch (type) {
        case 'success':
          return {
            bg: 'bg-green-50',
            border: 'border-green-200',
            text: 'text-green-800',
            iconColor: 'text-green-500'
          };
        case 'error':
          return {
            bg: 'bg-red-50',
            border: 'border-red-200',
            text: 'text-red-800',
            iconColor: 'text-red-500'
          };
        default:
          return {
            bg: 'bg-gray-50',
            border: 'border-gray-200',
            text: 'text-gray-800',
            iconColor: 'text-gray-500'
          };
      }
    };
    
    const colorClasses = getColorClasses();
    
    const getIcon = () => {
      switch (type) {
        case 'success':
          return (
            <svg className={`w-5 h-5 ${colorClasses.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          );
        case 'error':
          return (
            <svg className={`w-5 h-5 ${colorClasses.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          );
        default:
          return (
            <svg className={`w-5 h-5 ${colorClasses.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          );
      }
    };
    
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md border ${colorClasses.bg} ${colorClasses.border} ${colorClasses.text} max-w-md`}
          >
            <div className="flex items-center">
              {getIcon()}
              <span className="ml-2 font-medium">{message}</span>
            </div>
            <button
              onClick={() => {
                setIsVisible(false);
                if (onClose) setTimeout(onClose, 300);
              }}
              className={`ml-4 rounded-full p-1 hover:bg-opacity-20 hover:bg-gray-500 transition-colors duration-150 ${colorClasses.text}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

// Usage example component
const NotificationExample = () => {
  const [notifications, setNotifications] = useState([]);
  const [notificationId, setNotificationId] = useState(0);
  
  const showNotification = (message, type) => {
    const id = notificationId;
    setNotifications([...notifications, { id, message, type }]);
    setNotificationId(id + 1);
  };
  
  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };
  
  return (
    <div>
      {/* Button examples to trigger notifications */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button 
          onClick={() => showNotification("Operation completed successfully!", "success")}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Success
        </button>
        <button 
          onClick={() => showNotification("An error occurred. Please try again.", "error")}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Error
        </button>
        <button 
          onClick={() => showNotification("Please be careful with this action.", "warning")}
          className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
        >
          Warning
        </button>
        <button 
          onClick={() => showNotification("Here's some information you might find useful.", "info")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Info
        </button>
      </div>
      
      {/* Notification container */}
      <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
        {notifications.map(notification => (
          <NotificationMessage
            key={notification.id}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </div>
  );
};

export { NotificationMessage, NotificationExample };

// You can use it like this in your components:
// import { NotificationMessage } from './NotificationMessage';
//
// // Inside your component:
// const [showNotification, setShowNotification] = useState(false);
// const [notificationMessage, setNotificationMessage] = useState('');
// const [notificationType, setNotificationType] = useState('success');
//
// // To display a notification:
// setNotificationMessage("Your message was sent successfully!");
// setNotificationType("success"); // or "error", "warning", "info"
// setShowNotification(true);
//
// // In your JSX:
// {showNotification && (
//   <NotificationMessage
//     message={notificationMessage}
//     type={notificationType}
//     onClose={() => setShowNotification(false)}
//   />
// )}