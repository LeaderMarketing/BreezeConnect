import React from 'react';
import styles from '../styles/modules/Benefits.module.css';
import Lottie from 'lottie-react';
import cooperationAnimation from '../assets/animated icons/cooperation.json';
import transferAnimation from '../assets/animated icons/transfer.json';
import complianceAnimation from '../assets/animated icons/compliance.json';
import commissionAnimation from '../assets/animated icons/commission.json';
import distributionAnimation from '../assets/animated icons/distribution.json';
import secureAnimation from '../assets/animated icons/secure.json';

const Benefits = () => {
  // Main benefit data
  const mainBenefit = {
    title: "100% Australian Owned Channel-Only Telco",
    description: "We are 100% Australian owned channel-focused ICT distributor with no direct sales ensuring profitability of our Channel Partners.",
    isMain: true
  };

  // Benefit items data
  const benefitItems = [
    {
      id: 1,
      title: "First Port FREE!",
      description: "Get started with zero upfront costs on your first port, making it easier to transition to our services.",
      icon: "lottie-transfer"
    },
    {
      id: 2,
      title: "Total Solutions Provider",
      description: "One partner for everything: 3CX, SIP, Hosted PBX, Teams Voice, SMS, NBN, Fiber & 4G Data Plans.",
      icon: "lottie-cooperation"
    },
    {
      id: 3,
      title: "Ease to Do Business",
      description: "We handle all legal, compliance, and debt risk—you focus on growing your business.",
      icon: "lottie-compliance"
    },
    {
      id: 4,
      title: "Generous Partner Commissions",
      description: "Earn up to 15%+ commissions for the life of service—we never adjust your partner commissions.",
      icon: "lottie-commission"
    },
    {
      id: 5,
      title: "Single Source Advantage",
      description: "Breeze Connect is powered by Leader—the only provider that's both a hardware distributor and telco.",
      icon: "lottie-distribution"
    },
    {
      id: 6,
      title: "Secure & Redundant",
      description: "Built-in redundancy ensures your business communications never go down, even during outages.",
      icon: "lottie-secure"
    }
  ];

  // Function to render the appropriate icon based on the icon identifier
  const renderIcon = (iconName) => {
    const iconStyle = { width: 56, height: 56 };
    
    switch (iconName) {
      case 'lottie-cooperation':
        return (
          <Lottie 
            animationData={cooperationAnimation} 
            style={iconStyle}
            loop={true}
            autoplay={true}
          />
        );
      case 'lottie-transfer':
        return (
          <Lottie 
            animationData={transferAnimation} 
            style={iconStyle}
            loop={true}
            autoplay={true}
          />
        );
      case 'lottie-compliance':
        return (
          <Lottie 
            animationData={complianceAnimation} 
            style={iconStyle}
            loop={true}
            autoplay={true}
          />
        );
      case 'lottie-commission':
        return (
          <Lottie 
            animationData={commissionAnimation} 
            style={iconStyle}
            loop={true}
            autoplay={true}
          />
        );
      case 'lottie-distribution':
        return (
          <Lottie 
            animationData={distributionAnimation} 
            style={iconStyle}
            loop={true}
            autoplay={true}
          />
        );
      case 'lottie-secure':
        return (
          <Lottie 
            animationData={secureAnimation} 
            style={iconStyle}
            loop={true}
            autoplay={true}
          />
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
            Breeze Connect takes the pain out of telco and simplifies how you can build a strong Unified Communications & Collaboration buiness.
          </p>
        </div>
        
        <div className={styles.benefitsGrid}>
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
              <div 
                key={benefit.id} 
                className={styles.benefitCard}
              >
                <div className={styles.cardContent}>
                  <div className={styles.titleWithIcon}>
                    <div className={styles.iconWrapper}>
                      {renderIcon(benefit.icon)}
                    </div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  </div>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
