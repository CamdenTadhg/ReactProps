import react from 'react'; 
import './Pokecard.css'

const Pokecard = (props) => {
    return (
        <div className="Pokecard">
            <div className="Pokecard-name"><b>{props.name}</b></div>
            <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}/>
            <div className="Pokecard-type">Type: {props.type}</div>
            <div className="Pokecard-xp">EXP: {props.xp}</div>
        </div>
    )
}

export default Pokecard;