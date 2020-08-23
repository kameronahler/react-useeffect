import React from 'react'

export default function Header({ category }) {
  return (
    <header category={category}>
      <h1>{category}</h1>
    </header>
  )
}
