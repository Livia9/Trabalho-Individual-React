import { Footer } from "../../components/Footer/footer";
import { Navbar } from "../../components/Navbar/navbar";
import styles from "./tema.module.css";
import { useState } from "react";

export function Questao1() {
    const [temaClaro, setTemaClaro] = useState(true);

    const alternarTema = () => {
        setTemaClaro(!temaClaro);
    };

    return (
        <div className={temaClaro ? styles.fundoClaro : styles.fundoEscuro}>
            <Navbar />

            <main className={styles.conteudo}>
                <h1>Questão 1 - Tema</h1>
                <button
                    onClick={alternarTema}
                    className={temaClaro ? styles.botaoClaro : styles.botaoEscuro}
                >
                    {temaClaro ? "Tema Escuro" : "Tema Claro"}
                </button>
            </main>

            <Footer />
        </div>
    )
}
