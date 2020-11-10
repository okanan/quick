import React, { Component } from 'react';
import FilterIcon from '@material-ui/icons/Build';
import './styles/Filter.css'

export default class Filter extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      results: [],
    },
    gender: {
      results: [],
    }
  }

  componentDidMount(){
    this.fetchTypes();
    // this.fetchColors();
    this.fetchGenders();
  };

  fetchTypes = async () => {
    const typesResponse = await fetch('https://pokeapi.co/api/v2/type');
    const datatypes = await typesResponse.json();
    // console.log(datatypes);

    this.setState({data: datatypes})
  }
  // fetchColors = async () => {}
  fetchGenders = async () => {
    const genderRes = await fetch('https://pokeapi.co/api/v2/gender');
    const genderData = await genderRes.json();
    console.log(genderData);
    this.setState({gender: genderData})
  }




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
          <div className="typeoptions">
            <ul>
              {this.state.data.results.map( type => (
                <li key={type.id}>
                  <label>
                    <input type="checkbox" id={type.id} className="col-6 col-md-3"  value={type.name}/>
                    {type.name}
                  </label>
                  
                </li>
                ))
              }          
            </ul>
        
          </div>          
        </div>
        <div className="color-filter">
          <p>Color</p>
          <hr/>
        </div>
        <div className="gender-filter">
          <p>Gender</p>
          <hr/>
          <ul>
              {this.state.gender.results.map( type => (
                <li key={type.id}>
                  <label>
                    <input type="checkbox" id={type.id} className="col-6 col-md-3"  value={type.name}/>
                    {type.name}
                  </label>
                  
                </li>
                ))
              }          
            </ul>
        </div>
      </div>
      </>
    )
  };
};
