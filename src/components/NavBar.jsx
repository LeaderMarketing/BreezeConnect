import React, { useState, useCallback } from 'react';
import styles from '../styles/modules/NavBar.module.css';
import navStyles from '../styles/modules/Nav.module.css';
import Button from './Button';
import NavDropdown from './NavDropdown';
import Logo from './Logo';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);
  const navigation = {
    plans: {
      voice: {
        title: 'Voice',
        items: [
          'SIP Trunks',
          '3CX Hosted',
          'Teams Voice',
          'Wholesale'
        ]
      },
      data: {
        title: 'Data',
        items: [
          'Business NBN',
          'Enterprise Ethernet',
          'Mobile Data'
        ]
      },
      services: {
        title: 'Services',
        items: [
          'Inbound Services',
          'SMS Broadcasting',
          { name: 'Whitelabel', label: 'Coming Soon' },
          { name: 'End-User Self-Service', label: 'Coming Soon' }
        ]
      }
    },
    solutions: [
      '3CX Phone System',
      'Phones & Headsets',
      'Teams Rooms Solutions',
      'Pre-Config & Pro Services'
    ],
    partner: [
      'Partner Portal',
      'Support Portal',
      'Become a Leader Reseller',
      'Status',
      'Our Policies and Terms'
    ]
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <Logo />
        </div>        {/* Desktop Navigation */}
        <nav className={styles.navSection}>
          <a href="#" className={navStyles.navItem}>About</a>
          
          <NavDropdown label="Plans" onMobileMenuClose={handleMobileMenuClose} isPlansMenu>
            <div className={navStyles.plansGrid}>
              {Object.values(navigation.plans).map((category) => (
                <div key={category.title} className={navStyles.planCategory}>
                  <h4 className={navStyles.categoryHeader}>{category.title}</h4>
                  {category.items.map((item) => (
                    <a key={typeof item === 'string' ? item : item.name} href="#" className={navStyles.dropdownItem}>
                      {typeof item === 'string' ? item : (
                        <>
                          {item.name}
                          <span className={navStyles.comingSoonLabel}>{item.label}</span>
                        </>
                      )}
                    </a>
                  ))}
                </div>
              ))}
            </div>
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
          <a href="#" className={navStyles.navItem}>MSP Program</a>
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
        </button>        {/* Mobile Menu */}
        <div className={`${navStyles.mobileMenu} ${isMobileMenuOpen ? navStyles.mobileMenuActive : ''}`}>
          <a href="#" className={navStyles.mobileNavItem}>About</a>
          
          <NavDropdown label="Plans" isMobile onMobileMenuClose={handleMobileMenuClose}>
            {Object.values(navigation.plans).map((category) => (
              <div key={category.title} className={navStyles.mobilePlanCategory}>
                <h4 className={navStyles.mobileCategoryHeader}>{category.title}</h4>
                {category.items.map((item) => (
                  <a key={typeof item === 'string' ? item : item.name} href="#" className={navStyles.dropdownItem}>
                    {typeof item === 'string' ? item : (
                      <>
                        {item.name}
                        <span className={navStyles.comingSoonLabel}>{item.label}</span>
                      </>
                    )}
                  </a>
                ))}
              </div>
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
          <a href="#" className={navStyles.mobileNavItem}>MSP Program</a>

          <div className={navStyles.mobileAuthButtons}>
            <Button variant="secondary">Sign Up</Button>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
