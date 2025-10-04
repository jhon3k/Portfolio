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
            <img 
              src={project.image} 
              alt={project.name} 
              onClick={() => setSelectedProject(project)}
              style={{ cursor: "pointer" }}
            />
            <div>
              <a href={project.github} target="_blank" rel="noreferrer">
                <div className='social-btn'>
                  <FaGithub />
                </div>
              </a>
              <a href={project.site} target="_blank" rel="noreferrer">
                <div className='social-btn'>
                  <FaEye />
                </div>
              </a>
            </div>
            <p>{project.description}</p>
            <p>{project.tecnologies}</p>
            <p>Projeto {project.category}</p>
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
            <p>{selectedProject.description}</p>
            <p><b>Tecnologias:</b> {selectedProject.tecnologies}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects;
