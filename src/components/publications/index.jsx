import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { usuariosFetched } from '../../actions';

const Publications = (props) => {
  React.useEffect(() => {
    return !props.usuarios.length && props.usuariosFetched();
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

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

const mapDispatchToProps = {
  usuariosFetched,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
