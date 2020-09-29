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
        status: 'abertos',
    }
]

function cards(state = JSON.parse(localStorage.getItem("cards")) || INITIAL_STATE, action) {
  try{
    switch (action.type){
      case 'ADD_CARD':
        return [
          ...state, 
          {
            id: state.length,
            title: action.card.description,
            type: action.card.type,
            inCharge: action.card.user,
            status: 'abertos',
          }
        ];
  
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
  finally {
    localStorage.setItem("cards", JSON.stringify(state))
  }
}

export default cards;
  