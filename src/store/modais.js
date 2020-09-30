

export function modalCreate(state=true, action){
    switch(action.type){
      case 'OPEN_MODAL_CREATE':
        return !state;
      default:
        return state;
    }
}
  
export function modalUpdate(state={open: false, data: []}, action){
    switch(action.type){
      case 'OPEN_MODAL_UPDATE':
        const {title, type, inCharge} = action.data
        return {open: true, data: [title, type, inCharge]};
      case 'CLOSE_MODAL_UPDATE':
        return {open: false, data: []}
      default:
        return state;
    }
}

export function modalChange(state={open: false, data: []}, action){
    switch(action.type){
      case 'OPEN_MODAL_CHANGE':
        const {cardId, columnStatus} = action.data;
        return {open: true, data:[cardId, columnStatus]}
      case 'CLOSE_MODAL_CHANGE':
        return {open: false, data: []}
      default:
        return state;
    }
}
  