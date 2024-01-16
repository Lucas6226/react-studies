import { React } from 'react';
import { info } from "../data.jsx"
export { VerificadorDeLogging, AccountsInfo }; 

function VerificadorDeLogging({ logging }) {
    // versão com o operador condicional 
    return (
        <>
            <p>De acordo com o nossos dados:</p>
            {logging ? (
                <p>Você esta logado</p>
            ):(
                <p>Você não esta logado</p>
            )}
            <p>{logging && <h1>logado</h1>}</p>
        </>
    )
}

function AccountsInfo() {
    // array of data.jsx
    const mapInfo = info.map(inf => (
        <div key={inf.id}>
            <h3 style={inf.style}>{inf.curso}</h3>
            <ul >
                <li style={{color: (inf.progresso == 100) ? "green" : "red"}}>
                    Progresso: {inf.progresso}
                </li>
                <li>Atividades feitas: {inf.AtividadesFeitas}</li>
                <li>Atividades totais: {inf.AtividadesTotais}</li>
                {((inf.AtividadesFeitas == inf.AtividadesTotais && inf.progresso == 100)) && (
                    <h1 style={inf.style}>finalizado</h1>
                )}
            </ul>
        </div>
        
    ))
    
    return (mapInfo)
}