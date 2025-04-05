import { useContext } from 'react';
import { SideBarContext } from "../context/sidebarContext";
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
  const { refs } = useContext(SideBarContext);

  return (
    <Layout>
      <div ref={refs.homeRef}>
        <Hero />
      </div>
      <div ref={refs.aboutRef}>
        <Intro />
      </div>
      <div ref={refs.skillsRef}>
        <SkillPage />
      </div>
      <div ref={refs.servicesRef}>
        <Services />
      </div>
      <div ref={refs.qualificationRef}>
        <QualificationPage />
      </div>
      <div ref={refs.portfolioRef}>
        <PortfolioPage />
      </div>
      <div ref={refs.testimonialsRef}>
        <Testimonials />
      </div>
      <div ref={refs.contactRef}>
        <Contact />
      </div>
      <Footer />
    </Layout>
  );
}

export default Main;
