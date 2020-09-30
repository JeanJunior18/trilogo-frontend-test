import React from 'react';
import Board from './components/Board';
import Navbar from './components/Navbar';
import ModalComponent from './components/Modal/CreateTicket'
import ModalComponentUpdate from './components/Modal/UpdateTicket';
import ModalChangeStatus from './components/Modal/ChangeStatus';
import './styles/index.css'

function App() {
  return (
    <div id="root">
        <Navbar />

        <Board />
        <ModalComponent />
        <ModalComponentUpdate />
        <ModalChangeStatus />
    </div>
  );
}

export default App;
