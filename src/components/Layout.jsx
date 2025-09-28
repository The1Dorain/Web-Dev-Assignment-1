import { Link } from "react-router-dom";

// the code file that holds the Navigation section of the website
export default function Layout() {
  return (
    <>
      <img src="src/images/Logo.png" alt="Graffiti of the letters 'DE'" />
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/education">Education</Link> |{" "}
        <Link to="/services">Services</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <br />
    </>
  );
}
