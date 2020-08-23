import React, { useState, useEffect } from 'react'

export default function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setCurrentData(json))
  }, [resourceType])

  return (
    <section>
      <header>
        <h1>{resourceType}</h1>
      </header>
      <div>
        <button
          onClick={() => {
            setResourceType('posts')
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType('users')
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType('comments')
          }}
        >
          Comments
        </button>
      </div>
      <ul>
        {currentData.map((el) => {
          return <li key={el.id}>{JSON.stringify(el.id)}</li>
        })}
      </ul>
    </section>
  )
}
