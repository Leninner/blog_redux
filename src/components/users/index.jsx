import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../assets/styles/components/Users.scss';
import { useNavigate } from 'react-router';

const Users = () => {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const response = await axios(URL);
      console.log(response.data);
      return setUsers(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className='table-users'>
      <table>
        <thead>
          {users?.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
        </thead>
      </table>
      <div>
        <button onClick={() => navigate(-1)}>Regresar</button>
        <button onClick={() => navigate('/')}>Home</button>
      </div>
    </div>
  );
};

export default Users;
