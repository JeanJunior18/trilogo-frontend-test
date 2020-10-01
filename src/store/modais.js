

export function modalCreate(state=false, action){
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
        const {id, title, type, inCharge, imageURL} = action.data
        return {open: true, data: [id, title, type, inCharge, imageURL]};
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
  