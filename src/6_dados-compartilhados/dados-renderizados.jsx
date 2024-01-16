import { React, useState } from 'react';
export default ContabilizadorClicks;


function ContabilizadorClicks() {
    const [count, setCount] = useState(0)
    const adicionar = () => setCount(count + 1)
        
    return (
        <>
            <ContadorMultiplo valor={count} onClick={adicionar}/>
            <ContadorMultiplo valor={count} onClick={adicionar}/>
        </>
    )
}

function ContadorMultiplo(props) {    
    return (
        <p onClick={props.onClick}>Clicks sincronizados e atualizados {props.valor} clicks</p>
    )
}