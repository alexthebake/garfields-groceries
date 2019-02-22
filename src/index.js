import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// Apply styles
import './scss/style.scss';

const elem = document.getElementById('app');
ReactDOM.render(<App />, elem);
