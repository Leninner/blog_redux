import { USUARIOS_FETCHED } from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case USUARIOS_FETCHED:
      return { ...state, usuarios: action.payload };
    default:
      return state;
  }
};

export default reducer;
