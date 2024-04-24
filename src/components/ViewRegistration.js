import React, { useState, useEffect } from 'react';

function ViewRegistration() {
  const [registrations, setRegistrations] = useState([]);
  const [awarenessPrograms, setAwarenessPrograms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/registrations')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRegistrations(data); // Assuming the response contains the registrations data
      })
      .catch(error => {
        console.error('Error fetching registrations:', error);
      });

    fetch('api/awareness_programs')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setAwarenessPrograms(data); // Assuming the response contains the awareness programs data
      })
      .catch(error => {
        console.error('Error fetching awareness programs:', error);
      });
  }, []);

  return (
    <div>
      <h1>Registrations</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Program</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map(registration => (
            <tr key={registration.id}>
              <td>{registration.name}</td>
              <td>{registration.email}</td>
              <td>{registration.phone}</td>
              <td>{registration.program}</td>
              <td>{registration.id}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Awareness Programs</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Heading</th>
            <th>Location</th>
            <th>Time</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {awarenessPrograms.map(program => (
            <tr key={program.id}>
              <td>{program.id}</td>
              <td>{program.heading}</td>
              <td>{program.location}</td>
              <td>{program.time}</td>
              <td>{program.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewRegistration;
