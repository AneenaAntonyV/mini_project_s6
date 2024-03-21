import React from 'react';
import {Link} from "react-router-dom";
import Img1 from "../assets/accidents.avif";
import Img2 from "../assets/bleeding.jpg";
import Img3 from "../assets/burns.jpg";
import Img4 from "../assets/chocking.webp";
import Img5 from "../assets/drowning.jpg";
import Img6 from "../assets/fainting.jpg";
import Img7 from "../assets/fits.webp";
import Img8 from "../assets/fracture.jpg";
import Img9 from "../assets/heartattack.jpg";
import Img10 from "../assets/snakebite.jpg";
import Img11 from "../assets/sprain.jpg";
import Img12 from "../assets/insectbite.jpg";
import "../styles/firstaidpages.css";

function Firstaidkit() {
  return (
    <div>
      <h1 id='fheading'>  First Aid</h1>
      <Link to ="/accidents">
        <button  id='b1' className='fbutton'>
          <img  id='img1' src={Img1} alt='img not found'/>
          Accidents
        </button>
      </Link>
      <Link to ="/bleeding">
        <button id='b2' className='fbutton'>
          <img  id='img2' src={Img2} alt='img not found'/>
          Bleeding
        </button>
      </Link>
      <Link to ="/burns">
        <button id='b3' className='fbutton'>
          <img  id='img3' src={Img3} alt='img not found'/>
          Burns
        </button>
      </Link>
      <Link to ="/chocking">
        <button id='b4' className='fbutton'>
          <img  id='img4' src={Img4} alt='img not found'/>
          Choking
        </button>
      </Link>
      <Link to ="/drowning">
        <button id='b5' className='fbutton'>
          <img  id='img5' src={Img5} alt='img not found'/>
          Drowning
        </button>
      </Link>
      <Link to ="/fainting">
        <button id='b6' className='fbutton'>
          <img  id='img6' src={Img6} alt='img not found'/>
          Fainting
        </button>
      </Link>
      <Link to ="/fits">
        <button id='b7' className='fbutton'>
          <img  id='img7' src={Img7} alt='img not found'/>
          Fits
        </button>
      </Link>
      <Link to ="/fracture">
        <button id='b8' className='fbutton'>
          <img  id='img8' src={Img8} alt='img not found'/>
          Fracture
        </button>
      </Link>
      <Link to ="/heartattack">
        <button id='b9' className='fbutton'>
          <img  id='img9' src={Img9} alt='img not found'/>
          Heart Attack
        </button>
      </Link>
      <Link to ="/snakebite">
        <button id='b10' className='fbutton'>
          <img  id='img10' src={Img10} alt='img not found'/>
          Snake Bite
        </button>
      </Link>
      <Link to ="/sprain">
        <button id='b11' className='fbutton'>
          <img  id='img11' src={Img11} alt='img not found'/>
          Sprain
        </button>
      </Link>
      <Link to ="/insectbite">
        <button id='b12' className='fbutton'>
          <img  id='img12' src={Img12} alt='img not found'/>
          Insect bite
        </button>
      </Link>
    </div>
  );
}

export default Firstaidkit;
