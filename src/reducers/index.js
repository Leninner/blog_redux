import { USUARIOS_FETCHED, CARGANDO, ERROR } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case USUARIOS_FETCHED:
      return { ...state, usuarios: action.payload, cargando: false };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state, error: action.payload, cargando: false };
    default:
      return state;
  }
};

export default reducer;
