import SkillBox from "./skillBox";
import SkillTag from "./skillTag";
import SkillPart from "./skillPart";
import { motion } from "framer-motion";
import Services from "../services/services";
import { QualificationPage } from "../qualification";
import { Portfolio as PortfolioPage } from "../Potfolio";
import CommonPage from "../common";
import Testimonials from "../Testimonials";
import Contact from "../Contact";
import Footer from "../Footer";
// import PortfolioPage
const SkillPage = () => {
  return (
    // <motion.div className="mt-[4rem] flex flex-col  gap-y-[4rem] items-center">
    //   <motion.div className="max-h-[2.5rem] text-center  items-center justify-between">
    //     <h1 className="text-gray-800  font-medium text-3xl">Skills</h1>
    //     <h3 className="text-gray-600 text-lg">My Technical Skills</h3>
    //   </motion.div>
    //   <SkillPart></SkillPart>
    //   <Services></Services>
    //   <QualificationPage></QualificationPage>
    //   <PortfolioPage></PortfolioPage>
    // </motion.div>

    <CommonPage Heading={"Skills"} SubHeading={"My Technical Skills"}>
      <SkillPart></SkillPart>
      <Services></Services>
      <QualificationPage></QualificationPage>
      <PortfolioPage></PortfolioPage>
    <Testimonials></Testimonials>
      {/* <Testimonials></Testimonials> */}
      <Contact></Contact>
      <Footer></Footer>
    </CommonPage>
  );
};

export default SkillPage;
export { SkillPart, SkillBox, SkillTag };
