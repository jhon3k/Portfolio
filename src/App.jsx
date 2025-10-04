import { Outlet, Link } from "react-router-dom";
import "./Styles/components/Nav.sass";
import "./Styles/components/Footer.sass";

export default function App() {
    return (
            <div>
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
                © Desenvolvido por Jhon Arlison da Silva Feitosa
            </footer>
        </div>
    )
}