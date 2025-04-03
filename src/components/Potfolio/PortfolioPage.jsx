import React from "react";
import { motion } from "framer-motion";
import PortfolioGrid from "./PortfolioGrid";
import CommonPage from "../common";
function Portfolio() {
  return (
    <CommonPage Heading={"Portfolio"} SubHeading={"Most Recent Work"}>
      <PortfolioGrid />
    </CommonPage>
    // <motion.div className="my-[4rem] flex flex-col  gap-y-[6rem] items-center">
    //   <motion.div className="max-h-[2.5rem] text-center  items-center justify-between">
    //     <h1 className="text-gray-800  font-medium text-3xl">Portfolio</h1>
    //     <h3 className="text-gray-600 text-md">Most Recent Work</h3>
    //   </motion.div>
    //   {/* <motion.div className="px-4 sm:px-2 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 "> */}
    //   {/* <motion.div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4"> */}
    //   {/* </motion.div> */}
    //   <PortfolioGrid />
    // </motion.div>
  );
}

export default Portfolio;
