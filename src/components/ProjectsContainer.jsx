import { Link } from "react-router-dom"

const ProjectsContainer = () => {
    return (
        <section className="projects-MainContent">
            <h2>Projetos</h2>
            <p>Cada projeto carrega um aprendizado, um desafio superado e uma linha de código com propósito. Descubra o que venho construindo — é só clicar no botão.</p>
            <Link to="/projects" className="btn">
                    Ver Mais
                </Link>
        </section>
    )
}

export default ProjectsContainer