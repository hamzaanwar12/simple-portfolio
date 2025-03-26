import { Route, Routes } from "react-router-dom"; // Fix: Use react-router-dom
import {
  Home,
  About,
  Contact,
  NotFound,
  Experience,
  Skills,
  Services,
} from "../pages";
import Layout from "../components/layout";

function AnimatedRoutes() {
  return (
    <Routes>
      {/* ✅ Fix: Nest all routes inside Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="experience" element={<Experience />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AnimatedRoutes;
