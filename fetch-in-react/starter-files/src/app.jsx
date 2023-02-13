/* eslint-disable no-unused-vars -- Remove this line. */
import React, { useState } from 'react';
import UserList from './user-list';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  /* your code here (hint: useEffect) */

  return isLoading
    ? <p>Loading...</p>
    : <UserList users={users} />;
}
