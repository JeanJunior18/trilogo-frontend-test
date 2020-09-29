import React from 'react';
import './styles.css';
import Card from '../Card';

const cards = [
  {id:1,},
  {id:2,},
  {id:3,},
]

const color = {
  'abertos':'rgba(245,34,45,0.25)',
  'executados':'rgba(212,102,45,0.25)',
  'vistoriados':'rgba(82,196,26,0.25)',
  'arquivados':'rgba(193,185,185, 0.25)',
  'cancelados':'rgba(141,137,165,0.25)',
}

function Column({status}) {
  return (
    <>
      <section className="column">
        <article className="title" style={{background: color[status]}}>
          <h3>{status}</h3>
        </article>
        {cards.map(()=>(<Card type={"procedimento"} title={"Consertar Vazamento"} inCharge={"Yudi Tamashiro"} />))}
      </section>
    </>
  );
}

export default Column;