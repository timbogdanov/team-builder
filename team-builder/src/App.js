import React, { useState } from 'react';
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
  
  console.log(memberList)
  return (
    <div className="App">

    </div>
  );
}

export default App;
