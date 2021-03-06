import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import reduxThunk from 'redux-thunk';
import './/assets/styles/icons/index.scss';

const AppStore = createStore(reducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={AppStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
