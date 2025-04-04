import SkillBox from "./skillBox";
import SkillTag from "./skillTag";
import SkillPart from "./skillPart";
import CommonPage from "../common";


const SkillPage = () => {
  return (
    <CommonPage Heading={"Skills"} SubHeading={"My Technical Skills"}>
      <SkillPart></SkillPart>
    </CommonPage>
  );
};

export default SkillPage;
export { SkillPart, SkillBox, SkillTag };
