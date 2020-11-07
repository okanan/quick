import React, { useEffect } from 'react';
import './styles/Characters.css';
import Loader from './Loader';

function Characters() {
  const [result, setResult] = React.useState([]);
  const [pokemon, setPokemon] = React.useState([]);
  const [load, setLoad] = React.useState('true');
  const arr = [];

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
        fetch(item.url)
          .then((response) => response.json())
          .then((pokemones) => arr.push(pokemones));
        setPokemon(arr);
        }),
      ));
  },[]);

  setTimeout(() => {
    setLoad(false);
    }, 1000);

  return (
  <div className="cards-container">
      { load ? (
        <Loader/>
      ) : (
      pokemon.map((img, i) => (
        <div id={img.id} key={img.id}>
          <div className="card">
            <img  src={img.sprites.front_default} alt='pokemon' />
              <div >
                <h5 >{img.name}</h5>
                <h6>type: {img.types[0].type.name}</h6>
              </div>
          </div>
        </div>
      ))
      )}
  </div>
  );
}

export default Characters;