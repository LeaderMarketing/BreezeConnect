import React from 'react';
import styles from '../styles/modules/Benefits.module.css';

const Benefits = () => {
  const mainBenefit = {
    title: "100% Australian Channel-Only Telco",
    description: "We are 100% Australian owned channel-focused ICT distributor with no direct sales ensuring all of invoices pay commission to our Channel Partners.",
    isMain: true
  };

  const benefitItems = [
    {
      id: 1,
      title: "First Port FREE!",
      description: "Get started with zero upfront costs on your first port, making it easier to transition to our services.",
      icon: "gift"
    },
    {
      id: 2,
      title: "Total Solution Provider",
      description: "One partner for everything: 3CX, SIP, Hosted, MCM, Teams, SMS, NBN, Fiber & 4G Data Plans.",
      icon: "solutions"
    },
    {
      id: 3,
      title: "Risk-Free Reselling",
      description: "We handle all legal, compliance, and debt risk—you focus on growing your business.",
      icon: "security"
    },
    {
      id: 4,
      title: "Generous Commissions",
      description: "Earn 15-20% on SIP & 8% on NBN for the life of service—we never adjust your partner commissions.",
      icon: "money"
    },
    {
      id: 5,
      title: "Unique Dual Expertise",
      description: "The only provider that's both a hardware distributor and telco, delivering truly integrated solutions.",
      icon: "expertise"
    },
    {
      id: 6,
      title: "Secure & Redundant",
      description: "Built-in redundancy ensures your business communications never go down, even during outages.",
      icon: "shield"
    }
  ];
  // Function to render the appropriate icon based on the icon identifier
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'partners':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M15 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm-7 0a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm7 9c-2.34 0-7 1.17-7 3.5V20h14v-1.5c0-2.33-4.66-3.5-7-3.5zm-7 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V20h3v-1.5c0-1.48-.87-2.64-4-4.5z" />
          </svg>
        );
      case 'gift':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z" />
          </svg>
        );
      case 'support':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z" />
          </svg>
        );
      case 'australia':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        );
      case 'solutions':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z" />
          </svg>
        );
      case 'security':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
          </svg>
        );
      case 'money':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
          </svg>
        );
      case 'expertise':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z" />
          </svg>
        );
      case 'uptime':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>
        );
      case 'shield':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" />
          </svg>
        );
      default:
        return null;
    }
  };
  return (
    <section className={styles.benefitsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why Partner With Breeze?</h2>
          <p className={styles.sectionDescription}>
            We're committed to helping resellers make telecom services easy to sell, profitable, and reliable for their customers.
          </p>
        </div>        <div className={styles.benefitsGrid}>
          {/* Main Card */}
          <div className={styles.mainBenefitCard}>
            <div className={styles.mainCardContent}>
              <h3 className={styles.mainBenefitTitle}>{mainBenefit.title}</h3>
              <p className={styles.mainBenefitDescription}>{mainBenefit.description}</p>
              <a href="#" className={styles.mainCardButton}>Become a Partner</a>
            </div>
          </div>

          {/* Regular Cards */}
          <div className={styles.regularCardsContainer}>
            {benefitItems.map((benefit) => (
              <div key={benefit.id} className={styles.benefitCard}>
                <div className={styles.cardContent}>
                  <div className={styles.titleWithIcon}>
                    <div className={styles.iconContainer}>
                      {renderIcon(benefit.icon)}
                    </div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  </div>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>        </div>
      </div>
    </section>
  );
};

export default Benefits;
