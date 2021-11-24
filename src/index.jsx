import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import reduxThunk from 'redux-thunk';

const initialState = {
  usuarios: [],
};

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AppStore = createStore(reducer, initialState, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
