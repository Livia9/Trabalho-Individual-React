import { Button } from "../../components/Button/button";
import { useState } from 'react';
import { Navbar } from "../../components/Navbar/navbar";
import { Footer } from "../../components/Footer/footer";
import styles from "./texto.module.css";

export function Questao2() {
    const [mensagem, setMensagem] = useState("Olá!")

    const handleClick = () => {
        setMensagem("Bem-vinda(o)! :)")
    }
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.conteudo}>
                <h1>Questão 2 – Texto</h1>
                <p className={styles.mensagem}>{mensagem}</p>
                <Button
                    type="button"
                    title="Entrar"
                    onClick={handleClick}
                />
            </main>
            <Footer />
        </div >
    )
}
