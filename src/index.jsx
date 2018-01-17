import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App reduxState={store.getState()} />
  </Provider>, 
  document.getElementById('app')
);
// store.subscribe(reactDOMrender);
