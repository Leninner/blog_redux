import React, { useEffect } from 'react';
import '../../assets/styles/components/Users.scss';
import { useNavigate } from 'react-router';
import { connect } from 'react-redux';
import { usuariosFetched } from '../../actions';
import { Spinner } from '../Spinner';

const Users = (props) => {
  const { usuarios, cargando } = props;
  const navigate = useNavigate();

  useEffect(() => {
    props.usuariosFetched();
    //eslint-disable-next-line
  }, []);

  const putContent = () => {
    if (cargando) return <Spinner />;

    return (
      <>
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
      </>
    );
  };

  return <div className='table-users'>{putContent()}</div>;
};

const mapStateToProps = (state) => {
  return {
    usuarios: state.usuarios,
    cargando: state.cargando,
    error: state.error,
  };
};

const mapDispatchToProps = {
  usuariosFetched,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
