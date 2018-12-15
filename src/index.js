import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Modal from 'react-modal';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reminders from './store/reducers/reminders';

import './index.css';

Modal.setAppElement('#root');

const store = createStore(reminders);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
