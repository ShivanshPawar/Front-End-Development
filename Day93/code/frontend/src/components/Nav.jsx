import React from 'react'
import { NavLink } from 'react-router';

const Nav = () => {
  return (
    <nav className='mb-10 pt-5 flex justify-center items-center gap-x-5 '>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/login">Login</NavLink>
    </nav>
  )
}

export default Nav