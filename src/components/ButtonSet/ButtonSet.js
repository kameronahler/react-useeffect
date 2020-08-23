import React from 'react'
import Button from '../Button/Button'

export default function ButtonSet(props) {
  return (
    <ul>
      <li>
        <Button onClick={props.onClickForButtonSet} title={'posts'} />
      </li>
      <li>
        <Button onClick={props.onClickForButtonSet} title={'users'} />
      </li>
      <li>
        <Button onClick={props.onClickForButtonSet} title={'comments'} />
      </li>
    </ul>
  )
}
