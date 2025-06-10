import { Outlet } from "react-router-dom";
import "./Styles/components/Nav.sass";
import "./Styles/components/Footer.sass";

// geralmente no seu App.jsx ou main.jsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function App() {
    return (
            <div>
                <nav id="nav">
                <a href="/">
                    <h2>Home</h2>
                </a>
                <a href="/projects">
                    <h2>Projetos</h2>
                </a>
            </nav>
            <Outlet />
            <footer>
                © Desenvolvido por Jhon Arlison da Silva Feitosa
            </footer>
        </div>
    )
}