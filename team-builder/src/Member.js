import React from 'react'

let divStyle = {
  width: '50%',
  margin: '20px auto',
  padding: '20px 30px',
  background: '#EEEEEE',
  textAlign: 'left',
};

function Member(props) {
  const { details, editMember } = props

  return (
    <div style={divStyle}>
      <div>id: {details.id}</div>
      <div>name: {details.name}</div>
      <div>email: {details.email}</div>
      <div>role: {details.role}</div>

      <button onClick={()=>{editMember(details)}} >Edit Member</button>
    </div>
  )
}

export default Member