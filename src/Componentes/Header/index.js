import React from 'react'
import Nike from "../../images/imagen.svg"
import { Link } from 'react-router-dom'
import {Barra} from '../Buscador/Barra.js'

export const Header = () => {
  return (
    <header>
        
        <Link to=''>
            <div className='logo'>
                <img src={Nike} alt='logo' width="120"/>

            </div>
        </Link>
        
        
        <div className='user'>
            <box-icon name="user"></box-icon>
        </div> 
        <div className='cart'>
            <box-icon name="cart"></box-icon>
            <span className='item__total'>0</span>
        </div>
    </header>
  )
}
