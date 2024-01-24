# react-studies

# Criando um projeto

- Iniciando o ambiente react
    
    para iniciar o ambiente react com vite precisamos seguir os seguintes passos
    
    - primeira vez
        
        usar os seguintes comandos no terminal
        
        1. `cd diretorio-desejado`
        2. `npm init vite`
        3. `npm install`
        4. `npm run dev`
    - outras vezes
        
        usar os seguintes comandos no terminal
        
        1. `cd nome-do-projeto`
        2. `npm run dev`
- configurações essenciais
    
    
    Para que o arquivo js/jsx funcione corretamente você deve adicionar algumas linhas no começo sendo elas
    
    1. `import React from "react";` para importar o react.
    2. `import ReactDOM from 'react-dom';` para importar o reactDOM.
    3. `import '../style.css';` para linkar o react com css do projeto.
    4. `export default Exemplo;` Para exportar um componente.
    5. `import Exemplo from “./componentes/componente”;` Para importar apenas um item de um arquivo que exporta apenas um item. 
    6. `export {Exemplo, Teste};` Para exportar mais de um componente.
    7. `import {Exemplo, Teste} from “./componentes/componente”;` para importar arquivos.
    
    Além disso é indicado que se crie um arquivo chamado `maisn.jsx` onde terá um componente principal com todos os outros aninhados dentro do próprio. Podemos fazer isso como mostrado abaixo
    
    ```jsx
    import React from "react";
    import ReactDOM from "react-dom";
    import "./style.css";
    
    ReactDOM.createRoot(document.getElementById('root')).render(
    	<>
    		<p>olá Mundo<p/>
    		<p>Meu nome é lucas</>
    	</>
    )
    ```
    
- Todos os componentes precisarem ser envolvidos por uma única tag, podemos usar a sintaxe `<></>` para fazer um fragmento react
- **Ctrl + c** no terminal permite fechar o servidor react
- no devTools do chorme existe uma aba chamada **user messages** que mostra os erros do react

# Componentes básicos

Os componentes permitem dividir e aninhar as aplicações em partes

- JSX
    
    O JSX é como um HTML porem um pouco mais avançado e dentro de um arquivo JS/JSX. Dentro do próprio, podemos adicionar variáveis ou invocar funções JS usando `{}` para interpolar. 
    
    O JSX é retornado por componentes com dados, variáveis e informações, que passam por um pré-processamento do componente antes de serem renderizados.
    
    As tags JSX tem a sintaxe semelhantes a html porem são capitalizadas e sempre devem ser fechadas, em alguns casos pode-se ter apenas o fechamento.  
    

Exemplo de componente simples 

