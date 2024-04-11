import React, { useEffect, useState } from 'react';
import "../styles/firstaidpages.css";
const Home = () => {

  const [Drowning, setDrowning] = useState([])
  useEffect(() => {
    // API Call via bnodejs to DB to fetch the list of categories
    // eslint-disable-next-line
    const a = fetch("http://localhost:5000/emergency_list?id=5").then(res => res.json()).then(
      data => {
        setDrowning(data);
      }
    )
  }, [])
 
  const firstEmergency = Drowning[0] || {};
  return (
    <div>
        <h1 id='fheading'>Drowning</h1>
        <div dangerouslySetInnerHTML={{ __html: firstEmergency.emergency_details }}>
        </div>
    
    </div>
  );
}
export default Home;