import React from 'react';
import "../styles/home.css";
import {Link} from "react-router-dom";
import Img1 from "../assets/firstaid.jpg";
import Img2 from "../assets/medicalcare.avif";
import Img3 from "../assets/police.jpg";
import Img4 from "../assets/firestation.avif";
  const Home = () => {
    return (
      <div>
        <div className='top'>
        <Link to ="/firstaid">
          <button className='hbutton' id='btn1'><img  id='img1' src={Img1} alt='img not found'/> First Aid</button>
        </Link>
        <Link to ="/emergency">
          <button className='hbutton' id='btn2'><img  id='img2' src={Img2} alt='img not found'/>Emergency <br/>Medical Care</button>
        </Link>
        </div>

      <div className='bottom'>
        <Link to ="/police">
          <button className='hbutton' id='btn3'><img  id='img3' src={Img3} alt='img not found'/>Police</button>
        </Link>
        <Link to ="/fireforce">
          <button className='hbutton' id='btn4'><img  id='img4' src={Img4} alt='img not found'/>Fire Force</button>
        </Link>
      <Link to ="/awareness">
          <button className='hbutton' id='btn5'>Awareness Programs</button>
      </Link>
      </div>

  
      </div>
    );
  }
export default Home;