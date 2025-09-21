import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Project from './Components/Project';
import Service from './Components/Service';
import logo from "logo.png"; // Import the logo image

const MainRouter = () => {
  return (
    <>
    <Layout />
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="education" element={<Education />} />
        <Route path="projects" element={<Project />} />
        <Route path="service" element={<Service />} />
      </Routes>
    
    </>
  );
};

export default MainRouter;
