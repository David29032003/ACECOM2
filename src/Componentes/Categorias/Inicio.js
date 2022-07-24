import React from 'react'
import { Link } from 'react-router-dom'
import Portada from "../../images/inicio.jpg"

export const Inicio = () => {
  return (
    <div className='inicio'>
        <Link to="/">
            <h1>Inicio</h1>
        </Link>
        <img src={Portada} alt="inicio"/>
    </div>
  )
}
