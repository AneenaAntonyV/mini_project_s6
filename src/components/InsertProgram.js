import React, { useState } from 'react';
import '../styles/insertProgram.css';

function InsertProgram() {
  const [heading, setHeading] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/insertProgram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ heading, location, time, content }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      const data = await response.json();
      console.log('Data submitted successfully:', data);
      setResponseMessage('Program data submitted successfully');
      setHeading('');
      setLocation('');
      setTime('');
      setContent('');
    } catch (error) {
      console.error('Error submitting data:', error);
      setResponseMessage('Error submitting data');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="insert-program-form">
      <h2>Insert Program</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="heading">Heading:</label>
          <input
            type="text"
            id="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="datetime-local"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={submitting}>Submit</button>
        {responseMessage && <p>{responseMessage}</p>}
      </form>
    </div>
  );
}

export default InsertProgram;
