import React from "react";
import './navnar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll'

const Navbar=()=>{
    return(
        <nav className="navbar">

            <img src={logo} alt="logo" className="logo"/>

            <div className="desktopMenu">
             <Link className="desktopMenuItemList">Home</Link>
             <Link className="desktopMenuItemList">Client</Link>
             <Link className="desktopMenuItemList">About</Link>
             <Link className="desktopMenuItemList">Profile</Link>
         
            </div>
              
            <button className="desktopBtn">
           <img src="" alt="" className="desktopMuneImg"/>Contect me
            </button>  


        </nav>
    )
}

export default Navbar;