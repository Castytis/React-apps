import React, { useState } from 'react';
import InfoForm from './components/InfoForm';
import UsersList from './components/UsersList';

function App() {

const [users, setUsers] = useState([])

const addUserHandler = (user) => {
  setUsers((prevUsers) => {
    return [user, ...prevUsers]
  })
}

  return (
    <div>
      <InfoForm onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
