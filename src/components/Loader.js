import React from 'react'
import './styles/Loader.css'

export default function Loader() {
  return (
    <div className="loader-container">
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
