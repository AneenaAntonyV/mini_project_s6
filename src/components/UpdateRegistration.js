import React from 'react'
import {Link} from "react-router-dom";
import "../styles/adminchoice.css"
function UpdateRegistration() {
  return (
    <div className="container">
      <div className="choice">
      <Link to ="/insertprogram">
        <button>Insert Programs</button>
      </Link>
      <Link to ="/deleteprogram">
        <button>Delete Programs</button>
      </Link>
      </div>

    </div>
  )
}

export default UpdateRegistration;