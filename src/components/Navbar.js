import React from 'react';
import Logo from "../assets/new_logo.png";
import "../styles/Navbar.css";
import {Link} from "react-router-dom";
import "../pages/Admins";
function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className='leftSide'>
            <img  id='logo' src={Logo} alt='img not found'/>
            <h1 id='heading'></h1>
        </div>
        <div className='rightSide'>
            { <ul>
                <Link to="/"  className='newlink'>Home</Link>
                <Link to="/about" className='newlink'>About</Link>
                <Link to="/help" className='newlink'>Help</Link>
                <Link to="/firstaidkit" className='newlink'>FirstaidKit</Link>
                <Link to="/admins" className='newlink'>Admin Login</Link>
            </ul> }
           
        </div>
      </div>
    </div>
  );
};
export default Navbar;
