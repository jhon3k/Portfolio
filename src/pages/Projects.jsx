import projects from "../data/projects.json";
import { FaEye, FaGithub } from "react-icons/fa";
import { useState } from "react";

import "../Styles/components/ProjectsContainer.sass"
import "../Styles/components/buttonFilter.sass"
import "../Styles/components/modal.sass"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all"); // all | frontend | backend

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <section className="projects-container">
      <h1>Projetos</h1>

      {/* Botões de filtro */}
      <div className="filter-buttons">
        <button 
          className={filter === "all" ? "active" : ""} 
          onClick={() => setFilter("all")}
        >
          Todos
        </button>
        <button 
          className={filter === "front-end" ? "active" : ""} 
          onClick={() => setFilter("front-end")}
        >
          Front-end
        </button>
        <button 
          className={filter === "back-end" ? "active" : ""} 
          onClick={() => setFilter("back-end")}
        >
          Back-end
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div 
            className={`project-card ${project.category}`} 
            id={project.id} 
            key={project.id}
          >
            <h3>{project.name}</h3>
            <div className="image-wrapper" onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.name} />
              <div className="hover-card">
                <FaEye className="eye-icon" />
                Ver
              </div>
            </div>
            <div>
              <a href={project.github} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div className="social-btn">
                  <FaGithub />
                  Github
                </div>
              </a>
              
              {project.site && (
                <a href={project.site} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <div className="social-btn">
                  <FaEye />
                Site
                </div>
              </a>
              )}

            </div>
            <p><b>Descrição:</b></p>
            <p>{project.description}</p>
            <p><b>Tecnologias:</b></p>
            <p>{project.tecnologies}</p>
            <p><b>Projeto: {project.category}</b></p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedProject(null)}>
              &times;
            </span>
            <h2>{selectedProject.name}</h2>
            <img src={selectedProject.image} alt={selectedProject.name} />
            <div>
              <div className="modal-links">

                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer">
                    <div className="social-btn">
                      <FaGithub />
                      <span>GitHub</span>
                    </div>
                  </a>
                )}

                {selectedProject.site && (
                  <a href={selectedProject.site} target="_blank" rel="noreferrer">
                    <div className="social-btn">
                      <FaEye />
                      <span>Ver site</span>
                    </div>
                  </a>
                )}
              </div>
            </div>
            <p><b>Descrição:</b></p>
            <p>{selectedProject.description}</p>
            <p><b>Tecnologias:</b></p>
            <p>{selectedProject.tecnologies}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects;
