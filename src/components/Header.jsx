import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Nosotros</NavLink>
        <NavLink to="/product">Productos</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
    </nav>
  )
}
