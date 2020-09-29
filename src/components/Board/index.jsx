import Column from '../Column';
import React from 'react';

import './styles.css';


function Board() {
  return (
    <div className="board">
      <Column status="abertos" />
      <Column status="executados" />
      <Column status="vistoriados" />
      <Column status="arquivados" />
    </div>
  );
}

export default Board;