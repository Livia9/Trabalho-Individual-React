import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/home";
import { Questao3 } from "../pages/lista/lista";
import { Questao1 } from "../pages/tema/tema";
import { Questao2 } from "../pages/texto/texto";


export function Rotas() {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Questao1" element={<Questao1 />} />
            <Route path="/Questao2" element={<Questao2 />} />
            <Route path="/Questao3" element={<Questao3 />} />

        </Routes>
    )
}  