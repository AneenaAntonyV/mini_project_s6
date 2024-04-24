import React, { useState, useEffect } from 'react';

const AwarenessProgramsTable = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await fetch('/api/awareness_programs'); // Replace '/api/awareness_programs' with your actual backend endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch programs');
      }
      const data = await response.json();
      setPrograms(data);
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/deleteProgram/${id}`, {
        method: 'DELETE', // Specify the DELETE method
      });
      if (!response.ok) {
        throw new Error('Failed to delete program');
      }
      fetchPrograms(); // Refresh the table after deletion
    } catch (error) {
      console.error('Error deleting program:', error);
    }
  };

  return (
    <div>
      <h2>Awareness Programs</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Heading</th>
            <th>Location</th>
            <th>Time</th>
            <th>Content</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <tr key={program.id}>
              <td>{program.id}</td>
              <td>{program.heading}</td>
              <td>{program.location}</td>
              <td>{program.time}</td>
              <td>{program.content}</td>
              <td>
                <button onClick={() => handleDelete(program.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AwarenessProgramsTable;
