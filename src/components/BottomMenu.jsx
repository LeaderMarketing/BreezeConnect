import React from 'react';
import Logo from './Logo'; 
import Button from './Button'; 
import styles from '../styles/modules/BottomMenu.module.css';
import phoneIcon from '../assets/icons/phone.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import facebookIcon from '../assets/icons/facebook.svg';


import apnicLogo from '../assets/logos/affiliations/apnic.svg';
import commComLogo from '../assets/logos/affiliations/comm_com.svg';
import tioLogo from '../assets/logos/affiliations/tio.svg';
import commsAllianceLogo from '../assets/logos/affiliations/cam.svg';


const membershipLogos = [
  {
    name: 'APNIC',
    logo: apnicLogo,
    url: 'https://www.apnic.net/'
  },
  {
    name: 'CommCom',
    logo: commComLogo,
    url: 'https://commcom.com.au'
  },
  {
    name: 'TIO',
    logo: tioLogo,
    url: 'https://tio.com.au'
  },
  {
    name: 'Comms Alliance',
    logo: commsAllianceLogo,
    url: 'https://www.commsalliance.com.au/'
  }
];

// Navigation data for the 4 link columns
const bottomMenuNavigation = {
  plans: [
    'SIP Trunks',
    '3CX Hosted',
    'Teams Voice',
    'Business NBN',
    'Enterprise Ethernet',
    'Mobile Data',
    'Wholesale',
    'Inbound Services',
    'SMS Broadcasting'
  ],
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
  ],
  company: [
    'About Us',
    'Contact Us',
    'Pay My Bill',
    'MSP Program'
  ],
  legalLinks: [
    'Privacy Policy',
    'Terms of Use',
    'Legal',
    'Site Map'
  ]
};

const BottomMenu = () => {
  return (
    <div className={styles.bottomMenu}>
      <div className={`container ${styles.bottomMenuContainer}`}>
        {/* Top Section - Membership/Alliance Logos */}
        <div className={styles.membershipSection}>
          <h3 className={styles.membershipTitle}>WE ARE MEMBERS OF</h3>
          <div className={styles.membershipLogos}>
            {membershipLogos.map((membership) => (
              <a 
                key={membership.name} 
                href={membership.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.membershipLogoLink}
              >
              <img 
                  src={membership.logo}
                  alt={membership.name} 
                  className={styles.membershipLogo} 
                />
              </a>
            ))}
          </div>
        </div>        {/* Main Content - Link Columns */}
        <div className={styles.mainContent}>
          {/* First Column - Company Info */}
          <div className={styles.companyColumn}>
            <div className={styles.logoWrapper}>
              <Logo className={styles.bottomMenuLogo} />
            </div>
            <div className={styles.ctaArea}>
              <Button variant="primary" href="tel:1300127339" className={styles.ctaPhoneButton}>
                <img src={phoneIcon} alt="Phone" className={styles.phoneIcon} /> 1300 127 339
              </Button>
            </div>
            
            <div className={styles.addressBlock}>
              <p>165 Franklin Street Adelaide</p>
              <p>5000, South Australia</p>
              <p>Monday - Friday</p>
              <p>9:00 AM - 5:30 PM</p>
            </div>
          </div>
          
          {/* Other Link Columns */}
          <div className={styles.linkColumn}>
            <h5 className={styles.columnTitle}>Plans & Pricing</h5>
            <ul>
              {bottomMenuNavigation.plans.map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h5 className={styles.columnTitle}>Solutions</h5>
            <ul>
              {bottomMenuNavigation.solutions.map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h5 className={styles.columnTitle}>Partner</h5>
            <ul>
              {bottomMenuNavigation.partner.map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h5 className={styles.columnTitle}>Company</h5>
            <ul>
              {bottomMenuNavigation.company.map((item) => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>      </div>
    </div>
  );
};

export default BottomMenu;
