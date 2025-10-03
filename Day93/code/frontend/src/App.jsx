// import React, { useEffect } from 'react'
// import { asyncgetusers } from './store/UserAction';
// import { useDispatch, useSelector } from 'react-redux';

import { useDispatch } from "react-redux"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/userActions";

const App = () => {

  // old code

  // const data = useSelector((state) => state);
  // const dispatch = useDispatch();

  // console.log(data)

  // useEffect(() =>{
  //   dispatch(asyncgetusers());
  // },[]);

  // old code end

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentuser())
  })

  return (
    <div className='px-[10%] bg-gray-900 w-screen h-screen text-white'>
      <Nav/>
      <Mainroutes />
    </div>
  )
}

export default App