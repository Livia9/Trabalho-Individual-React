import { Button } from "../../components/Button/button";
import { useState } from 'react';
import { Navbar } from "../../components/Navbar/navbar";
import { Footer } from "../../components/Footer/footer";
import styles from "./lista.module.css"

export function Questao3() {
    const [tarefa, setTarefa] = useState("")
    const [lista, setLista] = useState([])

    const handleAdicionar = () => {
        if (tarefa.trim() !== "") {
            setLista([...lista, tarefa])
            setTarefa("")
        }
    }
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.conteudo}>
                <h1>Questão 3 - Lista de Tarefas </h1>
                <input
                    type="text"
                    placeholder="Digire sua tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}
                    className={styles.input} />
                <Button type="button"
                    title="Adicionar"
                    onClick={handleAdicionar} />
                {lista.length > 0 && (
                    <div>
                        <ul className={styles.lista}>
                            {lista.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    )
}
