import { React } from 'react';
import "./com-css.css";
export default Estilizado;


function Estilizado() {
    const style = {
        titulos: {
            color: "yellow",
            fontSize: "5em"
        },
        divs: {
            height: "300px",
            width: '300px',
            backgroundColor: "aqua",
            paragrafos: {
                color: "red",
                fontFamily: "Helvetica"
            }
        }
    }
    
    return (
        <>
            <h1 style={ style.titulos}>Opção de titulo</h1>
            <div style={style.divs}>
                <p style={ style.divs.paragrafos}>Opção de paragrafo</p>
            </div>

            <p style={{color: "green"}}>Estilos inline com o react</p>
            <p className='Colorize'>Aprendendo sobre as classes do react</p>
        </>    
    )
}

