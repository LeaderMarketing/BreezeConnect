import React from 'react';
import styles from '../styles/modules/Footer.module.css';
import linkedinIcon from '../assets/icons/linkedin.svg';
import facebookIcon from '../assets/icons/facebook.svg';

// Legal links for the footer
const legalLinks = [
  'Privacy Policy',
  'Terms of Use',
  'Legal',
  'Site Map'
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.copyright}>
            Copyright &copy; {currentYear} Breeze Connect. All Rights Reserved.
          </div>
          <div className={styles.legalLinks}>
            {legalLinks.map((item, index) => (
              <React.Fragment key={item}>
                <a href="#">{item}</a>
                {index < legalLinks.length - 1 && <span> | </span>}
              </React.Fragment>
            ))}
          </div>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="LinkedIn" className={styles.socialIconLink}>
              <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
            </a>
            <a href="#" aria-label="Facebook" className={styles.socialIconLink}>
              <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;