As variáveis das funções são representadas nas tags como atributos. Caso aja mais de uma é necessário que as próprias sejam colocadas entre chaves separadas por virgulas. Caso sejam muitas variáveis existe a possibilidade de usar a variável *coringa* `props` que gera um objeto com todos os atributos como chaves e seus valores respectivos. No caso do exemplo abaixo a primeira linha seria substituída pelo seguinte; `function App(props) {` e as variáveis `name` e `sexo` por [`props.name`](http://props.name) e `props.sexo`.  

Se for definido um parâmetro de componente com um nome de atributo já existente este mesmo será sobre posto para que o componente funcione, por exemplo; uma tag de chamada de evento como `onClick=””` atribuirá um valor a uma variável chamada `onClick` dentro do componente e não terá sua função padrão.

Os componentes devem ser funções puras, oque significa que uma entrada deve gerar sempre a mesma saída. Os componentes devem criar oque forem usar e usar o que criaram apenas, não devem alterar nenhum dado ou informação externa ao escopo da função do componente.

```jsx
function App({ name, sexo }) {
		let user = {
			idade: 17,
			foto: "./assets/foto"
		}

    return (
        <>
					 <p>Olá mundo!</p>
          <h1>Nome:{name} Sexo:{sexo} Idade:{user.idade}</h1>
					 <img src={user.foto}
        </>
    )
}
```

- Podemos usar a sintaxe de react fragments para englobar mais de um componente ou tag `<></>`

# Estilizando componentes

Para introduzir css aos componentes podemos usa-lo de forma inline passando um objeto que tenha atributos css (com o nome convertido para jsx) e seus valores respectivos. Essa forma é pratica pois podemos aninhar as classes e dividir as configurações como no css padrão.

Além disso a á possibilidade de importarmos um css externo de uma pasta local (ou não), fazendo com que ele se aplique automaticamente ao componente.  

```jsx
import "./com-css.css";

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
            <h1 style={ style.titulos}>Opão de titulo</h1>
            <div style={style.divs}>
                <p style={ style.divs.paragrafos}>Opção de paragrafo</p>
            </div>

            <p style={{color: "green"}}>Estilos inline com o react</p>
            <p className='Colorize'>Aprendendo sobre as classes do react</p>
        </>    
    )
}
```

- No react não usamos a propriedade `class=””`, usamos `className=””`
- [https://css-tricks.com/different-ways-to-write-css-in-react/](https://css-tricks.com/different-ways-to-write-css-in-react/)

# Mostrando dados em componentes

Componentes e pedaços de JSX podem ser tratados como objetos (assim como tudo no JS), o que significa que podemos atribui-los a variáveis, ou não, usando estruturas condicionais, e consequentemente renderizá-los, ou não, seja nos fragmentos de retorno ou dentro de outro componentes.

```jsx
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
```

- A sintaxe de interpolação de `{}` também suporta o operador condicional.
- Também podemos usar o operador `&&` para passa algo apenas se a variável for verdadeira.

Também podemos usar funções de laços para geral múltiplos componentes semelhantes baseando-se em listas de objetos como mostrado abaixo, porem é necessário que cada objeto igual tenha uma `key=””` pró.

- Um bom truque é usar o operador condicional dentro das listas de estilo para aplicar ou não um estilo.

```jsx
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
                    <h1>finalizado</h1>
                )}
            </ul>
        </div>
        
    ))
    
    return (mapInfo)
}
```

# Criando eventos e interatividade

Para adicionarmos eventos ao react usamos as chamadas de evento inline pelo HTML pois o react gera os componentes dinamicamente oque inviabiliza métodos genéricos do JS. Mesmo sendo semelhante não podemos adicionar o par de parênteses ao final da chamada pois estamos apenas informando ao react o nome da função e não a invocando de fato.

As funções chamadas pelos eventos tem apenas um objeto por padrão, que deve ser declarado. Esse objeto contem todas as informações de manipulação da tag ou componente. Por padrão a variável é definida como `e`, ela representa uma variável que contem o evento. 

- `e.stopPropagation()` impede o disparo dos manipuladores de eventos anexados às tags acima.
    
    Se um evento `onClick=””` for adicionado a uma `div`, por exemplo, a função correspondente ao próprio se estendera para seus filhos também (a não ser pelo evento `onScroll=””`). Essa peculiaridade pode ser evitada adicionando o parâmetro `e` e a função `stopPropagation()` a um evento igual no filho do componente que deseja não executar a função do componente pai, assim ele e seus subsequentes serão exentos da mesma.
    
- `e.preventDefault()` impede o comportamento padrão do navegador para os poucos eventos que o possuem.
    
    Algumas tags HTML tem eventos já pré estabelecidos por padrão, como o `<form><form/>` que recarrega a pagina quando o `submit` é pressionado, no react á a possibilidade de usar a função `preventDefault()`, aninhada a outra função com o parâmetro `e`, em eventos iguais ao que convocam essas funcionalidades, fazendo assim com que elas sejam anuladas.
    

```jsx
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
        <div onClick={handleClick}>
            <button onClick={alerta} style={{height: "50px", width: "100px"}}>Botão de alerta</button>
            <form action="" onClick={e => {e.stopPropagation(), e.preventDefault()}}>
                <input type="text" name="name" id="name"/>
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}
```

- É comum que os eventos sejam nomeados com *handle* seguido pelo nome do evento por exemplo `onClick={handleClick}`

# React hooks e atualizações na tela

- O que são hooks
    
    Para fazer com que dados sejam guardados mesmo com os componentes sendo renderizados e desrenderizados constantemente podemos usar a função `useState()` do react. Basta importa-la e criar uma lista de dois valores. O primeiro valor será o que guardara o dado, e o segundo valor é oque recebera a função de atualização do dado.
    
    As funções chamadas *react hooks* precisam ser importadas a parte e servem para atualizar e armazenar dados entre renderizações de componentes, todas elas começam com *use* como `useExemplo()` ou `useState()`.
    
    As hooks são mais restritas e limitadas que funções padrão do js por tanto tem algumas condições especificas. Podem ser chamadas na primeira linha dos componentes ou abaixo de outras hooks. Caso você precise fazer o uso delas em algum tipo de estrutura de controle ou em um loop, extraia-as para um outro componente e aloque o próprio dentro do primeiro componente no lugar desejado.   
    
- Funcionamento
    
    Quando o react lê um componente ele enfileira as hooks e faz uma única atualização após ler todas elas, oque faz com que uma variável seja atualizada apenas na próxima renderização. Caso você queira atualizar uma variável antes da próxima atualização basta passar uma função como parâmetro que o seu primeiro argumento é interpretado como o valor do hook e atualizado antes da renderização. 
    
- Spread para atualizar objetos
    
    Quanto trabalhamos com hooks todos os valores devem ser sobrepostos com a função correta do react, e não substituídos. Em caso de objetos é imprático ter de reescrever todo o objeto a cada atualização. A sintaxe spread permite que representemos todas os elementos não reescritos com o nome da variável após três pontos. Basta usar essa sintaxe antes da declaração de novos dados. Também é recomendado o uso de funções de loops como `map()`, `find()` e etc…
    
    ```jsx
    function upDatas(e) {
        let mutabPerson = {...person, name: e.target.value}
        setPerson(mutabPerson)
    }
    ```
    
- Slice para atualizar matrizes e arrays
    
    Assim como os objetos as matrizes devem ser sobrepostas por uma copia com as atualizações desejadas, usando a função correta. É indicado o uso de funções que gerem um novo array a partir do array fixo, e só então passar esse novo array para a função de atualização e torna-lo fixo. Um método que facilita isso é o `slice(começo, fim)` que permite fatiar arrays. Com ele podemos usar a sintaxe:
    
    ```jsx
    const lista = [...]
    
    const newArray = [
    	...lista.slice(0, 23), //representa o index 0 até o 22 do array "lista"
    	item-desejado, //item 23
    	...lista.slice(23) // representa o index 24 até o final do array "lista"
    ]
    ```
    
- Immer é uma biblioteca que facilita a atualização de objetos e matrizes

```jsx
function Contador() {
    const [count, setCount] = useState(0)
    const [contagem, setContagem] = useState(0)
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
    
    function contar() {
        setCount(count + 1)
    }

    function contabilizar() {
        setContagem(n => n + 1)
        setContagem(n => n + 1)
        setContagem(n => n + 1)
    }

    function atualizar(v) {
        setPerson({
            ...person,
            datas: {
                ...person,
                name: v.target.value
            }
        })
    }

    return (
        <>
            <p onClick={contar}>Você clicou {count} vezes nesse paragrafo</p>
            <p onClick={contabilizar}> somar 3 {contagem}</p>
            <label htmlFor="curso-js">Mudança em tempo real  --- {person.datas.name} <input value={person.datas.name} type="text" name="curso" onChange={atualizar}/></label>
        </>
    )
}
```

- É recomendado que dados de processos distintos não sejam armazenados na mesma hook.
- [https://react.dev/reference/react](https://react.dev/reference/react) para ver as hooks existentes.
- hooks frequentes
    - `useState()` exemplo acima
    - `useEffect()`
        
        escreve ai pnc
        

# Compartilhando dados entre componentes

Para compartilhar dados entre componentes basta transferir os hooks, funções, e métodos de pré-processamento em geral, que registram as informações relevantes para um componente de patamar mais alto. Então passa-se os dados, informações e chamadas através de parâmetros para os componentes subsequentes que os necessitem.

- Sem compartilhamento de dados
    
    ```jsx
    function Contador() {   //componente filho
    		const [count, setCount] = useState(0)
    		const adicionar = () => setCount(count + 1)
    
        return (
            <p onClick={adicionar}>Você ja deu {cont} clicks</p>
        )
    }
    
    function ContabilizadorClicks() {   //componente pai
        return (
            <>
                <Contador/>
                <Contador/>
                <Contador/>
            </>
        )
    }
    ```
    
- Com compartilhamento de dados
    
    ```jsx
    function ContadorMultiplo({ valor, onClick }) {   // componente filho
        return (
            <p onClick={onClick}>Você ja deu {valor} clicks</p>
        )
    }
    
    function ContabilizadorClicks() { //componente pai
        const [count, setCount] = useState(0)
        const adicionar = () => setCount(count + 1)
         
            
        return (
            <>
                <ContadorMultiplo valor={count} onClick={adicionar}/>
                <ContadorMultiplo valor={count} onClick={adicionar}/>
                <ContadorMultiplo valor={count} onClick={adicionar}/>
            </>
        )
    }
    ```
    
- é essencial que a chamada de evento seja passada através de um atributo, e dentro de um componente filho, atribuída a uma tag HTML. Os componentes react são pré processados e viram apenas funcionalidades para o HTML do componente (que realmente existe) que é posteriormente injetado na pagina, com as chamadas de evento, fazendo assim com que qualquer chamada de evento atribuídas a componentes inútil, mas não as que são atribuídas diretamente ao HTML do componente.

---

[https://react.dev/learn/adding-interactivity](https://react.dev/learn/updating-objects-in-state#write-concise-update-logic-with-immer)

- upando aplicações vite
    
    [https://www.youtube.com/watch?v=FsVtjplC8As&ab_channel=DevPedroBicalho](https://www.youtube.com/watch?v=FsVtjplC8As&ab_channel=DevPedroBicalho)
    
    - dando push com o vite
        
        `cd ../diretorio`
        
        `npm run build`
        
        `git add dist -f`
        
        `git commit -m “comit desejado”`
        
        `git subtree push —prefix dist origin gh-pages`
        
