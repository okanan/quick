import React, { useEffect } from 'react';
import './styles/Characters.css';
import Loader from './Loader';

export default function Characters() {

  const [result, setResult] = React.useState([]);
  const [pokemon, setPokemon] = React.useState([]);
  const [load, setLoad] = React.useState('true');
  var [next, setNext] = React.useState(0);
  const arr = [];

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${next}`)
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
        fetch(item.url)
          .then((response) => response.json())
          .then((pokemones) => arr.push(pokemones));
        setPokemon(arr);
        }),
      ))
      .then(next += 20);
  },[]);

  setTimeout(() => {
    setLoad(false);
    }, 1000);

  const handleSubmit = () => {
    setNext(next += 20)    
    console.log(next);
  }

  return (
  <div className="cardscontainer">
      { load ? (
        <Loader/>
      ) : (
      pokemon.map((img, i) => (
        <div id={img.id} key={img.id}>
          <div className="card">
            <img  src={img.sprites.front_default} alt={img.name}/>
              <div>
                <h5 >{img.name}</h5>
                <h6>type: {img.types[0].type.name}</h6>
              </div>
          </div>
        </div>
      ))
      
      )}
    <button onClick={() => handleSubmit()}>Load more</button>
  </div>
  );
}

// export default Characters;