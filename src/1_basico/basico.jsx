import { React} from 'react';
export default Hello;

function Hello({ name }) {
    function capitalize(s) {
        let upper = s[0].toUpperCase()
        s = s.substring(1)
        return (upper + s)
    }
    
    return (
        <h1>Olá mundo, e { capitalize(name) }!</h1>
    )
}