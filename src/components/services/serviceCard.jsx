import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Modal from "./serviceModal";
function ServiceCard({ icon, title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  console.log("before teh one thing");
  console.log(icon, title, content);
  return (
    <motion.div className="my-[1rem] sm:my-0">
      {icon}
      <motion.h1 className="text-gray-800  font-medium text-xl">
        {title}
      </motion.h1>
      <button
        onClick={openModal}
        className="flex items-center text-gray-600 font-light text-[18px]"
      >
        View More{" "}
        <MdOutlineArrowRightAlt className="hover:-translate-x-1 transition-all duration-75 ease-in-out" />
      </button>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={title}
        content={content}
      ></Modal>
    </motion.div>
  );
}

export default ServiceCard;
