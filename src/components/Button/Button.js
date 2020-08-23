import React from 'react'

export default function Button(props) {
  const title = props.title.charAt(0).toUpperCase() + props.title.slice(1)

  return <button onClick={props.action}>{title}</button>
}
