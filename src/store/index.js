
import { combineReducers, createStore } from 'redux';
import cards from './cards';
import config from './config';



function modal(state=true, action){
  switch(action.type){
    case 'CHANGE_MODAL':
      return !state;
    default:
      return state;
  }
}

const reducers = combineReducers({cards, modal, config});
const store = createStore(reducers)

export default store;