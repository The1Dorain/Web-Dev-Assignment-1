import { Link } from "react-router-dom";

// the code file that holds the About page code
export default function About() {
  return (
    <>
      <h1>About Me</h1>
      <p>Dorian Englisbee</p>
      <img
        src="src/images/Headshot.jpg"
        alt="Headshot of Dorian in a blue suit"
        width="280"
      />
      <br />
      <br />
      <p>
        Hello, my name is Dorian Englisbee and I am a student of Centennial
        College taking a course for game development. I have always had an
        interest in making things throughout my life, and game development has
        become the outlet I need to express myself. All I've ever wanted in life
        was to make those around me feel joy and fun, so making games was an
        obvious direction for me. If I can make even 1 person's day just a
        little bit better because of something I've done, that's enough to keep
        me fulfilled. Click the link below to check out my resume!
      </p>
      <h2>
        <Link to="https://drive.google.com/file/d/1f24U8J1Ro7963dqpelESjOZ5bZboLkuN/view?usp=sharing">
          View Resume
        </Link>
      </h2>
    </>
  );
}
