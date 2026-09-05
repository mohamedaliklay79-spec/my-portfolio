import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <h3 className="about-eyebrow">About</h3>
        <div className="about-grid">
          <p className="about-text">
            I'm a Computer Science student focused on building software that
            works end-to-end — from backend APIs to the interfaces people
            actually touch. I like taking a project from an idea to something
            functional, then refining it until it feels right.
          </p>
          <p className="about-text">
            My interests sit mostly in web and mobile development, with some
            time spent on embedded systems and hardware-adjacent projects.
            I'm currently sharpening my skills in React, Node.js, and
            database design while exploring where I want to specialize next.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;