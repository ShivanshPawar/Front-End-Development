import React from 'react'
import {Route, Routes } from 'react-router';
import About from '../pages/About';
import Recipes from '../pages/Recipes';
import Home from '../pages/Home';
import Create from '../pages/Create';

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/create' element={<Create/>} />
    </Routes>
  )
}

export default Mainroutes