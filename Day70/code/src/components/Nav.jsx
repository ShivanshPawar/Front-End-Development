import React from 'react'
import { Link, NavLink } from 'react-router';

// Day 82

const Nav = () => {
  return (
    <div className='flex justify-center gap-10 p-5'>
        <NavLink className={(e) => (e.isActive ? "text-amber-300" : "")} to="/">Home</NavLink>
        <NavLink className={(e) => (e.isActive ? "text-amber-300" : "")} to="/product">Product</NavLink>
        <NavLink className={(e) => (e.isActive ? "text-amber-300" : "")} to="/service">Service</NavLink>
        <NavLink className={(e) => (e.isActive ? "text-amber-300" : "")} to="/about">About</NavLink>
    </div>
  )
}

export default Nav