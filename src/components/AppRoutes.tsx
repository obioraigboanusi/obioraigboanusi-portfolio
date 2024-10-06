import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// import Blog from '../pages/Blog';
// import Projects from '../pages/Projects';
// import EducationExperiences from '../pages/EducationExperiences';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
      <Route
        path="/education-and-experiences"
        element={<EducationExperiences />}
      /> */}
    </Routes>
  );
}

export default AppRoutes;
