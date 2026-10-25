import "./Projects.css";
import { Link } from "react-router-dom";

const GITHUB_PROFILE = "https://github.com/mohamedaliklay79-spec";

const projects = [
  {
    name: "Recipe Mobile App",
    description:
      "A mobile app for browsing, saving, and adding recipes, with categories and a favorites system backed by a full REST API.",
    tech: ["React Native", "Node.js", "Express", "MongoDB"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/mohamedaliklay79-spec/recipes-app-flavora",
      },
    ],
  },
  {
    name: "Patient Health Monitor",
    description:
      "An Arduino-based monitoring system tracking temperature, heart rate, blood pressure, and air quality, simulated and tested in Proteus.",
    tech: ["Arduino", "Proteus", "C++"],
    
  
    links: [{ label: "GitHub", url: GITHUB_PROFILE }],
  },
  {
    name: "Sales Dashboard",
    description:
      "An interactive e-commerce analytics dashboard with simulated real-time data, date-range filtering, click-to-filter charts, and searchable/sortable order tables.",
    tech: ["React", "TypeScript", "Recharts"],
    links: [
      {
        label: "GitHub",
        url: "https://sales-dashboard-dusky-five.vercel.app/",
      },
      {
        label: "Live Demo",
        url: "https://sales-dashboard-dusky-five.vercel.app/",
      },
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <h3 className="projects-eyebrow">Projects</h3>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.name} className="project-card">
              <h4>{project.name}</h4>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              
<div className="project-links">
  {project.name === "Recipe Mobile App" && (
    <Link to="/projects/flavora" className="case-study-link">
      View Case Study
    </Link>
  )}

  {project.links.map((link) => (
    <a
      key={link.label}
      href={link.url}
      target="_blank"
      rel="noreferrer"
    >
      {link.label}
    </a>
  ))}
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
