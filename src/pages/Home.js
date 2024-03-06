import React from 'react';
import {Link} from "react-router-dom";
import "../styles/home.css";
const Home = () => {
    return (
      <div>
      <h1 id='hheading'>Home Page</h1>
      <Link to ="/firstaid">
        <button className='hbutton'>First Aid</button>
      </Link>
      <Link to ="/emergency">
        <button className='hbutton'>Emergency Medical Care</button>
      </Link>
      <Link to ="/police">
        <button className='hbutton'>Police</button>
      </Link>
      <Link to ="/fireforce">
        <button className='hbutton'>Fire Force</button>
      </Link>

      </div>
    );
  }
export default Home;
