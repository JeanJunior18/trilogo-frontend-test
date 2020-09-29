import React from 'react';
import './styles.css'
import logo from '../../assets/logo.png'
import addIcon from '../../assets/icons/add.png'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="trílogo"/>
        </div>

        <button type="button">
            <img src={addIcon} alt="+"/>
            Novo Ticket
        </button>
    </nav>
  );
}

export default Navbar;