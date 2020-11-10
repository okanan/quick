import React from 'react'
import './styles/Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../images/logopokemon.png'

class Navbar extends React.Component {

  state = {
  }



  render() {
    return (
      <div className="navbar-container">
        <img src={Logo} alt="pokemon icon"/>
        <div className="search">
          <SearchIcon/>
          <input onChange={this.props.onChange} type="text" placeholder="Search"/>
        </div>
      </div>
    )
  }
}

export default Navbar;
