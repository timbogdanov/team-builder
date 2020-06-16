import React from 'react'

function Form(props) {

  const { values, onSubmit, onInputChange} = props

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Enter Name'
        value={values.name}
        onChange={onInputChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Enter Email'
        value={values.email}
        onChange={onInputChange}
      />
      <select
        name='role'
        value={values.role}
        onChange={onInputChange}
      >
        <option>Please select a role</option>
        <option>Professional Truck Driver</option>
        <option>Professional Spelling Beer</option>
        <option>Professional VSCODER</option>
      </select>

      <input
        type='submit'
      />

    </form>
  );
}

export default Form