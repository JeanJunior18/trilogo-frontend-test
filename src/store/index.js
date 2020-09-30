
import { combineReducers, createStore } from 'redux';
import cards from './cards';
import { modalCreate, modalUpdate, modalChange } from './modais';




const reducers = combineReducers({cards, modalCreate, modalUpdate, modalChange});
const store = createStore(reducers)

export default store;