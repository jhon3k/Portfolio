import '../Styles/components/TechnologiesContainer.sass'
import tecnologies from '../data/tecnologies.json'

// Importa todos os ícones usados
import * as DiIcons from "react-icons/di"
import * as RiIcons from "react-icons/ri"
import * as SiIcons from "react-icons/si"

const iconMap = {
  ...DiIcons,
  ...RiIcons,
  ...SiIcons
}

const TechnologiesContainer = () => {
  return (
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>
      <div className="tecnologias-grid">
        {tecnologies.map((tech) => {
          const Icon = iconMap[tech.icon]
          return (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {Icon && <Icon />}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.info}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TechnologiesContainer
