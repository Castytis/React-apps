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

const deleteUserHandler = (userId) => {
  setUsers((prevUsers) => {
    const updatedUsers = prevUsers.filter((user) => {
      return (user.id !== userId)
    })
    return updatedUsers
  })
}

  return (
    <div>
      <InfoForm onAddUser={addUserHandler} />
      <UsersList users={users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
