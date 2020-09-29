import React from 'react';
import { useDrag } from 'react-dnd';
import moreIcon from '../../assets/icons/more.png';

import './styles.css'

function Card({title, type, inCharge}) {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD' },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
      <article className="card" ref={dragRef}>
          <span className="type">
            {type}
          </span>

          <span className="title">
            <span className="code">{6523}</span>
            <h3>{title}</h3>
          </span>

          <div className="incharge">
            <span>{inCharge}</span>
            <div className="more">
              <img src={moreIcon} alt="..."/>
            </div>
          </div>
      </article>
  );
}

export default Card;