import axios from 'axios';

export const getPublicaciones = () => async (dispatch) => {
  const response = await axios.get('http://jsonplaceholder.typicode.com/posts');

  dispatch({
    type: 'PUBLICACIONES_FETCHED',
    payload: response.data,
  });
};
