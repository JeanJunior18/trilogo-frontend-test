import React from 'react';
import Board from './components/Board';
import Navbar from './components/Navbar';
import './styles/index.css'

function App() {
  return (
    <div id="root">
        <Navbar />

        <Board />
    </div>
  );
}

export default App;
