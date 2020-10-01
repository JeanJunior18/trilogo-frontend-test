import React, { useEffect, useState } from 'react';
import { Input, Modal, Select } from 'antd';
import { Option } from 'antd/lib/mentions';
import { useDispatch, useSelector } from 'react-redux';
import { users, types } from '../../config/page';

import './styles.css'
import Dropzone from '../Dropzone';

function ModalComponentUpdate() {
  const dispatch = useDispatch();

  const visible = useSelector(state => state.modalUpdate.open);
  const dataTicket = useSelector(state => state.modalUpdate.data);
  const imageURL = useSelector(state => state.img);

  const [description, setDescription] = useState(null);
  const [type, setType] = useState(null);
  const [user, setUser] = useState(null);
  const [ticketId, setTicketId] = useState(null);

  const [error, setError] = useState(false);

  useEffect(()=>{
    const [id, desc, type, user, imageURL] = dataTicket;
    setTicketId(id);
    setDescription(desc);
    setType(type);
    setUser(user);
    dispatch({type: 'SET_IMG', url: imageURL || null})
  },[dataTicket, dispatch])


  function closeModal(){
    dispatch({type: 'CLOSE_MODAL_UPDATE'})
    setDescription(null);
    setType(null)
    setUser(null)
    setTicketId(null);
    dispatch({type: 'UNSET_IMG'})
    console.log(description)
  }

  function handleUpdateTicket(e){
    e.preventDefault();

    if(description && user && type){
      dispatch({type: 'UPDATE_CARD', data: {description, user, type, ticketId, imageURL}})
      dispatch({type: 'CLOSE_MODAL_UPDATE'})
      setDescription(null);
      setType(null)
      setUser(null)
      setTicketId(null);
      dispatch({type: 'UNSET_IMG'})
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
      onOk={handleUpdateTicket}
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
      
      <Dropzone />

      {error && <span>Preencha todos os campos</span>}
    </form>
  </Modal>
  );
}

export default ModalComponentUpdate;