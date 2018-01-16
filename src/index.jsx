import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app';
import mainReducer from './reducers';

const store = createStore(mainReducer); 

const reactDOMrender = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App reduxState={store.getState()} />
    </Provider>, 
    document.getElementById('app')
  )
};
store.subscribe(reactDOMrender);
