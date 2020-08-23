import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Button from '../Button/Button'

export default function App() {
  const [category, setCategory] = useState('posts')
  const [currentData, setCurrentData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${category}`)
      .then((response) => response.json())
      .then((json) => setCurrentData(json))
  }, [category])

  const buttonSetsCategory = (e) => {
    setCategory(e.currentTarget.textContent)
  }

  return (
    <section>
      <Header setCategory={category}></Header>
      <div>
        <Button onClick={buttonSetsCategory} title={'posts'} />
        <Button onClick={buttonSetsCategory} title={'users'} />
        <Button onClick={buttonSetsCategory} title={'comments'} />
      </div>
      <ul>
        {currentData.map((el) => {
          return <li key={el.id}>{JSON.stringify(el.id)}</li>
        })}
      </ul>
    </section>
  )
}
