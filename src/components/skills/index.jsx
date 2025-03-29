import ServiceBox from "./ServiceBox";
import Services from "./Services";
import ServiceModal from "./serviceModal";
import SkillBox from "./skillBox";
import SkillTag from "./skillTag";
import SkillPart from "./skillPart";
import { motion } from "framer-motion";

const SkillPage = () => {
  return (
    <motion.div className="mt-[4rem] flex flex-col  gap-y-[4rem] items-center">
      <motion.div className="max-h-[2.5rem] text-center  items-center justify-between">
        <h1 className="text-gray-800  font-medium text-3xl">Skills</h1>
        <h3 className="text-gray-600 text-lg">My Technical Skills</h3>
      </motion.div>
      <SkillPart></SkillPart>
      <Services></Services>
    </motion.div>
  );
};

export default SkillPage;
export { SkillPart, ServiceBox, ServiceModal, Services, SkillBox, SkillTag };
