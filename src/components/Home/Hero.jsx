import React from "react";
import { motion } from "framer-motion";
import { TypeWriter, Photo } from "./index";
import { LuSend } from "react-icons/lu";
import { useContext } from "react";
import { SideBarContext } from "../../context/sidebarContext";

function Hero() {
  const { sidebar } = useContext(SideBarContext);
  return (
    // i want the photo and description along with it
    <motion.div className="w-full px-4 lg:w-[80%] mx-auto mt-[4rem] flex gap-y-10 md:gap-y-0 flex-col-reverse md:flex-row  items-center text-2xl justify-between text-title-dark ">
      <motion.div className="flex text-center md:text-justify flex-col  md:w-[50%]">
        <motion.div className="flex flex-col md:block gap-2 items-center">
          <motion.h1 className="font-semibold text-[34px] ">
            M Hamza👋
          </motion.h1>
          <motion.div className="flex text-center md:text-left items-center md:items-justify gap-2">
            <div className="bg-title w-12 h-[3px]"></div>
            <TypeWriter />
          </motion.div>
        </motion.div>
        <motion.p className="text-title text-justify text-[18px] mt-4 font-light">
          With a strong foundation in web development and a thirst for
          knowledge, I am ready to take on any coding challenge. Whether working
          solo or as part of a team, I bring a passion for creativity and a
          drive to excel. Let's connect and make something amazing happen!
        </motion.p>
        <motion.button className="w-[200px] sm:w-[175px] text-center justify-center bg-title flex items-center text-lg text-white px-4  py-3 rounded-md mt-4 hover:bg-title-dark transition duration-300 ease-in-out">
          Say Hello <LuSend />
        </motion.button>
      </motion.div>
      {!sidebar && <Photo />}
      {/* <TypingEffect></TypingEffect> */}
    </motion.div>
    // <Social></Social>
  );
}

export default Hero;
