import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css'
import UserData from './Components/UserData';


function App() {

  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json()
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    const API = "https://jsonplaceholder.typicode.com/users";
    fetchUsers(API);
  }, []);


  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default App;
