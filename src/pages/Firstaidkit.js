import React, { useEffect, useState } from 'react';
import "../styles/firstaidpages.css";
import "../styles/firstaidkit.css";
const Home = () => {

  const [Firstaid, setFirstAid] = useState([])
  useEffect(() => {
    // API Call via bnodejs to DB to fetch the list of categories
    // eslint-disable-next-line
    const a = fetch("http://localhost:5000/emergency_list?id=15").then(res => res.json()).then(
      data => {
        setFirstAid(data);
      }
    )
  }, [])
 
  const firstEmergency = Firstaid[0] || {};
  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: firstEmergency.emergency_details }}>
        </div>
    
    </div>
  );
}
export default Home;