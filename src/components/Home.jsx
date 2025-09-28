import { Link } from "react-router-dom";

// the component that writes the home page content to the screen
export default function Home() {
  return (
    <>
      <p>
        Hello, my name is Dorian Englisbee and welcome to my website. If you
        wish to learn more who I am, navigate to my{" "}
        <Link to="/about">about page</Link>, and to learn about what I've worked
        on in the past, head over to my{" "}
        <Link to="/projects">projects page</Link>.
      </p>
      <br />
      <h1>To Create, Inspire, and Spread Joy!</h1>
    </>
  );
}
