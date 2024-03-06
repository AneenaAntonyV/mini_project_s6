import React from 'react';
import {Link} from "react-router-dom";
import "../styles/firstaidpages.css";
function Firstaidkit() {
  return (
    <div>
      <h1 id='fheading'>  First Aid Page</h1>
      <Link to ="/accidents">
        <button className='fbutton'>Accidents</button>
      </Link>
      <Link to ="/bleeding">
        <button className='fbutton'>Bleeding</button>
      </Link>
      <Link to ="/burns">
        <button className='fbutton'>Burns</button>
      </Link>
      <Link to ="/chocking">
        <button className='fbutton'>Choking</button>
      </Link>
      <Link to ="/drowning">
        <button className='fbutton'>Drowning</button>
      </Link>
      <Link to ="/fainting">
        <button className='fbutton'>Fainting</button>
      </Link>
      <Link to ="/fits">
        <button className='fbutton'>Fits</button>
      </Link>
      <Link to ="/fracture">
        <button className='fbutton'>Fracture</button>
      </Link>
      <Link to ="/heartattack">
        <button className='fbutton'>Heart Attack</button>
      </Link>
      <Link to ="/snakebite">
        <button className='fbutton'>Snake Bite</button>
      </Link>
      <Link to ="/sprain">
        <button className='fbutton'>Sprain</button>
      </Link>
    </div>
  )
}

export default Firstaidkit;
