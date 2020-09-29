import React from 'react';
import { useDrag } from 'react-dnd';
import moreIcon from '../../assets/icons/more.png';

import './styles.css'

function Card(props) {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', props},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

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
              <img src={moreIcon} alt="..."/>
            </div>
          </div>
      </article>
  );
}

export default Card;