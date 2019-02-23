import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './components/containers/AppContainer';
// Apply styles
import './scss/style.scss';

const elem = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  elem
);
