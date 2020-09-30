import React, { useState } from 'react';
import { Input, Modal, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import { useDispatch, useSelector } from 'react-redux';
import { users, types } from '../../config/page';
import Dropzone from '../Dropzone';

import './styles.css'

function ModalComponent() {
  const visible = useSelector(state => state.modalCreate);

  const dispatch = useDispatch();

  const [description, setDescription] = useState('');
  const [type, setType] = useState(null);
  const [user, setUser] = useState(null);
  const [imageURL, setImageURL] = useState(null)
  const [error, setError] = useState(false)

  function closeModal(){
    dispatch({type: 'OPEN_MODAL_CREATE'})
    setUser(null)
    setDescription(null)
    setType(null)
  }

  function handleAddTicket(e){
    e.preventDefault();
    console.log(description, type, user)
    if(description && user && type){
      dispatch({type: 'ADD_CARD', card: {user, type, description, imageURL}})
      dispatch({type: 'OPEN_MODAL_CREATE'})
      setUser(null)
      setDescription(null)
      setType(null)
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

        <Input 
          type="text" 
          name="description" 
          id="description" 
          onChange={e=>setDescription(e.target.value)} 
          value={description}
        />
      </fieldset>
         
      <fieldset>
        <label htmlFor="type">Tipo</label>

        <Select 
          name="type"
          id="type" 
          onChange={e=>setType(e)} 
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
          value={user}
        >
        <Option></Option>

        {users.map(user => (
          <Option key={user.id} value={user.name}>{user.name}</Option>
        ))}
        </Select>
      </fieldset>
      
      <fieldset>
        <label htmlFor="dropzone">Image: </label>
        <Dropzone setIMG={setImageURL} />
      </fieldset>

      {error && <span>Preencha todos os campos</span>}
    </form>
  </Modal>
  );
}

export default ModalComponent;