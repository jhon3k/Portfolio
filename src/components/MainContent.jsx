import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'

import '../Styles/components/maincontent.sass'

const MainContent = () => {
    return (
        <main id='main-content'>
            <AboutContainer />
            <TechnologiesContainer />
            <ProjectsContainer />
        </main>
    )
}

export default MainContent