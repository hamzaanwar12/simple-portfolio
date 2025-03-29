import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
import checkSrc from "/assets/check.png";
import  Stats  from "./Stats";
function Intro() {
  return (
    <motion.div className="mx-[1.5rem] mt-[4rem] flex flex-col  gap-y-[4rem] items-center">
    
    <motion.div className="max-h-[2.5rem] items-center justify-between flex flex-col gap-4">
      <h1 className="text-gray-800">About Me</h1>
      <h3 className="text-gray-600">My Intorduction</h3> 
    </motion.div>

      <motion.div>
        <motion.img
          className="object-fit w-[225px] h-[225px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-2xl "
          src={checkSrc}
          alt="M Hamza"
        />
      </motion.div>
      <Stats></Stats>
      <motion.p className="font-light text-title px-0 sm:px-[5rem] text-center">
        With over <strong>2+ years of experience</strong>, I specialize in
        crafting <strong>enterprise-level web applications</strong> with a focus
        on exceptional user experiences. Leveraging technologies like{" "}
        <strong>React.js, Next.js and Tailwind CSS</strong>, I excel in writing
        <strong>meticulously structured code</strong> and implementing{" "}
        <strong>CI/CD pipelines</strong> for seamless project delivery. My
        expertise in <strong>logical problem-solving</strong> allows me to
        streamline complex challenges into elegant solutions. From developing a{" "}
        <strong>E-Commerce app</strong>
        to a complete <strong>B2B platform app</strong>, I deliver scalable
        solutions that exceed expectations. Grounded in a strong focus on UI/UX
        design and clear communication, I'm committed to creating digital
        experiences that resonate with users. Let's collaborate to bring your
        vision to life.
      </motion.p>
      <motion.button className="w-[200px] sm:w-[175px]  text-center justify-center bg-title flex items-center text-lg text-white px-4  py-3 rounded-md mt-4 hover:bg-gray-800 transition duration-300 ease-in-out">
        Resume <FaFileAlt  className="ml-[5px]"/>
      </motion.button>
    </motion.div>
  );
}

export default Intro;
