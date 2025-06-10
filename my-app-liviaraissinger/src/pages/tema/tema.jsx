import { Button } from "../../components/Button/button";

export function Questao1() {
    return (
        <div>
            <h1> questao 1 tema </h1>
            <Button
                type="button"
                title="tema"
                onClick={() => console.log('clicou no botão')}
            />
        </div>
    )
}
// Crie um componente com:
//  Um botão com o texto que muda entre "Tema Claro" e "Tema Escuro".
// Ao clicar, o fundo da tela e o texto do botão devem alternar entre os dois
// temas.