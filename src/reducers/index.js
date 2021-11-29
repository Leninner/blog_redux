import usuariosReducer from './usuariosReducer';
import publicacionesReducer from './publicacionesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  usuariosReducer,
  publicacionesReducer,
});
