import React from 'react'
import Home from './../components/Home';
import Product from './../components/Product';
import Service from './../components/Service';
import About from '../components/About';
import { Route, Routes } from 'react-router';
import ProductDetails from '../components/ProductDetails';
import ServiceDetails from './../components/ServiceDetails';


// Day 82

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<ProductDetails />} />
      <Route path="/service" element={<Service />}>
        <Route path="/service/detail" element={<ServiceDetails />} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Mainroutes