import projects from "../data/projects.json";
import { FaEye, FaGithub } from "react-icons/fa";

import "../Styles/components/ProjectsContainer.sass"

const Projects = () => {

  return (
    <section className="projects-conteiner">
      <h1>Projetos</h1>
      <div className="projects-grid">
        {projects.map((project) => {
          return (
            <div className="project-card" id={project.id} key={project.id}>
              <h3>{project.name}</h3>
              <img src={project.image} alt={project.name} />
              <div>
                  <a href={project.github}  target="_brank">
                  <div  className='social-btn'>
                    <FaGithub />
                  </div>
                  </a>
                  <a href={project.site} target="_brank" >
                  <div className='social-btn'>
                    <FaEye />
                  </div>
                  </a>
              </div>
              <p>{project.description}</p>
              <p>{project.tecnologies}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects;
