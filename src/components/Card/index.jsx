import { Popover, Button, Popconfirm } from 'antd';
import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import moreIcon from '../../assets/icons/more.png';

import './styles.css'

function Card(props) {
  const dispatch = useDispatch();

  const [popView, setPopView] = useState(false);

  const [, dragRef] = useDrag({
    item: { type: 'CARD', props},
  })

  const content = (
    <div id='popover'>
      <Button type='text' onClick={handleEdit}>Editar</Button>

      <Popconfirm
        placement="bottom"
        title="Tem Certeza que deseja excluir este Ticket?"
        onConfirm={handleDelete}
        okText="Excluir"
        cancelText="Cancelar"
      >
        
        <Button type='text'>Excluir</Button>

      </Popconfirm>
    </div>
  )

  function handleEdit(){
    setPopView(false)
    const {id, title, type, inCharge, imageURL} = props
    dispatch({type: 'OPEN_MODAL_UPDATE', data:{id, title, type, inCharge, imageURL}})
  }
  
  function handleDelete(){
    setPopView(false)
    dispatch({type: 'DELETE_CARD', cardId: props.id})
  }

  return (
      <article className="card" ref={dragRef}>

        {props.imageURL && (
          <div className="image">
            <img src={props.imageURL} alt="Imagem Anexada"/>
          </div>
        )}

        <span className="type">
          {props.type}
        </span>

        <span className="title">
          <span className="code">{props.id}</span>
          <h3>{props.title}</h3>
        </span>

        <div className="incharge">
          <span>{props.inCharge}</span>

          <div className="more">
            <Popover content={content} trigger="click" visible={popView} onVisibleChange={()=>setPopView(!popView)}>
              <Button className="button" style={{border: "none"}}>
                <img src={moreIcon} alt="..."/>
              </Button>
            </Popover>
          </div>
        </div>
      </article>
  );
}

export default Card;