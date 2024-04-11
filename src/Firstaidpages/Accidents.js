import React, { useEffect, useState } from 'react';
import "../styles/firstaidpages.css";
const Home = () => {

  const [Accidents, setAccidents] = useState([])
  useEffect(() => {
    // API Call via bnodejs to DB to fetch the list of categories
    // eslint-disable-next-line
    const a = fetch("http://localhost:5000/emergency_list?id=1").then(res => res.json()).then(
      data => {
        setAccidents(data);
      }
    )
  }, [])
 
  const firstEmergency = Accidents[0] || {};
  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: firstEmergency.emergency_details }}>
        </div>
    
    </div>
  );
}
export default Home;









/*import React from 'react';

function Accidents() {
  return (
    <div>
       <h1>this is accidents page</h1>
    </div>
  );
}

export default Accidents;*/
