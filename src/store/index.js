
import { combineReducers, createStore } from 'redux';
import cards from './cards';
import { modalCreate, modalUpdate, modalChange } from './modais';

function img(state=null, action){
    switch(action.type){
        case 'SET_IMG':
            return action.url
        case 'UNSET_IMG':
            return null
        default: 
            return null
    }
}

const reducers = combineReducers({cards, modalCreate, modalUpdate, modalChange, img});
const store = createStore(reducers)

export default store;