import React, { useState, useEffect } from 'react';
import '../styles/registration.css';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programOptions, setProgramOptions] = useState([]);
  const [program, setProgram] = useState('');

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('/api/awareness_programs'); // Fetch program options from awareness_programs
        if (!response.ok) {
          throw new Error('Failed to fetch program options');
        }
        const data = await response.json();
        setProgramOptions(data.map((program) => ({ id: program.id, heading: program.heading }))); // Assuming data format is [{ id: 1, heading: 'Program 1' }, ...]
      } catch (error) {
        console.error('Error fetching program options:', error);
      }
    };

    fetchPrograms();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, program }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      console.log('Data submitted successfully');
      window.location.href = '/registrationfinal';
      // You can add a success message or redirect the user here
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle errors appropriately
    }
  };

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="program">Registered Program:</label>
          <select
            id="program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            required
          >
            <option value="" disabled hidden>Select Program</option>
            {programOptions.map((option) => (
              <option key={option.id} value={option.heading}>{option.heading}</option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
