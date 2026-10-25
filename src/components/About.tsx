import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <img
            src="/profile_under_1mb.png"
            alt="Mohamed Ali"
            className="about-profile-image"
          />
        </div>

        <div className="about-content">
          <p className="about-label">ABOUT ME</p>

          <h2>
            Hi, I'm <span>Mohamed Ali</span>
          </h2>

          <h3>Computer Science Student</h3>

          <p className="about-description">
            I'm a Computer Science student passionate about software
            development and building useful digital solutions. I enjoy
            developing web applications and mobile apps, learning new
            technologies, and turning ideas into real projects.
          </p>

          <p className="about-description">
            My experience includes React, TypeScript, React Native,
            Node.js, Express, and MongoDB. I'm continuously improving
            my skills through personal projects and practical learning.
          </p>

          <a href="#projects" className="about-projects-button">
            Explore My Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
