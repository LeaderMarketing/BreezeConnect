import React, { useState, useCallback } from 'react';
import styles from '../styles/modules/Header.module.css';
import navStyles from '../styles/modules/Nav.module.css';
import Button from './Button';
import NavDropdown from './NavDropdown';
import Logo from './Logo';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navigation = {
    plans: [
      'Sip Trunks',
      'Teams Voice',
      'NBN and Corporate Fibre',
      'Wholesale',
      'Breeze Hosted 3CX',
      'Inbound Services'
    ],
    solutions: [
      'Hosted PBX',
      '3CX',
      'Phones (Handsets)',
      'Headsets',
      'Pre-Configuration',
      'SMS Broadcasting',
      '4G & 5G Data Sim'
    ],
    partner: [
      'Partner Login',
      'Support Portal',
      'Become a Leader Reseller',
      'Status'
    ]
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navSection}>
          <a href="#" className={navStyles.navItem}>About Us</a>
          
          <NavDropdown label="Plans & Pricing" onMobileMenuClose={handleMobileMenuClose}>
            {navigation.plans.map((item) => (
              <a key={item} href="#" className={navStyles.dropdownItem}>
                {item}
              </a>
            ))}
          </NavDropdown>

          <NavDropdown label="Solutions" onMobileMenuClose={handleMobileMenuClose}>
            {navigation.solutions.map((item) => (
              <a key={item} href="#" className={navStyles.dropdownItem}>
                {item}
              </a>
            ))}
          </NavDropdown>

          <NavDropdown label="Partner" onMobileMenuClose={handleMobileMenuClose}>
            {navigation.partner.map((item) => (
              <a key={item} href="#" className={navStyles.dropdownItem}>
                {item}
              </a>
            ))}
          </NavDropdown>

          <a href="#" className={navStyles.navItem}>Contact Us</a>
          <a href="#" className={navStyles.navItem}>Pay My Bill</a>
        </nav>

        {/* Auth Buttons */}
        <div className={styles.authSection}>
          <Button variant="secondary">Sign Up</Button>
          <Button>Login</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.isActive : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={styles.burgerIcon}>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`${navStyles.mobileMenu} ${isMobileMenuOpen ? navStyles.mobileMenuActive : ''}`}>
          <a href="#" className={navStyles.mobileNavItem}>About Us</a>
          
          <NavDropdown label="Plans & Pricing" isMobile onMobileMenuClose={handleMobileMenuClose}>
            {navigation.plans.map((item) => (
              <a key={item} href="#" className={navStyles.dropdownItem}>
                {item}
              </a>
            ))}
          </NavDropdown>

          <NavDropdown label="Solutions" isMobile onMobileMenuClose={handleMobileMenuClose}>
            {navigation.solutions.map((item) => (
              <a key={item} href="#" className={navStyles.dropdownItem}>
                {item}
              </a>
            ))}
          </NavDropdown>

          <NavDropdown label="Partner" isMobile onMobileMenuClose={handleMobileMenuClose}>
            {navigation.partner.map((item) => (
              <a key={item} href="#" className={navStyles.dropdownItem}>
                {item}
              </a>
            ))}
          </NavDropdown>

          <a href="#" className={navStyles.mobileNavItem}>Contact Us</a>
          <a href="#" className={navStyles.mobileNavItem}>Pay My Bill</a>

          <div className={navStyles.mobileAuthButtons}>
            <Button variant="secondary">Sign Up</Button>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
