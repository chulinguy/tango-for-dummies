import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import mainReducer from './reducers';

const middleware = applyMiddleware(createLogger());

export default createStore(mainReducer, middleware);
