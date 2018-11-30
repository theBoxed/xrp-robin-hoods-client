import React from 'react';
import './topbar.css';
import MenuContainer from './MenuContainer';

export default function TopBar(props) {
  return (
    <header role="banner">
      <div className="navContainer">
        <div className="logo">
          <div className="logoContainer">
            <a href="/">
              <img
                src="https://blockchaindesk.ru/images/rates/xrp.png"
                alt="XRP Robin Hood"
              />
            </a>
          </div>
        </div>
        <MenuContainer />
      </div>
    </header>
  );
}
