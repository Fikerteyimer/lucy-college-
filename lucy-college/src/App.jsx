import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider,Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Programs from './Components/Programs/Programs.jsx';
import Announcements from './Components/Announcements/Announcements.jsx';
import Contact from "./Components/Contact/Contact.jsx";
import RootLayout from "./Layout/RootLayout.jsx";
const App=()=>{
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          <Route index element={<Hero/>}/>
           <Route path='About' element={<About/>}/>
           <Route path='Programs' element={<Programs/>}/>
           <Route path='Announcements' element={<Announcements/>}/>
           <Route path='Contact' element={<Contact/>}/>

      </Route>
    )
  )
  return(
    <RouterProvider router={router}/>

  )
}
export default App;