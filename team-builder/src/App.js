import React, { useState } from 'react';
import Form from './Form';
import Member from './Member'
import './App.css';

const intialMemberList = [
  {
    id: Math.random(),
    name: 'Tim',
    email: 'tim@time.com',
    role: 'Doctor',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {


  const [memberList, setMemberList] = useState(intialMemberList);
  const [formValues, setFormValues] = useState(initialFormValues);


  const onInputChange = (event => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    })
  })

  const onSubmit = (event => {
    event.preventDefault();

    const newMember = { ...formValues, id: Math.random()}

    setMemberList(memberList => [newMember, ...memberList]);

    setFormValues(initialFormValues)

  })

  return (
    <div className="App">
      <Form
        values={formValues}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        
      />

      {
        memberList.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }

    </div>
  );
}

export default App;
