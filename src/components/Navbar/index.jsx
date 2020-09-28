import React from 'react';
import './styles.css'
import { Button } from 'antd'
import logo from '../../assets/logo.png'
import addIcon from '../../assets/icons/add.png'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="trílogo"/>
        </div>

        <Button
            icon={<addIcon />}
        >
            Novo Ticket
        </Button>
    </nav>
  );
}

export default Navbar;