import React from 'react';
import styles from '../styles/modules/TechPartners.module.css';

function TechPartners() {
  const partners = [
    { name: '3CX', src: '/assets/logos/3cx.png' },
    { name: 'Yealink', src: '/assets/logos/yealink.png' },
    { name: 'NBN', src: '/assets/logos/nbn.png' },
    { name: 'Microsoft', src: '/assets/logos/microsoft.png' },
    { name: 'Google', src: '/assets/logos/google.png' },
    { name: 'Oracle', src: '/assets/logos/oracle.png' },
    { name: 'AWS', src: '/assets/logos/aws.png' },
    { name: 'SNOM', src: '/assets/logos/snom.png' },
    { name: 'Fanvil', src: '/assets/logos/fanvil.png' },
    { name: 'Jabra', src: '/assets/logos/jabra.png' }
  ];

  return (
    <section className={styles.techPartners}>
      <div className={styles.container}>
        <h2 className={styles.heading}>OUR TECHNOLOGY PARTNERS</h2>
        <div className={styles.logosGrid}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.logoContainer}>
              <img 
                src={partner.src}
                alt={`${partner.name} logo`}
                className={styles.logo}
                onError={(e) => {
                  e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='50' viewBox='0 0 150 50'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='18' fill='%23999'%3E${partner.name}%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechPartners;
