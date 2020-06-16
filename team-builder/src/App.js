import React, { useState } from 'react';
import Form from './Form';
import './App.css';

function App() {

  const initialFriendsList = [
    {
      name: 'Tim',
      email: 'tim@time.com',
      role: 'Doctor',
    },
    {
      name: 'Mark',
      email: 'mark@mark.com',
      role: 'Professional Truck Driver',
    },
  ]


  const [memberList, setMemberList] = useState(initialFriendsList);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
