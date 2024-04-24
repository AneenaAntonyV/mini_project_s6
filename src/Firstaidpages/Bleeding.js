import React, { useEffect, useState } from 'react';
import "../styles/firstaidpages.css";
const Home = () => {

  const [Bleeding, setBleeding] = useState([])
  useEffect(() => {
    // API Call via bnodejs to DB to fetch the list of categories
    // eslint-disable-next-line
    const a = fetch("http://localhost:5000/emergency_list?id=2").then(res => res.json()).then(
      data => {
        setBleeding(data);
      }
    )
  }, [])
 
  const firstEmergency = Bleeding[0] || {};
  return (
    <div>
        <div dangerouslySetInnerHTML={{ __html: firstEmergency.emergency_details }}>
        </div>
        {/* {firstEmergency.videos && (
        <div>
          <h3>Videos</h3>
          <ul>
            {firstEmergency.videos.map((video, index) => (
              <li key={index}>
                <iframe
                  title={`Video ${index + 1}`}
                  width="560"
                  height="315"
                  src={video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    
    </div>
  );
}
export default Home;
