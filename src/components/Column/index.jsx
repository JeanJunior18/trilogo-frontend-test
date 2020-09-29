import React, { useEffect } from 'react';
import './styles.css';
import Card from '../Card';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';

const color = {
  'abertos':'rgba(245,34,45,0.25)',
  'executados':'rgba(212,102,45,0.25)',
  'vistoriados':'rgba(82,196,26,0.25)',
  'arquivados':'rgba(193,185,185, 0.25)',
  'cancelados':'rgba(141,137,165,0.25)',
}

function Column({status}) {

  const dispatch = useDispatch();

  const cards = useSelector(state => state);
  const selectedCards = cards.filter(tickets => tickets.status === status)

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){
      const cardStatus = item.status;
      const columnStatus = status;
     
      if(cardStatus !== columnStatus){
        
        const cardId = item.props.id
        dispatch({type: 'CHANGE_STATUS', data:{cardId, columnStatus}})
      }
    }
  })

  return (
    <>
      <section className="column" ref={dropRef}>
        <article className="title" style={{background: color[status]}}>
          <h3>{status}</h3>
        </article>
        {selectedCards.map((card)=>(
          <Card 
            key={card.id}
            id={card.id} 
            type={card.type} 
            title={card.title} 
            inCharge={card.inCharge} 
            status={status} 
          />
          ))}
      </section>
    </>
  );
}

export default Column;