import React from 'react'
import { useNavigate, } from 'react-router'

const Product = () => {

  const navigte = useNavigate();

  const NavigateHandler = (name) => {
    navigte(`/product/detail/${name}`)
  }

  return (
    <div>
      <h1 className='text-3xl font-thin mb-10'>Products</h1>

      <div onClick={() => NavigateHandler("Product 1")} className='mb-10'>
        <h1 className='text-2xl font-thin mb-3'>Product 1</h1>
        <button className='bg-white text-black px-4 py-2 rounded'>See Details</button>
      </div>

      <div onClick={() => NavigateHandler("Product 2")} className='mb-10'>
        <h1 className='text-2xl font-thin mb-3'>Product 2</h1>
        <button className='bg-white text-black px-4 py-2 rounded'>See Details</button>
      </div>

      <div className='mb-10'>
        <h1 className='text-2xl font-thin mb-3'>Product 3</h1>
        <button onClick={() => NavigateHandler("Product 3")} className='bg-white text-black px-4 py-2 rounded'>See Details</button>
      </div>

    </div>
  )
}

export default Product