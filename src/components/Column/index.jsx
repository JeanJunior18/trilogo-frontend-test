import React, { useEffect } from 'react';
import './styles.css';
import Card from '../Card';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { labelColors } from '../../config/page';


function Column({status}) {

  const dispatch = useDispatch();

  const cards = useSelector(state => state.cards);

  const selectedCards = cards.filter(tickets => tickets.status === status)

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item){
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
        <article className="title" style={{background: labelColors[status]}}>
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