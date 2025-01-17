import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import GitHub from './Components/GitHub/GitHub.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import HomePage from './Components/HomePage/HomePage.jsx'
import Login from './Components/Login/Login.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element= {<HomePage />} />
      <Route path='about' element= {<AboutUs />} />
      <Route path='github' element= {<GitHub />} />
      <Route path='contact-us' element= {<ContactUs />} />
      <Route path='login' element={<Login />}></Route>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
  