import React from 'react';
import burgerLogo from '../../assets/images/logo.png';
import './Logo.css';

const logo = (props) => (
  <div className="Logo">
    <img src={burgerLogo} alt="my burger"/>
  </div>
);

export default logo;
