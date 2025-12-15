import { useState } from 'react'
import '../Styles/components/TechnologiesContainer.sass'
import tecnologies from '../data/tecnologies.json'

import * as DiIcons from "react-icons/di"
import * as RiIcons from "react-icons/ri"
import * as SiIcons from "react-icons/si"
import * as FaIcons from "react-icons/fa"
import * as TbIcons from "react-icons/tb"

const iconMap = {
  ...DiIcons,
  ...RiIcons,
  ...SiIcons,
  ...FaIcons,
  ...TbIcons
}

const TechnologiesContainer = () => {
  const [showAll, setShowAll] = useState(false)

  const visibleTechs = showAll ? tecnologies : tecnologies.slice(0, 3)

  return (
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>

      <div className="tecnologies-grid">
        {visibleTechs.map((tech) => {
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

      {tecnologies.length > 3 && (
        <button 
          className="toggle-btn" 
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Ver menos" : "Ver mais"}
        </button>
      )}
    </section>
  )
}

export default TechnologiesContainer
