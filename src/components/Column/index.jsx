import React from 'react';
import './styles.css';
import Card from '../Card';
import { useSelector } from 'react-redux';

const color = {
  'abertos':'rgba(245,34,45,0.25)',
  'executados':'rgba(212,102,45,0.25)',
  'vistoriados':'rgba(82,196,26,0.25)',
  'arquivados':'rgba(193,185,185, 0.25)',
  'cancelados':'rgba(141,137,165,0.25)',
}

function Column({status}) {

  const cards = useSelector(state => state.card);

  const selectedCards = cards.filter(tickets => tickets.column === status)

  return (
    <>
      <section className="column">
        <article className="title" style={{background: color[status]}}>
          <h3>{status}</h3>
        </article>
        {selectedCards.map((card)=>(<Card type={card.type} title={card.title} inCharge={card.inCharge} />))}
      </section>
    </>
  );
}

export default Column;