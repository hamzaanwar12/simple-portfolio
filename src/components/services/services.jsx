import React from "react";
import { GiStack } from "react-icons/gi";
import { FaServer } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import ServiceCard from "./serviceCard";
import ModalContent from "./ModalContent";
function services() {
  const servicesTypes = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-4xl" />,
      description:
        "Frontend development creates visually engaging, responsive user interfaces with HTML, CSS, and JavaScript, ensuring seamless interaction and aesthetic appeal across all devices while aligning with the brand's identity.",
      points: [
        "Creating visually appealing and user-friendly interfaces.",
        "Ensuring websites work well on various devices like desktops, tablets, and mobiles.,",
        "SPAs Developing dynamic web applications using frameworks like React, Angular, or Vue.js.",
        "Ensuring websites function correctly across different web browsers.",
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-4xl" />,
      description:
        "Backend development involves creating server-side logic, APIs, and databases with Python, Java, and Node.js, ensuring performance, security, and scalability for efficient data handling and frontend integration.",
      points: [
        "Creating and managing RESTful or GraphQL APIs for communication between frontend and backend.",
        "Designing database schemas, optimizing queries, and managing databases (SQL and NoSQL).",
        "Writing server-side code to handle business logic and interactions with the database.",
        "Implementing secure user authentication and role-based access control.",
      ],
    },
    {
      title: "Full Stack Development",
      icon: <GiStack className="text-4xl" />,
      description:
        "Full stack development merges frontend and backend skills to build complete web solutions, designing user interfaces and server-side logic for seamless interaction and meeting user and business needs.",
      points: [
        "Building full web applications from the ground up, including both frontend and backend.",
        "Managing deployment pipelines, continuous integration/continuous deployment (CI/CD), and cloud infrastructure.",
        "Using Git for source code management and collaboration.",
        "Writing unit tests, integration tests, and performing thorough debugging to ensure code quality.",
      ],
    },
  ];
  return (
    <motion.div className="my-[4rem] flex flex-col  gap-y-[6rem] items-center">
      <motion.div className="max-h-[2.5rem] text-center  items-center justify-between">
        <h1 className="text-gray-800  font-medium text-3xl">Services</h1>
        <h3 className="text-gray-600 text-md">What I Offer</h3>
      </motion.div>
      <motion.div className="px-4 sm:px-2 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 ">
        {/* <motion.div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"> */}
        {servicesTypes.map((service, index) => (
          <ServiceCard
            title={service.title}
            icon={service.icon}
            content={{
              description: service.description,
              points: service.points,
            }}
            key={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default services;
