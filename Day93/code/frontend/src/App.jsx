import React, { useEffect } from 'react'
import { asyncgetusers } from './store/UserAction';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {

  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(data)
  
  useEffect(() =>{
    dispatch(asyncgetusers());
  },[]);

  return (
    <div className='bg-black w-screen h-screen text-white'>App</div>
  )
}

export default App