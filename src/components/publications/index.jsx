import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as usuariosFetched from '../../actions/usuariosAction';
import * as getPublicaciones from '../../actions/publicacionesAction';

const { usuariosFetched: usuariosFetchedAction } = usuariosFetched;
const { getPublicacion: getPublicacionesAction } = getPublicaciones;

const Publications = (props) => {
  const { usuarios } = props.usuariosReducer;
  const { key } = useParams();

  useEffect(
    // eslint-disable-next-line
    async () => {
      !usuarios.length && (await props.usuariosFetchedAction());
      // eslint-disable-next-line react-hooks/exhaustive-deps
      props.getPublicacionesAction(key);
    },
    // eslint-disable-next-line
    []
  );

  console.log(props);

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
  usuariosFetchedAction,
  getPublicacionesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
