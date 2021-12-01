import axios from 'axios';
import { PUBLICACIONES_FETCHED, CARGANDO_PUBLICATIONS, ERROR_PUBLICATIONS } from '../types/publicationTypes';
import * as usuariosTypes from '../types/usuariosTypes';

const { USUARIOS_FETCHED: USUARIOS_TRAER_TODOS } = usuariosTypes;

export const getPublicacion = (key) => async (dispatch, getState) => {
  const { usuarios } = getState().usuariosReducer;
  const { publicaciones } = getState().publicacionesReducer;

  const usuario_id = usuarios[key].id;
  dispatch({ type: CARGANDO_PUBLICATIONS });

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);
    const publicacionesActualizadas = [...publicaciones, response.data];

    const publicaciones_key = publicacionesActualizadas.length - 1;

    const usuariosActualizados = [...usuarios];

    usuariosActualizados[key] = {
      ...usuarios[key],
      publicaciones_key,
    };

    dispatch({
      type: PUBLICACIONES_FETCHED,
      payload: publicacionesActualizadas,
    });

    dispatch({
      type: USUARIOS_TRAER_TODOS,
      payload: usuariosActualizados,
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
