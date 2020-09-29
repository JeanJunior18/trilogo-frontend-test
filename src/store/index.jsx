
import { createStore } from 'redux';

const INITIAL_STATE = {
  card: [
      {
          id: 1,
          title: 'Create a Home Page',
          type: 'Procedimento',
          inCharge: 'Jean Junior',
          column: 'executados',
      },
      {
          id: 2,
          title: 'Create Cards',
          type: 'Procedimento',
          inCharge: 'Jean Junior',
          column: 'abertos'
      }
  ],
}

function courses(state = INITIAL_STATE, action) {
  switch (action.type){
    case 'ADD_CARD':
      return {...state, card: [...state.card, action.title]};
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;