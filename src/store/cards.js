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
        
        return state.map(user => (user.id === action.data.ticketId) ? 
          {
            ...user,
            title: action.data.description,
            type: action.data.type,
            inCharge: action.data.user,
            imageURL: action.data.imageURL,
          } : user
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