import "./Skills.css";

const skillGroups = [
  { title: "Programming", items: ["Python", "JavaScript", "C / C++", "Java"] },
  { title: "Web Development", items: ["HTML", "CSS", "React", "Node.js"] },
  { title: "Database", items: ["MongoDB", "SQL"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-inner">
        <h3 className="skills-eyebrow">Skills</h3>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.title} className="skills-group">
              <h4 className="skills-group-title">{group.title}</h4>
              <ul className="skills-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;