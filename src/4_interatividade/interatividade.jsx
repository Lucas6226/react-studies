import { React, stopPropagation, preventDefault } from 'react';

export default function Interativo() {
    function alerta(e) {
        e.stopPropagation()
        window.alert("botão precionado")
    }
    
    function handleClick() {
        alert('click na div')
    }
    
    return (
        <div onClick={handleClick} style={{backgroundColor: "orange"}}>
            <button onClick={alerta} style={{height: "50px", width: "100px"}}>Botão de alerta</button>
            <form action="" onClick={e => {e.stopPropagation(), e.preventDefault()}}>
                <input type="text" name="name" id="name"/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
} 