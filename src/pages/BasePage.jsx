import MainContent from "../components/MainContent"
import Sidebar from "../components/Sidebar"

import "../Styles/components/BasePage.sass"

const BasePage = () => {
    return (
        <main id="portfolio">
        <h1>Jhon Arlison da Silva Feitosa</h1>
        <Sidebar />
        <MainContent />
        </main>
    )
}

export default BasePage