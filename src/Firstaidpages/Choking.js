import React, { useEffect, useState } from 'react';
import "../styles/firstaidpages.css";
const Home = () => {

  const [Choking, setChoking] = useState([])
  useEffect(() => {
    // API Call via bnodejs to DB to fetch the list of categories
    // eslint-disable-next-line
    const a = fetch("http://localhost:5000/emergency_list?id=4").then(res => res.json()).then(
      data => {
        setChoking(data);
      }
    )
  }, [])
 
  const firstEmergency = Choking[0] || {};
  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: firstEmergency.emergency_details }}>
        </div>
    
    </div>
  );
}
export default Home;