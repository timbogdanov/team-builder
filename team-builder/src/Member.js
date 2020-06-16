import React from 'react'

function Member(props) {
  const { details } = props

  return (
    <div>
      <div>{details.name}</div>
      <div>{details.email}</div>
      <div>{details.role}</div>
    </div>
  )
}

export default Member