import React, { useState, useEffect } from 'react';

export default function App() {
  const [resourceType, setResourceType] = useState('posts')

  useEffect( () => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }, [resourceType])

  return (
    <div>
      <button onClick={() => {setResourceType('posts')}}>Posts</button>
      <button onClick={() => {setResourceType('users')}}>Users</button>
      <button onClick={() => {setResourceType('comments')}}>Comments</button>
      <h1>{resourceType}</h1>
    </div>
  );
}
