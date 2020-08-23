import React from 'react'

export default function Header({ setCategory }) {
  return (
    <header>
      <h1>{setCategory}</h1>
    </header>
  )
}
