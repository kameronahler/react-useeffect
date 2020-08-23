import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import ButtonSet from '../ButtonSet/ButtonSet'

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
    console.log(e.currentTarget.textContent)
  }

  return (
    <section>
      <Header setCategory={category}></Header>
      <ButtonSet onClickForButtonSet={buttonSetsCategory} />
      <ul>
        {currentData.map((el) => {
          return <li key={el.id}>{JSON.stringify(el.id)}</li>
        })}
      </ul>
    </section>
  )
}
