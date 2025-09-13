import React from 'react'
import { Outlet, useNavigate } from 'react-router'

// Day 82

const Service = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1 className='text-5xl font-thin mb-5'>Service</h1>
      <button onClick={() => navigate("/service/detail")} className='bg-white text-black px-4 py-2'>More Details</button>
      <hr className='mt-10 mb-10' />
      <Outlet/>
    </div>
  )
}

export default Service