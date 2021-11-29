import React from 'react';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Table = ({ usuarios }) => {
  const navigate = useNavigate();

  return (
    <>
      <table>
        <thead>
          {usuarios?.map((user, key) => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                  <Link to={`/publications/${key}`}>
                    <div className='eye-solid icon'></div>
                  </Link>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
      <div>
        <button onClick={() => navigate(-1)}>Regresar</button>
        <button onClick={() => navigate('/')}>Home</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usuarios: state.usuarios,
  };
};

export default connect(mapStateToProps, null)(Table);
