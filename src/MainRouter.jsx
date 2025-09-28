import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";

const MainRouter = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<div>Home Page</div>} />
        <Route path="/education" element={<div>Home Page</div>} />
        <Route path="/services" element={<div>Home Page</div>} />
        <Route path="/contact" element={<div>Home Page</div>} />
      </Routes>
    </>
  );
};

export default MainRouter;
