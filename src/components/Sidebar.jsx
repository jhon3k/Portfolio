import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import curriculo from "../assets/document/curriculo.pdf"

import avatar from '../assets/img/j.png'
import '../Styles/components/sidebar.sass'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={avatar} alt="Jhon Feitosa" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />  
            <InformationContainer />
            <a href="../assets/document/curriculo.pdf" download={curriculo} className="btn">
                Download corriculo
            </a>
        </aside>
    )
}

export default Sidebar