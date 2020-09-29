import React, { useState } from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { users, types } from '../../config/page';

import './styles.css'

function ModalComponent() {
  const visible = useSelector(state => state.modal);

  const dispatch = useDispatch();

  const [description, setDescription] = useState('');
  const [type, setType] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false)

  function closeModal(){
    dispatch({type: 'CHANGE_MODAL'})
  }

  function handleAddTicket(e){
    e.preventDefault();
    if(description && user && type){
      dispatch({type: 'ADD_CARD', card: {user, type, description}})
      dispatch({type: 'CHANGE_MODAL'})
    }
    else{
      setError(true)
    }
  }

  return (
    <Modal
      visible={visible}
      title="Novo Ticket"
      onCancel={closeModal}
      onOk={handleAddTicket}
    >
    <form className="form">
      <fieldset>
        <label htmlFor="description">Descrição</label>
        <input type="text" name="description" id="description" onChange={e=>setDescription(e.target.value)}/>
      </fieldset>
         
      <fieldset>
        <label htmlFor="type">Tipo</label>
        <select name="type" id="type" onChange={e=>setType(e.target.value)}>
          <option></option>
          {types.map(type => (
            <option key={type.id} value={type.title}>{type.title}</option>
          ))}
        </select>
      </fieldset>
      
      <fieldset>
        <label htmlFor="incharge">Responsável</label>
        <select name="incharge" id="incharge" onChange={e=>setUser(e.target.value)}>
          <option></option>
          {users.map(user => (
            <option key={user.id} value={user.name}>{user.name}</option>
            ))}
        </select>
      </fieldset>
      {error && <span>Preencha todos os campos</span>}
    </form>
  </Modal>
  );
}

export default ModalComponent;