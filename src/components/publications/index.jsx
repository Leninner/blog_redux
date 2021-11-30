import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as usuariosFetched from '../../actions/usuariosAction';
import * as getPublicaciones from '../../actions/publicacionesAction';

const Publications = (props) => {
  const { usuarios } = props.usuariosReducer;
  React.useEffect(() => {
    return !usuarios.length && props.usuariosFetched();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(props);

  const { key } = useParams();

  return (
    <div>
      <h1>Publications of</h1>
      {key}
    </div>
  );
};

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
  return { usuariosReducer, publicacionesReducer };
};

const mapDispatchToProps = {
  ...usuariosFetched,
  ...getPublicaciones,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
