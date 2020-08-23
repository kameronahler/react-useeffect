import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'

export default function App() {
  const [category, setCategory] = useState('posts')
  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${category}`)
      .then((response) => response.json())
      .then((json) => setCurrentData(json))
  }, [category])

  return (
    <section>
      <Header setCategory={category}></Header>
      <div>
        <button
          onClick={() => {
            setCategory('posts')
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setCategory('users')
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setCategory('comments')
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
