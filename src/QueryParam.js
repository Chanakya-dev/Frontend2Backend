import React, { useState } from 'react';
import axios from 'axios';

const QueryParamsRequest = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [name, setName] = useState('');

  const handleQueryParamsRequest = () => {
    axios.get('http://127.0.0.1:8000/domain/test/demo2', {
      params: { name: name || 'Anonymous' }
    })
    .then((response) => {
      setResponseMessage(response.data);
    })
    .catch((error) => {
      console.error('Error fetching query params:', error);
    });
  };

  return (
    <div>
      <h3>Query Params Request (GET)</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleQueryParamsRequest}>Send Query Params Request</button>

      <div>
        <h3>Response from Backend:</h3>
        <p>{responseMessage}</p>
      </div>
    </div>
  );
};

export default QueryParamsRequest;
