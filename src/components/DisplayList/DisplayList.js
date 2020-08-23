import React from 'react'

export default function DisplayList({ currentData }) {
  return (
    <ul>
      {currentData.map((el) => {
        return <li key={el.id}>{JSON.stringify(el.id)}</li>
      })}
    </ul>
  )
}
