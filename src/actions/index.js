import axios from 'axios';
import { USUARIOS_FETCHED } from '../types';

export const usuariosFetched = () => async (dispatch) => {
  const URL = 'https://jsonplaceholder.typicode.com/users';
  const response = await axios(URL);
  dispatch({
    type: USUARIOS_FETCHED,
    payload: response.data,
  });
};
