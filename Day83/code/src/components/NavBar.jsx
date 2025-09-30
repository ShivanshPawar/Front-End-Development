import React from 'react'
import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <div className='flex justify-center gap-x-10 text-sm mb-10'>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/">Home</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/recipes">Recipes</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/about">About</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/create">Create Recipe</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/fav">Favorite Recipe</NavLink>
    </div>
  )
}

export default NavBar