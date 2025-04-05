import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineCancel } from "react-icons/md";
import ModalContent from "./ModalContent";

const Modal = ({ isOpen, onClose, title, modalContent : content }) => {
  // Handle ESC key press to close modal
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  console.log("INside the modal")
  console.log(title, content);  
  // Lock scrolling when modal is open and add keyboard listener
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Prevent click propagation
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="flex flex-col bg-white rounded-2xl shadow-2xl w-full sm:max-w-[90%] md:max-w-[75%] lg:max-w-2xl mx-auto z-50 overflow-hidden"
            initial={{ y: 20, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.95, opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            onClick={handleModalClick}
          >
            {/* Header area */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h3 className="text-xl text-gray-800 font-semibold tracking-tight">
                {title}
              </h3>
              <motion.button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdOutlineCancel className="text-gray-500 text-xl" />
              </motion.button>
            </div>

            {/* Content area with proper padding */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[70vh]">
              <ModalContent
                title={title}
                description={content?.description || ""}
                points={content?.points || []}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
