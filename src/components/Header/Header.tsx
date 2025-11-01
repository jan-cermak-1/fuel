import React from 'react';
import './Header.css';
import onlineIndicatorIcon from '../assets/icons/ec370347b4c9e3e2a0ac2ee7d22ac373da78877a.svg';
import fullscreenIcon from '../assets/icons/8d1ef639026f81774b958c4140a6756c92ece3c5.svg';

interface HeaderProps {
  teamName?: string;
}

const Header: React.FC<HeaderProps> = ({ teamName = '(TEAM NAME)' }) => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__headline">
          <h1 className="header__title">Command center</h1>
          <div className="header__badge">
            <span>{teamName}</span>
          </div>
        </div>
      </div>
      <div className="header__right">
        <div className="header__badge">
          <img src={onlineIndicatorIcon} alt="Online" className="header__online-icon" />
          <span>3 Care teammates <span className="header__online-text">online</span></span>
        </div>
        <div className="header__divider" />
        <button className="header__button" title="Fullscreen">
          <img src={fullscreenIcon} alt="Fullscreen" />
        </button>
      </div>
    </div>
  );
};

export default Header;

