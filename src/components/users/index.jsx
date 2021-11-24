import React, { useEffect } from 'react';
import '../../assets/styles/components/Users.scss';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { usuariosFetched } from '../../actions';

const Users = (props) => {
  const { usuarios } = props;
  const navigate = useNavigate();

  useEffect(() => {
    props.usuariosFetched();
    //eslint-disable-next-line
  }, []);

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
