const INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: '',
};

const publicacionesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default publicacionesReducer;
