import React from 'react'
import {Route, Routes } from 'react-router';
import About from '../pages/About';
import Recipes from '../pages/Recipes';
import Home from '../pages/Home';
import Create from '../pages/Create';
import SingleRecipe from '../pages/SingleRecipe';
import PageNotFound from '../pages/PageNotFound';
import Fav from '../pages/Fav';

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipes' element={<Recipes/>} />
        <Route path='/recipes/details/:id' element={<SingleRecipe/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/fav' element={<Fav/>} />
        <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}

export default Mainroutes