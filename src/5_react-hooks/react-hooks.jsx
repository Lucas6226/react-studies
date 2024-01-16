import { React, useState } from 'react';
export default AllHooks;


function AllHooks() {
    return (
        <>
            <ThreeCounter_SimpleCounters/>
            <Updater/>
            <Lista/>
        </>
    )
}

// useState()     
function SimpleCounter() { // inner ate next function
    const [count, setCount] = useState(0)

    return (
        <p onClick={() => {setCount(count + 1)}}>
            Você clicou {count} vezes nesse paragrafo
        </p>
            )
} 
function ThreeCounter_SimpleCounters() {
    const [count, setCount] = useState(0)
    function up() {
        setCount(n => n + 1)
        setCount(n => n + 1)
        setCount(n => n + 1)
    }

    return (
        <>
            <SimpleCounter/>
            <SimpleCounter/>
            <p onClick={up}> somar 3 {count}</p>
        </>
    )
}


// ...spread   
function Updater() {
    const [person, setPerson] = useState({
        title: 'Blue Nana',
        artwork: {
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg'
        },
        datas: {
            name: 'Niki de Saint Phalle',
            age: 23,
            sex: 'Male'
        }
    })    

    function atualizar(v) {
        setPerson({
            ...person,
            datas: {
                ...person,
                name: v.target.value
            }
        })
    }
    function upAddress(e) {
        let mutabPerson = {...person}
        mutabPerson.artwork.city = e.target.value
        setPerson(mutabPerson)
    }
    
    return (
        <>
            <p style={{backgroundColor: "red"}}>Mudança em tempo real </p>
            <p>
                <label htmlFor="curso">Nome: {person.datas.name}</label>
                <input value={person.datas.name} type="text" id="curso" onChange={atualizar}/>
            </p>
            <p>
                <label htmlFor='endereço'>Endereço: {person.artwork.city}</label>
                <input type="text" name="endereço" id="endereço" onChange={upAddress} />
            </p>
        </>
    )
}


// ...array.slice(x, y)    
function Lista() {
    const [accounts, setAccounts] = useState([
        {name: "joe", age: 23},
        {name: "alex", age: 98},
        {name: "lucas", age: 17},
        {name: "julio", age: 23},
        {name: "junior", age:34},
        {name: "josé", age: 24}
    ])
    const [registro, setRegistro] = useState({name: '', position: -1, age: 0})


    function insserir() {
        let suporte = [...accounts]
        if (registro.name != '' && 
        registro.position <= suporte.length &&
        registro.position > 0 &&
        100 > registro.age &&
        registro.age > 0) {

            let finalPos = registro.position + 1
            
            suporte = [
                ...suporte.slice(0, registro.position-1),
                {name: registro.name, age: registro.age},
                ...suporte.slice(registro.position-1)
            ]

        } else {
            alert("Nome, idade ou posição invalido")
        }
        setAccounts(suporte)
    }

    
    return (
        <div style={{backgroundColor: "aqua"}}>
            <p>
                <label htmlFor='excluir'>Adicionar pessoa:</label>
                <input type="text" name="excluir" id="excluir" onChange={e => {setRegistro({...registro, name: e.target.value})}}/>
            </p>

            <p>
                <label htmlFor="listPosition">Posição: </label>
                <input type="number" id='listPosition' 
                    onChange={e => {setRegistro({...registro, position: e.target.value})}} />
            </p>
            <p>
                <label htmlFor="listAge">idade: </label>
                <input type="number" id='listAge' 
                    onChange={e => {setRegistro({...registro, age: e.target.value})}} />
            </p>
    
                <button style={{height: "25px", width: "100px"}} onClick={insserir}>Adiconar</button>
            
            <ol>
                {accounts.map((acc, i) => {
                    return <li key={i}>{acc.name} de {acc.age} anos</li>
                })}
            </ol>
        </div>
    )
}