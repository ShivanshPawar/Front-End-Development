// import React, { useEffect } from 'react'
// import { asyncgetusers } from './store/UserAction';
// import { useDispatch, useSelector } from 'react-redux';

import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"

const App = () => {

  // const data = useSelector((state) => state);
  // const dispatch = useDispatch();

  // console.log(data)

  // useEffect(() =>{
  //   dispatch(asyncgetusers());
  // },[]);

  return (
    <div className='px-[10%] bg-gray-900 w-screen h-screen text-white'>
      <Nav/>
      <Mainroutes />
    </div>
  )
}

export default App