import React, { useState } from 'react';
import axios from 'axios';

const Postdata = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [name, setName] = useState('');
  const[number,setNumber]=useState(0);
  const [age, setAge] = useState('');
  const [pathName, setPathName] = useState('');
  
  // Handling GET request for query params
  const handleQueryParamsRequest = () => {
    axios.get('http://127.0.0.1:8000/app/sample', {
      params: { name: name || 'Anonymous' } // Send name as a query parameter
    })
    .then((response) => {
      setResponseMessage(response.data); // Set the message from the backend response
    })
    .catch((error) => {
      console.error('Error fetching query params:', error);
    });
  };
  

  // Handling GET request for path variable
  const handlePathVariableRequest = () => {
    axios.get(`http://127.0.0.1:8000/app/postfun/${pathName}/`)
    .then((response) => {
      setResponseMessage(response.data); // Set the message from the backend response
    })
    .catch((error) => {
      console.error('Error fetching path variable:', error);
    });
  };
  
  const handleeven=()=>{
    axios.get(`http://127.0.0.1:8000/app/even/${number}`)
    .then((response)=> {
    setResponseMessage(response.data);})
    .catch((error)=>{
        console.error("Error to Fetch Data")
    });
    };

  // Handling POST request for sending request body
  const handlePostRequest = () => {
    axios.post('http://127.0.0.1:8000/app/postfunc/', {
      name: name,
      age: age
    })
    .then((response) => {
      setResponseMessage(response.data); // Set the message from the backend response
    })
    .catch((error) => {
      console.error('Error sending POST request:', error);
    });
  };

  return (
    <div>
      <h1>Frontend with Axios</h1>

      {/* Query Params Request */}
      <div>
        <h3>Query Params Request (GET)</h3>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleQueryParamsRequest}>Send Query Params Request</button>
      </div>

      {/* Path Variable Request */}
      <div>
        <h3>Path Variable Request (GET)</h3>
        <input
          type="text"
          placeholder="Enter name for path variable"
          value={pathName}
          onChange={(e) => setPathName(e.target.value)}
        />
        <button onClick={handlePathVariableRequest}>Send Path Variable Request</button>
      </div>

      {/* POST Request */}
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
      </div>
      <div>
      <input
          type="number"
          placeholder="Enter Any Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          
        />
         <button onClick={handleeven}>Check Even</button>
      </div>

      {/* Display Response */}
      <div>
        <h3>Response from Backend:</h3>
        <p>{responseMessage}</p>
      </div>
    </div>
  );
};

export default Postdata;
