import React from 'react';
import Loader from './Loader';

class Charactersclass extends React.Component {

  state = {
    loading: true,
    error: null,
    page: 0,
    pokemoninfo: {},
    search: false,
  };

  componentDidMount(){
    this.fetchPokemons()
  }

  fetchPokemons = async () => {
    this.setState({loading: true, error:null})
    try {
      const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${this.state.page}`)      
      let pokemonData = await resPokemon.json();
      // console.log(pokemonData);

      pokemonData.results.map(async (item) => {
        const pokemonsinfo = await fetch(item.url);
        const pokemonsinfodata = await pokemonsinfo.json();
        console.log(pokemonsinfodata)
        this.setState({...this.state,pokemoninfo:pokemonsinfodata})
        return pokemonsinfodata;
      }
      ,[]);

      this.setState({loading: false, error:null})

    } catch (error) {
      this.setState({error: error})
    }
  }



  render() {

    if(this.state.error){
      return `Error: ${this.state.error.message}`;
    }

    
    return (
      <div>
                
        {this.state.loading && (
          <div className="loader">
            <Loader/>
          </div>
        )}
      </div>

    )
  }
};

export default Charactersclass;
