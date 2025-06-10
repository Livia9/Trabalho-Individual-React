import { Button } from "../../components/Button/button";
import { useState } from 'react';

export function Questao2() {
    const [mensagem, setMensagem] = useState("Olá!");

    const handleClick = () => {
        setMensagem("Bem-vinda(o)!");
    }

    return (
        <div>
            <h1>Questão 2 – Texto</h1>
            <p>{mensagem}</p>
            <Button
                type="button"
                title="Entrar"
                onClick={handleClick}
            />
        </div>
    );
}
