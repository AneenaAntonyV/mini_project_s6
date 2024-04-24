import React, { useState } from 'react';
import "../styles/admins.css"; // Make sure to import the CSS file
// import {Link} from "react-router-dom";


const Admins = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        // Redirect or show success message
        console.log('Login successful');
        // Example: Redirect to dashboard page
        setLoginStatus('Login successful');
        window.location.href = '/adminchoice'; // Redirect to dashboard page
      } else {
        // Show error message
        const data = await response.json();
        setLoginStatus('Login failed');
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginStatus('Error occurred, please try again');
      setError('Error occurred, please try again');
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Login</h1>
      <form className="admin-form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="admin-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin-input"
        />
      
          <button type="submit" className="admin-button">Login</button>
        
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Admins;
//<Link to ="/adminchoice">
  //        <button type="submit" className="admin-button">Login</button>
    //    </Link>