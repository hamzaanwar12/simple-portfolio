import React, { useRef } from "react";
import { GiStack } from "react-icons/gi";
import { FaServer, FaCode } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import ServiceCard from "./serviceCard";
import CommonPage from "../common";

function Services() {
  const servicesRef = useRef(null);
  const isInView = useInView(servicesRef, { once: true, amount: 0.1 });

  const servicesTypes = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-5xl" />,
      description:
        "Frontend development creates visually engaging, responsive user interfaces with HTML, CSS, and JavaScript, ensuring seamless interaction and aesthetic appeal across all devices while aligning with the brand's identity.",
      points: [
        "Creating visually appealing and user-friendly interfaces.",
        "Ensuring websites work well on various devices like desktops, tablets, and mobiles.",
        "SPAs Developing dynamic web applications using frameworks like React, Angular, or Vue.js.",
        "Ensuring websites function correctly across different web browsers.",
      ],
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-5xl" />,
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
      icon: <GiStack className="text-5xl" />,
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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const cardItem = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <CommonPage Heading={"Services"} SubHeading={"What I Offer"}>
      <motion.div
        ref={servicesRef}
        className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {servicesTypes.map((service, index) => (
          <motion.div
            key={`service-${index}`}
            variants={cardItem}
            whileHover="hover"
            className="relative"
          >
            <ServiceCard
              title={service.title}
              icon={service.icon}
              content={{
                description: service.description,
                points: service.points,
              }}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>
    </CommonPage>
  );
}

export default Services;