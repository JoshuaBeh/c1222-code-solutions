/* eslint-disable no-unused-vars -- Remove this line. */
import React, { useState, useEffect } from 'react';
import UserList from './user-list';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  /* your code here (hint: useEffect) */
  const url = 'https://jsonplaceholder.typicode.com/users';
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return isLoading
    ? <p>Loading...</p>
    : <UserList users={users} />;
}
