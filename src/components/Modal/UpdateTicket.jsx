import React, { useState } from 'react';
import { Input, Modal, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import { useDispatch, useSelector } from 'react-redux';
import { users, types } from '../../config/page';

import './styles.css'

function ModalComponentUpdate() {
  const visible = useSelector(state => state.modalUpdate.open);

  const [ dataDesc, dataType, dataUser] = useSelector(state => state.modalUpdate.data)


  const dispatch = useDispatch();

  const [description, setDescription] = useState(dataDesc);
  const [type, setType] = useState(dataType);
  const [user, setUser] = useState(dataUser);
  const [error, setError] = useState(false)


  function closeModal(){
    dispatch({type: 'CLOSE_MODAL_UPDATE'})
    setDescription(null);
    setType(null)
    setUser(null)
  }

  function handleAddTicket(e){
    e.preventDefault();
    if(description && user && type){
      dispatch({type: 'UPDATE_CARD', data: {description, user, type}})
      dispatch({type: 'CLOSE_MODAL_UPDATE'})
      setDescription(null);
      setType(null)
      setUser(null)
  }
    else{
      setError(true)
    }
  }

  return (
    <Modal
      visible={visible}
      title="Editar Ticket"
      onCancel={closeModal}
      onOk={handleAddTicket}
    >
    <form className="form">
      <fieldset>
        <label htmlFor="description">Descrição</label>
        <Input 
          type="text" 
          name="description" 
          id="description" 
          onChange={e=>setDescription(e.target.value)} 
          defaultValue={description}
          value={description}
        />
      </fieldset>
         
      <fieldset>
        <label htmlFor="type">Tipo</label>
        <Select 
          name="type" 
          id="type" 
          onChange={e=>setType(e)}
          defaultValue={type}
          value={type}
        >
          <Option></Option>
          {types.map(type => (
            <Option key={type.id} value={type.title}>{type.title}</Option>
          ))}
        </Select>
      </fieldset>
      
      <fieldset>
        <label htmlFor="incharge">Responsável</label>
        <Select 
          name="incharge" 
          id="incharge" 
          onChange={e=>setUser(e)}
          defaultValue={user}
          value={user}
        >
          <Option></Option>
          {users.map(user => (
            <Option key={user.id} value={user.name}>{user.name}</Option>
            ))}
        </Select>
      </fieldset>
      {error && <span>Preencha todos os campos</span>}
    </form>
  </Modal>
  );
}

export default ModalComponentUpdate;