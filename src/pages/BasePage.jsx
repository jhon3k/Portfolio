import MainContent from "../components/MainContent"
import Sidebar from "../components/Sidebar"

import "../Styles/components/BasePage.sass"

const BasePage = () => {
    return (
        <main id="portfolio">
        <Sidebar />
        <MainContent />
        </main>
    )
}

export default BasePage