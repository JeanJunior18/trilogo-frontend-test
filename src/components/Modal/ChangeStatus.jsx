import { Modal } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { textColors } from '../../config/page';



function ChangeStatus() {

    const dispatch = useDispatch();

    const visible = useSelector(state => state.modalChange.open);
    const [cardId, columnStatus] = useSelector(state => state.modalChange.data);

    function closeModal(){
      dispatch({type: 'CLOSE_MODAL_CHANGE'})
    }

    function changeTicket(){
      dispatch({type: 'CHANGE_STATUS', data:{cardId, columnStatus}})
      dispatch({type: 'CLOSE_MODAL_CHANGE'})
    }

  return (
      <Modal
        visible={visible}      
        title="Alterar Status"
        onCancel={closeModal}
        onOk={changeTicket}
      >
        <p>
          Você tem certeza que deseja mover o ticket 
          <span id="id"> {cardId || ''} </span>
          para a coluna 
          <span  style={{color: textColors[columnStatus]}}> {columnStatus || ''}</span>
          ?
        </p>

      </Modal>
  );
}

export default ChangeStatus;