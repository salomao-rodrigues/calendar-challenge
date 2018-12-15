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

serviceWorker.unregister();
