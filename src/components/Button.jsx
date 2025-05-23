import React from 'react';
import styles from '../styles/modules/Button.module.css';

const Button = ({ children, variant = 'primary', type = 'button', onClick, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
