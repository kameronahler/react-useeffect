import React from 'react'
import Button from '../Button/Button'

export default function ButtonSet(props) {
  const UL_STYLE = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0 1rem',
    listStyle: 'none',
    marginLeft: 'unset',
    paddingLeft: 'unset',
  }

  return (
    <ul style={UL_STYLE}>
      <li>
        <Button action={props.action} title={'posts'} />
      </li>
      <li>
        <Button action={props.action} title={'users'} />
      </li>
      <li>
        <Button action={props.action} title={'comments'} />
      </li>
    </ul>
  )
}
