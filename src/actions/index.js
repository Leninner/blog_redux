export const usuariosFetched = (usuarios) => {
  return {
    type: 'USUARIOS_FETCHED',
    payload: usuarios,
  };
};
