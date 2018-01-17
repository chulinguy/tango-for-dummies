import { combineReducers } from 'redux';
import imgReducer from './imgReducer';
import favReducer from './favReducer';

const maindReducer = combineReducers({
  imgReducer,
  favReducer
});

export default maindReducer;