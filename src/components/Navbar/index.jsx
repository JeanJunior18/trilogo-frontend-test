import React from 'react';

import './styles.css'
import logo from '../../assets/logo.png'
import addIcon from '../../assets/icons/add.png'
import { useDispatch } from 'react-redux';

function Navbar() {
  const dispatch = useDispatch();

  function openModal(){
    dispatch({type: 'OPEN_MODAL_CREATE'});
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="trílogo"/>
        </div>

        <button type="button" onClick={openModal}>
          <img src={addIcon} alt="+"/>
          Novo Ticket
        </button>
      </nav>
    </>
  );
}

export default Navbar;