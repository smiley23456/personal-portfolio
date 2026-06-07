import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React and Node.js",
      tech: "React, Express",
    },
    {
      title: "AI Polite Rewriter",
      description: "AI application that rewrites messages politely",
      tech: "Python, Transformers",
    },
    {
      title: "Inverted Index Search Engine",
      description: "Fast document search engine using inverted indexing",
      tech: "Python, Streamlit",
    },
  ]);

  return (
    <section id="projects">
      <h2>My Projects</h2>

      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Technologies:</strong> {project.tech}
          </p>
          <hr />
        </div>
      ))}
    </section>
  );
}

export default Projects;