import React, { useState, useEffect } from 'react';
import Form from './Form';
import Member from './Member'
import './App.css';

import { v4 as uuid } from 'uuid';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {

  const [memberList, setMemberList] = useState([]);
  const [formValues, setFormValues] = useState({initialFormValues});
  const [error, setError] = useState('');

  const [memberToEdit, setMemberToEdit] = useState();

  const editMember = (details) => {
    setMemberToEdit(details);
  }

  useEffect(() => {
    if (memberToEdit) {
      setFormValues(memberToEdit);
    }
  }, [memberToEdit])

  const onInputChange = (event => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    })

  })

  const onSubmit = (event => {
    event.preventDefault();

    if (!formValues.name || !formValues.email || !formValues.role) {
      setError('Fill out all info please')
      return
    } else {
      const newMember = { ...formValues, id: uuid()}

      setMemberList([newMember, ...memberList]);

      setFormValues(initialFormValues)
      setError('')
    }


  })

  return (
    <div className="App">
      <Form
        values={formValues}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        />
        <span>{error}</span>

      {
        memberList.map(member => {
          return (
            <Member editMember={editMember} key={member.id} details={member} />
          )
        })
      }

    </div>
  );
}

export default App;
