import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
// import Wrapper from '../components/Wrapper.jsx'
// import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


// Day 81

// createRoot(document.getElementById('root')).render(
//   <>
//   <App />
//   <ToastContainer position='top-center' />
//   </>
// )


// createRoot(document.getElementById('root')).render(
//   <Wrapper >
//     <App />
//     <ToastContainer position='top-center' />
//   </Wrapper>
// )




// Day 82
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)