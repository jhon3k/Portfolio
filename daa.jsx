import { useState } from "react";
import projects from "../data/projects.json";
import { FaEye, FaGithub } from "react-icons/fa";

import "../Styles/components/ProjectsContainer.sass";

const Projects = () => {
  const [categoria, setCategoria] = useState("frontend");

  const filteredProjects = projects.filter(
    (project) => project.category === categoria
  );

  return (
    <section className="projects-conteiner">
      <h1>Projetos</h1>

      {/* Botões de filtro */}
      <div className="filter-buttons">
        <button
          className={categoria === "frontend" ? "active" : ""}
          onClick={() => setCategoria("frontend")}
        >
          Front-end
        </button>
        <button
          className={categoria === "backend" ? "active" : ""}
          onClick={() => setCategoria("backend")}
        >
          Back-end
        </button>
      </div>

      {/* Lista de projetos */}
      <div className="projects-grid">
        {filteredProjects.map((project) => {
          return (
            <div className="project-card" id={project.id} key={project.id}>
              <h3>{project.name}</h3>
              <img src={project.image} alt={project.name} />
              <div>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <div className="social-btn">
                    <FaGithub />
                  </div>
                </a>
                {project.site && (
                  <a href={project.site} target="_blank" rel="noreferrer">
                    <div className="social-btn">
                      <FaEye />
                    </div>
                  </a>
                )}
              </div>
              <p>{project.description}</p>
              <p>{project.tecnologies}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
