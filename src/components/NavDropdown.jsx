import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../styles/modules/Nav.module.css';

const NavDropdown = ({ label, children, isMobile, onMobileMenuClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const handleMobileClose = useCallback(() => {
    setIsOpen(false);
    onMobileMenuClose?.();
  }, [onMobileMenuClose]);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 768 && isMobile) {
      onMobileMenuClose?.();
    }
    setIsOpen(false);
  }, [isMobile, onMobileMenuClose]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleClickOutside, handleResize]);

  if (isMobile) {
    return (
      <>
        <div
          className={styles.mobileNavItem}
          onClick={() => setIsOpen(true)}
        >
          <span>{label}</span>
          <span className={styles.mobileNavArrow} />
        </div>
        <div className={`${styles.mobileSubmenu} ${isOpen ? styles.mobileSubmenuActive : ''}`}>
          <div className={styles.mobileSubmenuHeader}>
            <button 
              className={styles.mobileBackButton}
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.mobileBackArrow} />
            </button>
            <div className={styles.mobileSubmenuTitle}>{label}</div>
          </div>
          <div className={styles.mobileSubmenuContent}>
            {React.Children.map(children, (child, index) => (
              React.cloneElement(child, {
                className: `${child.props.className} ${styles.mobileSubmenuItem}`
              })
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div 
        ref={dropdownRef}
        className={`${styles.navItem} ${isOpen ? styles.dropdownActive : ''}`}
      >
        <div 
          ref={triggerRef}
          className={styles.dropdownTrigger}
          onClick={() => setIsOpen(!isOpen)}
        >
          {label}
        </div>
      </div>
      <div className={`${styles.dropdownContainer} ${isOpen ? styles.dropdownActive : ''}`}>
        <div className={styles.dropdownBackground}>
          <div className={`container ${styles.dropdownContent}`}>
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownHeader}>{label}</div>
            <div className={styles.dropdownItems}>
              {React.Children.map(children, (child, index) => (
                React.cloneElement(child, {
                  style: {
                    transitionDelay: `${index * 0.05}s`
                  }
                })
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavDropdown;
