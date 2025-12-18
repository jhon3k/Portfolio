import { Outlet, Link } from "react-router-dom";
import { FaAngleUp } from "react-icons/fa6";
import ScrollToTop from "./components/ScrollToTop";

import "./Styles/components/Nav.sass";
import "./Styles/components/Footer.sass";

export default function App() {
    return (
            <div>
                <ScrollToTop />

                <nav id="nav">
                <Link to="/">
                    <h2>Home</h2>
                </Link>
                <Link to="/projects">
                    <h2>Projetos</h2>
                </Link>
            </nav>
            <Outlet />
            <footer>
                <p>© Desenvolvido por Jhon Arlison da Silva Feitosa</p>
            </footer>
            <button 
                className="top-page"
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }}
                >
                    <FaAngleUp />
            </button>
        </div>
    )
}