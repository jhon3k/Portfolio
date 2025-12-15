import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import '../Styles/components/SocialNetworks.sass'

const socialNetworks = [
    { name: "linkedin", href: 'https://www.linkedin.com/in/jhon-feitosa/' ,icon: <FaLinkedin /> },
    { name: "github", href: 'https://github.com/jhon3k' ,icon: <FaGithub /> },
] 

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.href} target='_brank' className='social-btn' id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetworks