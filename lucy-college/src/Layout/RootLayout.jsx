import React from "react";
import { Outlet,useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Copyright from "../Components/Footer/Copyright";


const RootLayout=()=>{
    const location = useLocation();
  const isHomePage = location.pathname === "/";
    return(
        <div>
          <Navbar/>
          <Outlet/>
          
        </div>
    );
}
export default RootLayout;