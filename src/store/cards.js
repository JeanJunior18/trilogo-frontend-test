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
            imageURL: action.card.imageURL,
            status: 'abertos',
          }
        ];

      case 'CHANGE_STATUS':
        return state.map(card => (card.id === action.data.cardId) ? 
          {
            ...card,
            status: action.data.columnStatus
          } 
          : card
        )

      case 'UPDATE_CARD':
        return state.map(card => (card.id === action.data.cardId) ? 
          {
            ...card,
            title: action.data.description,
            inCharge: action.data.user,
            type: action.data.type 
          } 
          : card
        )

      case 'DELETE_CARD':
        const newCards = state.filter(card => card.id !== action.cardId);
        return newCards;

      default:
        return state;
    }
  } finally {

    localStorage.setItem("cards", JSON.stringify(state))
    
  }
}

export default cards;