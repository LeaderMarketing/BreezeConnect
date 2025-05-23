import React from 'react';
import logoImage from '../assets/breezconnect only.png';

const Logo = () => {
  return (
    <img 
      src={logoImage} 
      alt="Breeze Connect"
      style={{
        height: '30px',
        width: 'auto'
      }}
    />
  );
};

export default Logo;
