import React from 'react'
import './styles/CharacterCard.css'

export default function CharacterCard() {
  return (
    <>
      <div className="card">
        <img src={this.props.img} alt="pokemonimage"/>
        <p>{this.props.name}</p>
      </div>
    </>
  )
}
