import {combineReducers} from 'redux';
import userReducer from './User';
import counterReducer from './Counter';

const allReducers = combineReducers ({
     userReducer,
     counterReducer
});
export default allReducers;