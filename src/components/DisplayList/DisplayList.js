import React from 'react'

export default function DisplayList({ currentData }) {
  const UL_STYLE = {
    columns: 8,
    listStyle: 'none',
    marginLeft: 'unset',
    paddingLeft: 'unset',
  }
  return (
    <ul style={UL_STYLE}>
      {currentData.map((el) => {
        return <li key={el.id}>{JSON.stringify(el.id)}</li>
      })}
    </ul>
  )
}
