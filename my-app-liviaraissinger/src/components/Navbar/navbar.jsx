import styles from "./navbar.module.css";
import logo from '../../assets/serratecpng.png';
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className={styles.navbar}>
            <img
                src={logo}
                alt="Logo Serratec"
                className={styles.logo} />

            <ul className={styles.navItens}>
                <li onClick={() => navigate("/Questao1")}>Questao1</li>
                <li onClick={() => navigate('/Questao2')}>Questao2</li>
                <li onClick={() => navigate('/Questao3')}>Questao3</li>
            </ul>
        </nav>
    );
}