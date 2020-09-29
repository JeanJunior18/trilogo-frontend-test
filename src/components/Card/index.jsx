import React from 'react';
import moreIcon from '../../assets/icons/more.png';

import './styles.css'

function Card({title, type, inCharge}) {
  return (
      <article className="card">
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