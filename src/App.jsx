import { Main, NotFound } from "./pages";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;

// import "./app.css";
// import Layout from "./components/layout";
// import {
//   Hero,
//   Intro,
//   SkillPage,
//   Services,
//   QualificationPage,
//   PortfolioPage,
//   Testimonials,
//   Contact,
//   Footer,
// } from "./pages";

// function App() {
//   return (
//     <Layout>
//       <Hero></Hero>
//       <Intro></Intro>
//       <SkillPage></SkillPage>
//       {/* <SkillPage></SkillPage> */}
//       {/* <Services></Services> */}
//       <Services></Services>
//       <QualificationPage></QualificationPage>
//       <PortfolioPage></PortfolioPage>
//       <Testimonials></Testimonials>
//       <Contact></Contact>
//       <Footer></Footer>
//     </Layout>
//   );
// }

// export default App;
