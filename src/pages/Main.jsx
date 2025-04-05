import { Hero } from "../components/Home";
import { Intro } from "../components/About";
import SkillPage from "../components/skills";
import { Services } from "../components/services";
import { QualificationPage } from "../components/qualification";
import { Portfolio as PortfolioPage } from "../components/Potfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Layout from "../components/layout";
export {
  Hero,
  Intro,
  SkillPage,
  Services,
  QualificationPage,
  PortfolioPage,
  Testimonials,
  Contact,
  Footer,
};

function Main() {
  return (
    <Layout>
      <Hero></Hero>
      <Intro></Intro>
      <SkillPage></SkillPage>
      {/* <SkillPage></SkillPage> */}
      {/* <Services></Services> */}
      <Services></Services>
      <QualificationPage></QualificationPage>
      <PortfolioPage></PortfolioPage>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </Layout>
  );
}

export default Main;
