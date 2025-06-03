import React, { useState } from 'react';
import styles from '../styles/modules/PartnerPortal.module.css';

const PartnerPortal = () => {
  const [activeItem, setActiveItem] = useState(0);
  const portalFeatures = [
    {
      id: 0,
      title: "Easy Customer Management",
      description: "Manage your customers with our intuitive interface. Add new customers, update details, and view their service history all in one place.",
      image: "https://breezeconnect.com.au/wp-content/uploads/2025/05/partner-portal-placeholder.png",
      video: "/BreezeConnect/assets/portaldemo_1.mp4"
    },
    {
      id: 1,
      title: "Order Seamlessly",
      description: "Order new services like numbers and NBN directly from the portal. No need to use multiple systems or make phone calls to sales.",
      image: "/placeholder-product-1.jpg"
    },
    {
      id: 2,
      title: "Automated Billing",
      description: "Set up automated billing for your customers. Generate and send invoices, track payments, and manage overdue accounts effortlessly.",
      image: "/placeholder-product-1.jpg"
    },
    {
      id: 3,
      title: "Secured with MFA",
      description: "Your account and customer data is protected with Multi-Factor Authentication, ensuring only authorized personnel can access sensitive information.",
      image: "/placeholder-product-1.jpg"
    },
    {
      id: 4,
      title: "Multi-user Account Access",
      description: "Grant different levels of access to your team members. Manage permissions and monitor user activity through a comprehensive admin panel.",
      image: "/placeholder-product-1.jpg"
    },
    {
      id: 5,
      title: "Easy Commissions View/Export",
      description: "Track your earnings with our transparent commission system. View detailed reports and export data in various formats for your records.",
      image: "/placeholder-product-1.jpg"
    }
  ];

  const handleToggle = (id) => {
    setActiveItem(id === activeItem ? null : id);
  };

  return (
    <section className={styles.partnerPortal}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Be in Complete Control</h2>
          <p>Streamlined new customer setup process, trunk management tools and better customer service with the Breeze partner portal.</p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.accordion}>
            {portalFeatures.map((feature) => (
              <div 
                key={feature.id} 
                className={`${styles.accordionItem} ${activeItem === feature.id ? styles.active : ''}`}
              >                <div 
                  className={styles.accordionHeader}
                  onClick={() => handleToggle(feature.id)}
                >
                  <h3>{feature.title}</h3>
                  <span className={styles.accordionArrow}></span>
                </div>                {activeItem === feature.id && (
                  <div className={styles.accordionContent}>
                    <p>{feature.description}</p>                    <div className={styles.mobileImageContainer}>                      {feature.video ? (
                        <div className={styles.animationContainer}>
                          <video
                            src={feature.video}
                            className={styles.portalVideo}
                            autoPlay
                            loop
                            playsInline
                          />
                        </div>
                      ) : (
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className={styles.mobileFeatureImage}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}          </div>            
          {activeItem !== null && (
            <div className={styles.animationContainer}>
              <video 
                src={portalFeatures[activeItem].video}
                className={styles.portalVideo}
                autoPlay
                loop
                playsInline
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnerPortal;
