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
    const {title, type, inCharge} = props
    dispatch({type: 'OPEN_MODAL_UPDATE', data:{title, type, inCharge}})
  }
  function handleDelete(){
    setPopView(false)
  }

  return (
      <article className="card" ref={dragRef}>
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