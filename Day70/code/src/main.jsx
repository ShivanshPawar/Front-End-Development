import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { ToastContainer } from 'react-toastify'
import Wrapper from '../components/Wrapper.jsx'

// Day 81

// createRoot(document.getElementById('root')).render(
//   <>
//   <App />
//   <ToastContainer position='top-center' />
//   </>
// )


createRoot(document.getElementById('root')).render(
  <Wrapper >
    <App />
    <ToastContainer position='top-center' />
  </Wrapper>
)
