import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Departments from "../pages/departments";
import Programs from "../pages/programs";
import DepartmentDetails from "../pages/DepartmentDetails";
import NewsDetails from "../pages/NewsDetails";
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/departments/:id" element={<DepartmentDetails />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/news" element={<div>News</div>} />
      <Route path="/news/:id" element={<NewsDetails />} />
      <Route path="/announcements" element={<div>Announcements</div>} />
      <Route path="/faculty" element={<div>Faculty</div>} />
      <Route path="/faculty/:id" element={<div>Faculty Details</div>} />
      <Route path="/services" element={<div>Services</div>} />
      <Route path="/events" element={<div>Events</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;