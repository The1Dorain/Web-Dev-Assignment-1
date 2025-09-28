import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const MainRouter = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>Home Page</div>} />
        <Route path="/projects" element={<div>Home Page</div>} />
        <Route path="/education" element={<div>Home Page</div>} />
        <Route path="/services" element={<div>Home Page</div>} />
        <Route path="/contact" element={<div>Home Page</div>} />
      </Routes>
    </>
  );
};

export default MainRouter;
