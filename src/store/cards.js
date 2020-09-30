function cards(state = JSON.parse(localStorage.getItem("cards")) || [], action) {
  try {
    switch (action.type) {
      case 'ADD_CARD':
        return [
          ...state,
          {
            id: state.length + 1,
            title: action.card.description,
            type: action.card.type,
            inCharge: action.card.user,
            status: 'abertos',
          }
        ];

      case 'CHANGE_STATUS':
        return state.map(card => (card.id === action.data.cardId) ? {
            ...card,
            status: action.data.columnStatus
          } :
          card
        )
      case 'UPDATE_CARD':
        const {description, user, type} = action.data
        return state.map(card => (card.id === action.data.cardId) ? {
            ...card,
            title: description,
            inCharge: user,
            type: type 
          } :
          card
        )
      default:
        return state;
    }
  } finally {
    localStorage.setItem("cards", JSON.stringify(state))
  }
}

export default cards;