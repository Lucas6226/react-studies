import { React, useState } from "react";
import ReactDOM from "react-dom/client";

import Hello from "./1_basico/basico.jsx";
import Estilizado from "./2_com-css/com-css.jsx";
import { VerificadorDeLogging, AccountsInfo } from "./3_com-dados/com-dados.jsx";
import Interativo from "./4_interatividade/interatividade.jsx";
import AllHooks from "./5_react-hooks/react-hooks.jsx";
import ContabilizadorClicks from "./6_dados-compartilhados/dados-renderizados.jsx";

function Unidos() {
    const defaultStyle = {border: "1px solid red"}
    
    return (
        <>
            <Hello name="lucas"/>
            <Estilizado/>
            <div>
                <VerificadorDeLogging logging={true}/>
                <AccountsInfo/>
            </div> 
            <Interativo/>
            <ContabilizadorClicks/>
            <AllHooks/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Unidos/>
)
