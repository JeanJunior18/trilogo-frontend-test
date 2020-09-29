
import { createStore } from 'redux';

const INITIAL_STATE = [
    {
        id: 1,
        title: 'Create a Home Page',
        type: 'Procedimento',
        inCharge: 'Jean Junior',
        status: 'executados',
    },
    {
        id: 2,
        title: 'Create Cards',
        type: 'Procedimento',
        inCharge: 'Jean Junior',
        status: 'abertos'
    }
  ]

function courses(state = INITIAL_STATE, action) {
  switch (action.type){
    case 'ADD_CARD':
        return {...state, card: [...state.card, action.card]};
    case 'CHANGE_STATUS':
        return state.map(card=>(card.id === action.data.cardId) ? {
                ...card,
                status: action.data.columnStatus
            } :
            card
        )
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;