
import "./Hero.css";
import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hello, I'm <span>Zid Mohamed Ali</span>
        </h1>

        <h2>Computer Science Student</h2>

        <p className="hero-description">
          I build web applications, mobile apps, and software projects
          using modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-button hero-button-primary">
            View My Projects
          </a>

          <a href="#contact" className="hero-button hero-button-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={heroImage} alt="Portfolio hero" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
