import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import * as usuariosFetched from '../../actions/usuariosAction';
import * as getPublicaciones from '../../actions/publicacionesAction';
import { Spinner } from '../Spinner';
import { Fatal } from '../Fatal';

const { usuariosFetched: usuariosFetchedAction } = usuariosFetched;
const { getPublicacion: getPublicacionesAction } = getPublicaciones;

const Publications = (props) => {
  const { usuarios, error, cargando } = props.usuariosReducer;
  const { key } = useParams();

  // eslint-disable-next-line
  useEffect(async () => {
    if (!usuarios.length) {
      return await props.usuariosFetchedAction();
    }

    if (error) {
      return;
    }

    if (!('publicaciones_key' in usuarios[key])) {
      return props.getPublicacionesAction(key);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(props);

  const ponerUsuario = () => {
    if (error) return <Fatal mensaje={error} />;

    if (cargando || !usuarios.length) return <Spinner />;

    const nombre = usuarios[key].name;

    return <h1>Publications of {nombre}</h1>;
  };

  const ponerPublications = () => {
    const {
      usuariosReducer,
      usuariosReducer: { usuarios },
      publicacionesReducer,
      publicacionesReducer: { publicaciones },
    } = props;

    if (usuariosReducer.error) return;
    if (!usuarios.length) return;

    if (publicacionesReducer.cargando) return <Spinner />;
    if (publicacionesReducer.error) return <Fatal mensaje={publicacionesReducer.error} />;
    if (publicaciones.length === 0) return;
    if (!('publicaciones_key' in usuarios[key])) return;
  };

  return <div>{ponerUsuario()}</div>;
};

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
  return { usuariosReducer, publicacionesReducer };
};

const mapDispatchToProps = {
  usuariosFetchedAction,
  getPublicacionesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
