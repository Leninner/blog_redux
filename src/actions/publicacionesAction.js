import axios from 'axios';
import { PUBLICACIONES_FETCHED, CARGANDO_PUBLICATIONS, ERROR_PUBLICATIONS } from '../types/publicationTypes';

export const getPublicacion = (id) => async (dispatch, getState) => {
  const { usuarios } = getState().usuariosReducer;
  const { publicaciones } = getState().publicacionesReducer;

  const usuario_id = usuarios[id].id;
  dispatch({ type: CARGANDO_PUBLICATIONS });

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);
    const publicacionesActualizadas = [...publicaciones, response.data];

    dispatch({
      type: PUBLICACIONES_FETCHED,
      payload: publicacionesActualizadas,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PUBLICATIONS,
      payload: error.message,
    });
  }
};

// export const getPublicacion = (id) => async (dispatch) => {
//   dispatch({ type: CARGANDO_PUBLICATIONS });

//   try {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

//     dispatch({
//       type: PUBLICACIONES_FETCHED,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: ERROR_PUBLICATIONS,
//       payload: error.message,
//     });
//   }
// };
