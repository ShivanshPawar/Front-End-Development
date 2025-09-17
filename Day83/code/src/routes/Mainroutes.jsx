import React from 'react'
import {Route, Routes } from 'react-router';
import About from '../pages/About';
import Recipes from '../pages/Recipes';
import Home from '../pages/Home';
import Create from '../pages/Create';
import SingleRecipe from '../pages/SingleRecipe';

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/recipes/details/:id' element={<SingleRecipe/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/create' element={<Create/>} />
    </Routes>
  )
}

export default Mainroutes