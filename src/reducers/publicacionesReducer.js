import { CARGANDO_PUBLICATIONS, ERROR_PUBLICATIONS, PUBLICACIONES_FETCHED } from '../types/publicationTypes';

const INITIAL_STATE = {
  publicaciones: [],
  cargando: false,
  error: '',
};

const publicacionesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUBLICACIONES_FETCHED:
      return { ...state, publicaciones: action.payload, cargando: false, error: '' };
    case CARGANDO_PUBLICATIONS:
      return { ...state, cargando: true };
    case ERROR_PUBLICATIONS:
      return { ...state, error: action.payload, cargando: false };
    default:
      return state;
  }
};

export default publicacionesReducer;
