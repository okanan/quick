import React, { Component } from 'react';
import FilterIcon from '@material-ui/icons/Build';
import './styles/Filter.css'

export default class Filter extends Component {
  state = {
    loading: false,
    error: null,
    data: {
    }
  }

  componentDidMount(){
    this.fetchTypes();
    this.fetchColors();
    this.fetchGenders();
  };

  fetchTypes = async () => {
    const typesResponse = await fetch('https://pokeapi.co/api/v2/type');
    const datatypes = await typesResponse.json();
    console.log(datatypes);

    this.setState({data: datatypes})
  }
  fetchColors = async () => {}
  fetchGenders = async () => {}


  // fetchTypes = async () => {
  //   this.setState({loading: true, error: null})
  //   try {     
  //     const res = await fetch('https://pokeapi.co/api/v2/type');
  //     const type = await res.json();
  //     console.log(type.results);


  //     this.setState({loading: false, error: null, types: type.results})

  //     console.log(this.state);

  //   } catch (error) {
  //     this.setState({loading: false, error: error})
      
  //   }

  // }


  render() {
    return (
      <>
      <div className="filter-header">
          <h2>Filters </h2>
          <FilterIcon/>
        </div>
      <div className="filter-container">
        <div className="type-filter">
          <p>Type</p>
          <hr/>
          <ul>
            {this.state.data.results.map(type => (
                <li className="col-6 col-md-3" key={type.id}>
                  <h1>{type.name}</h1>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="color-filter">
          <p>Color</p>
          <hr/>
        </div>
        <div className="gender-filter">
          <p>Gender</p>
          <hr/>
        </div>
      </div>
      </>
    )
  }
}
