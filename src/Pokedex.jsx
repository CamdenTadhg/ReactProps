import react from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard.jsx'

const Pokedex = (props) => {
    return (
        <div className="Pokedex">
            {props.pokedex.map(p => (
                <Pokecard name={p.name} id = {p.id} type={p.type} xp={p.xp}/>
            ))}
        </div>
    )
}

Pokedex.defaultProps ={
    pokedex: [
        {id: 4, name: 'Charmander', type: 'fire', xp: 62},
        {id: 7, name: 'Squirtle', type: 'water', xp: 63},
        {id: 11, name: 'Metapod', type: 'bug', xp: 72},
        {id: 12, name: 'Butterfree', type: 'flying', xp: 178},
        {id: 25, name: 'Pikachu', type: 'electric', xp: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', xp: 95},
        {id: 94, name: 'Gengar', type: 'poison', xp: 225},
        {id: 133, name: 'Eevee', type: 'normal', xp: 65}
      ]
} 

export default Pokedex;