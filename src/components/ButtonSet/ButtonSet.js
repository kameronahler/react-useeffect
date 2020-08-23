import React from 'react'
import Button from '../Button/Button'

export default function ButtonSet(props) {
  return (
    <ul>
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
