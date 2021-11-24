import React, { useEffect } from 'react';
import '../../assets/styles/components/Users.scss';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { usuariosFetched } from '../../actions';
import axios from 'axios';

const Users = (props) => {
  const { usuarios } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');
      props.usuariosFetched(result.data);
    };
    fetchData();
    // es para evitar el warning de este llamado de useEffect
    // TODO: Learn how to use useEffect in async functions
    // eslint-disable-next-line
  }, []);

  console.log(usuarios);

  return (
    <div className='table-users'>
      <table>
        <thead>
          {usuarios?.map((user) => {
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

const mapStateToProps = (state) => {
  return {
    usuarios: state.usuarios,
  };
};

const mapDispatchToProps = {
  usuariosFetched,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
