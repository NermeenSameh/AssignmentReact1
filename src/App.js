import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useLayoutEffect } from 'react';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';
import Layout from './Layout/Layout';
import Home from './Home/Home';

export default function () {
let Routes = createBrowserRouter([
{
  path:"",element :<Layout/>,children:[
    {index:true ,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"contact",element:<Contact/>},
    {path:"potfolio",element:<Portfolio/>},
    {path:"*",element:<NotFound/>}
  ]
}

])


  return (
  <RouterProvider router={Routes}/>
  )
}
