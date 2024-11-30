import React, { useState } from 'react';
import axios from 'axios';

const PostRequest = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handlePostRequest = () => {
    axios.post('http://127.0.0.1:8000/domain/test/demo4', {
      name: name,
      age: age
    })
    .then((response) => {
      setResponseMessage(response.data);
    })
    .catch((error) => {
      console.error('Error sending POST request:', error);
    });
  };

  return (
    <div>
      <h3>POST Request (with Request Body)</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handlePostRequest}>Send POST Request</button>

      <div>
        <h3>Response from Backend:</h3>
        <p>{responseMessage}</p>
      </div>
    </div>
  );
};

export default PostRequest;
