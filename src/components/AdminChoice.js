import React from 'react';
import "../styles/adminchoice.css"
import {Link} from "react-router-dom";

function AdminChoice() {
  return (
    <div className="container">
      <h1 className="heading">Admin Panel</h1>
      <div className="choice">
      <Link to ="/viewregistration">
        <button>View Details</button>
      </Link>
      <Link to ="/updateregistation">
        <button>Update Registration</button>
      </Link>
      </div>
    </div>
  );
}

export default AdminChoice;
