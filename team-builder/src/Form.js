import React, { useEffect } from 'react'

let formStyle = {
  margin: '100px 0 0 0',
};

let inputStyle = {
  padding: '10px 20px',
  borderRadius: '0',
  border: '1px solid #CCCCCC',
  margin: '0 5px',
};


function Form(props) {

  const { values, onSubmit, onInputChange } = props

  // useEffect(() => {
  //   if(props.memberToEdit) {

  //   }
  // }, [])

  return (
    <form onSubmit={onSubmit} style={formStyle}>
      <input
        style={inputStyle}
        type='text'
        name='name'
        placeholder='Enter Name'
        value={values.name}
        onChange={onInputChange}
      />
      <input
        style={inputStyle}
        type='email'
        name='email'
        placeholder='Enter Email'
        value={values.email}
        onChange={onInputChange}
      />
      <select
        style={inputStyle}
        name='role'
        value={values.role}
        onChange={onInputChange}
      >
        <option>Please select a role</option>
        <option>Professional Truck Driver</option>
        <option>Professional Spelling Beer</option>
        <option>Professional ATOMER</option>
        <option>Professional VSCODER</option>
      </select>

      <input
        style={inputStyle}
        type='submit'
      />

    </form>
  );
}

export default Form