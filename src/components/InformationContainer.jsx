import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../Styles/components/InformationContainer.sass'

const InformationContainer = () => {
    return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3>Telefone</h3>
                    <p>(93)99213-3631</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3>E-mail</h3>
                    <p>jhonfeitosadev@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id='pin-icon' />
                <div>
                    <h3>Localização</h3>
                    <p>Manaus / AM</p>
                </div>
            </div>
        </section>
    )
}

export default InformationContainer