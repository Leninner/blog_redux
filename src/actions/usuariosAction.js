import axios from 'axios';
import { USUARIOS_FETCHED, CARGANDO, ERROR } from '../types/usuariosTypes';

export const usuariosFetched = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });
  try {
    const URL = 'https://jsonplaceholder.typicode.com/userss';
    const response = await axios(URL);
    dispatch({
      type: USUARIOS_FETCHED,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: 'Algo salió mal, intentelo más tarde',
    });
  }
};
