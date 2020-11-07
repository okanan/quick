import React, { Component } from 'react'
import './styles/Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../images/logopokemon.png'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <img src={Logo} alt="pokemon icon"/>
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder="Search"/>
        </div>
      </div>
    )
  }
}
