import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button/button'
import { Navbar } from '../../components/Navbar/navbar'
import styles from './home.module.css'
import { Footer } from '../../components/Footer/footer'

export function HomePage() {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <Navbar />
            <h1 className={styles.titulo}> Home</h1>
            <div className={styles.botoes}>
                <p>Alterar Tema (Claro/Escuro)</p>
                <Button onClick={() => navigate('/Questao1')} title="Questao1" />
                <p>Mudar Texto com Botão</p>
                <Button onClick={() => navigate('/Questao2')} title="Questao2" />

                <p>Lista de Tarefas</p>
                <Button onClick={() => navigate('/Questao3')} title="Questao3" />
            </div>
<Footer/>
        </div>
    )
}