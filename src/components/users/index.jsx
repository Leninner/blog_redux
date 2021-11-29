import React, { useEffect } from 'react';
import '../../assets/styles/components/Users.scss';
import { connect } from 'react-redux';
import { usuariosFetched } from '../../actions';
import { Spinner } from '../Spinner';
import { Fatal } from '../Fatal';
import Table from '../Table';

const Users = (props) => {
  const { cargando, error } = props;

  useEffect(() => {
    props.usuariosFetched();
    //eslint-disable-next-line
  }, []);

  const putContent = () => {
    if (cargando) return <Spinner />;

    if (error) return <Fatal mensaje={error} />;

    return <Table />;
  };

  return <div className='table-users'>{putContent()}</div>;
};

const mapStateToProps = (state) => {
  return {
    cargando: state.cargando,
    error: state.error,
  };
};

const mapDispatchToProps = {
  usuariosFetched,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
