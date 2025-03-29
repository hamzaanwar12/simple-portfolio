import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";


const Modal = ({ isOpen, onClose, title, children }) => {
  // Lock scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - clicking this will close the modal */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            {/* Modal Content - stopPropagation prevents clicks inside from closing */}
            <motion.div
              className="bg-white rounded-lg shadow-xl w-11/12 max-w-md mx-auto z-50 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with title and close button */}
              <div className="flex justify-between items-center border-b p-4">
                <h3 className="text-lg font-medium">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <MdOutlineCancel className="w-6 h-6" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-4">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;