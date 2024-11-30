import React, { useState } from 'react';
import axios from 'axios';

const EvenCheck = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [number, setNumber] = useState(0);

  const handleeven = () => {
    axios.get(`http://127.0.0.1:8000/app/even/${number}`)
      .then((response) => {
        setResponseMessage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching even/odd:", error);
      });
  };

  return (
    <div>
      <h3>Check Even or Odd</h3>
      <input
        type="number"
        placeholder="Enter Any Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleeven}>Check Even</button>

      <div>
        <h3>Response from Backend:</h3>
        <p>{responseMessage}</p>
      </div>
    </div>
  );
};

export default EvenCheck;
