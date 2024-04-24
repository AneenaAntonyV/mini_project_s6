import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/awareness.css';

function Awareness() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/awareness_programs'); // Fetch data from your backend API

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="awareness-container">
      {events.map((event, index) => (
        <div key={index}>
          <h2>{event.heading}</h2>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p>{event.content}</p>
        </div>
      ))}
      <Link to="/registration" className="register-button">
        Register
      </Link>
    </div>
  );
}

export default Awareness;
