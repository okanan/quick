import React from 'react';
import './App.css';
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Characters from '../components/Characters'
import Search from '../components/Search'

export default class App extends React.Component {

  state = {
    search:false,
  };

  handleChange = (e) => {
    this.setState({input: e.target.value,search: true})
  }

  render(){
    if(this.state.search){
      return(
        <div className="characters">
          <Characters/>
        </div>
      )
    }else{
      <div className="characters">
          <Search/>
        </div>
    }
    return (
      <>
        <div className="container">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="filter">
            <Filter/>  
          </div>
          <div className="characters">
            <Characters/>
          </div>
        </div>
      </>
    );
  }
}

// export default App;
