import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import ButtonSet from '../ButtonSet/ButtonSet'
import DisplayList from '../DisplayList/DisplayList'

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
      <Header category={category} />
      <ButtonSet action={buttonSetsCategory} />
      <DisplayList currentData={currentData} />
    </section>
  )
}
