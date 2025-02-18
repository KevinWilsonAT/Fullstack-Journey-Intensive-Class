import React from 'react';
import logoSoundify from '../assets/logo/soundify-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <Link to="/">
          <img src={ logoSoundify } alt="Logo Soundify" />
        </Link>

        <Link to="/" className='header__link'>
            <h1>Soundify</h1>
        </Link>
    </div>
  );
};

export default Header;