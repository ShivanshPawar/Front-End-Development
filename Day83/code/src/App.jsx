import React from 'react'
import Mainroutes from './routes/Mainroutes'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='py-5 px-10 bg-black h-screen w-screen text-white font-thin'>
      <NavBar/>
      <Mainroutes/>
    </div>
  )
}

export default App