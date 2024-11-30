import React, { useState } from 'react';
import axios from 'axios';

const PathVariableRequest = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [pathName, setPathName] = useState('');

  const handlePathVariableRequest = () => {
    axios.get(`http://127.0.0.1:8000/domain/test/demo3/${pathName}`)
    .then((response) => {
      setResponseMessage(response.data);
    })
    .catch((error) => {
      console.error('Error fetching path variable:', error);
    });
  };

  return (
    <div>
      <h3>Path Variable Request (GET)</h3>
      <input
        type="text"
        placeholder="Enter name for path variable"
        value={pathName}
        onChange={(e) => setPathName(e.target.value)}
      />
      <button onClick={handlePathVariableRequest}>Send Path Variable Request</button>

      <div>
        <h3>Response from Backend:</h3>
        <p>{responseMessage}</p>
      </div>
    </div>
  );
};

export default PathVariableRequest;
