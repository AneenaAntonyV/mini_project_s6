import React, { useEffect, useState } from 'react';
import "../styles/firstaidpages.css";
const Home = () => {

  const [Drowning, setDrowning] = useState([])
  // Fetching Data with useEffect
  useEffect(() => {
    // API Call via bnodejs to DB to fetch the list of categories
    // eslint-disable-next-line
    const a = fetch("http://localhost:5000/emergency_list?id=5").then(res => res.json()).then(
      data => {
        setDrowning(data);
      }
    )
  }, [])
//  extracts the first element from the Drowning array 
//  and assigns it to the firstEmergency variable.
  const firstEmergency = Drowning[0] || {};
  return (
    <div>
       {/* render HTML content  */}
        <div dangerouslySetInnerHTML={{ __html: firstEmergency.emergency_details }}>
        </div>
    
    </div>
  );
}
export default Home;