import React from 'react';
import logger from 'redux-logger'
import { render } from 'react-dom';
import './index.css';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import { logIn, logOut } from './actions/auth'

let store = createStore(reducer, applyMiddleware(logger));

store.dispatch(logIn('eugen', 13));
store.dispatch(logOut());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
