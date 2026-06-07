import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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