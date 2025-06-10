import { Button } from '../../components/Button/button'
import { Navbar } from '../../components/Navbar/navbar'
import styles from './home.module.css'

export function HomePage() {
    return (
        <div>
            <Navbar />
            <h1> home</h1>
            <Button title="Questao1"> Questao1</Button>
            <Button title="Questao2"> Questao2</Button>
            <Button title="Questao3"> Questao3</Button>

            {/* ====  */}
            <Button
                type="button"
                title="Questao3"
                onClick={() => console.log('clicou no botão')}
            />

            <footer className={styles.footer}>
                <p>&copy; 2025 Serratec - Livia Raissinger</p>
            </footer>
        </div>
    )
}