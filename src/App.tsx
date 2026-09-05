import "./App.css";
import profile from "./assets/profile.png";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>
            <h1>Zid Mohamed Ali</h1>
            <h2>Computer Science Student</h2>
            <p className="hero-description">
              I'm a computer science student passionate about technology and
              software development.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profile} alt="Profile" />
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;