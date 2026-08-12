import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Departments from "../pages/departments";
import Programs from "../pages/programs";
import DepartmentDetails from "../pages/DepartmentDetails";
import NewsPage from "../pages/news";
import NewsDetails from "../pages/NewsDetails";
import Students from "../pages/students";
import Grants from "../pages/grants";
import Contact from "../pages/contact";
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/departments/:id" element={<DepartmentDetails />} />
      <Route path="/students" element={<Students />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/grants" element={<Grants />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<NewsDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;