import { USUARIOS_FETCHED, CARGANDO, ERROR } from '../types';

const INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: '',
};

const publicacionesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USUARIOS_FETCHED:
      return { ...state, usuarios: action.payload, cargando: false, error: '' };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state, error: action.payload, cargando: false };
    default:
      return state;
  }
};

export default publicacionesReducer;
