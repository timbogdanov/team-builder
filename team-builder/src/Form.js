import React, { useState } from 'react'

function Form() {

  const [form, setForm] = useState();

  return (
    <form>
      <input
        type='text'
        name='name'
        placeholder='Enter Name'
      />
      <input
        type='email'
        name='email'
        placeholder='Enter Email'
      />
      <select
        name='role'
      >
        <option>Please select a role</option>
        <option>Professional Truck Driver</option>
        <option>Professional Spelling Bee`r</option>
        <option>Professional VSCODER</option>
      </select>

      <input
        type='submit'
      />

    </form>
  );
}

export default Form