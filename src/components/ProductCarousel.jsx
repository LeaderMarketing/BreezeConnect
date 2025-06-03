import React, { useState } from 'react';
import styles from '../styles/modules/ProductCarousel.module.css';

// Product data organized by categories
const productCategories = {  
  "Voice": [
    {
      id: 1,
      name: "SIP TRUNKS",
      description: "Cost-effective, flexible voice connectivity with high reliability and scalability for your business communications.",
      color: "#00274f",
      imageUrl: "/images/products/sip-trunks.jpg"
    },    
    {
      id: 2,
      name: "BREEZE HOSTED 3CX",
      description: "Fully managed 3CX phone system in the cloud with no hardware to maintain and simple per-user pricing.",
      color: "#00274f",
      imageUrl: "/images/products/hosted-3cx.jpg"
    },
    {
      id: 3,
      name: "HOSTED PBX",
      description: "Enterprise-grade cloud phone system with advanced features and no upfront hardware investments.",
      color: "#00274f",
      imageUrl: "/images/products/hosted-pbx.jpg"
    },    
    {
      id: 4,
      name: "BREEZE TEAMS VOICE",
      description: "Integrate professional calling capabilities directly into your Microsoft Teams environment.",
      color: "#00274f",
      imageUrl: "/images/products/teams-voice.jpg"
    },
    {
      id: 5,
      name: "INBOUND SERVICES",
      description: "Professional 1300 and 1800 numbers to enhance your business presence across Australia.",
      color: "#00274f",
      imageUrl: "/images/products/inbound-services.jpg"
    },
    {
      id: 13,
      name: "BREEZE WHOLESALE",
      description: "Join our league of wholesale VoIP providers with SIP services at competitive rates to maximize revenue in today's market.",
      color: "#00274f",
      imageUrl: "/images/products/wholesale.jpg"
    }
  ],  
  "Data": [    
    {
      id: 6,
      name: "BUSINESS NBN",
      description: "High-speed, reliable internet connectivity designed specifically for business applications.",
      color: "#00274f",
      imageUrl: "/images/products/business-nbn.jpg"
    },
    {
      id: 7,
      name: "CORPORATE FIBRE",
      description: "Enterprise-grade fibre connectivity with guaranteed bandwidth and 99.95% uptime SLA.",
      color: "#00274f",
      imageUrl: "/images/products/corporate-fibre.jpg"
    },
    {
      id: 8,
      name: "DATA SIM FAILOVER",
      description: "Automatic 4G/5G backup connectivity ensuring your business stays online even during primary connection outages.",
      color: "#00274f",
      imageUrl: "/images/products/data-sim.jpg"
    }  
  ],  
  "Solutions": [
    {
      id: 10,
      name: "SMS BROADCASTING",
      description: "Mass communication platform for sending targeted text messages to customers and stakeholders.",
      color: "#00274f",
      imageUrl: "/images/products/sms-broadcasting.jpg"
    },
    {
      id: 11,
      name: "VOIP HANDSETS",
      description: "Premium IP phones from leading brands, preconfigured for plug-and-play deployment.",
      color: "#00274f",
      imageUrl: "/images/products/voip-handsets.jpg"
    },
    {
      id: 12,
      name: "BUSINESS HEADSETS",
      description: "Professional-grade headsets from Yealink, Jabra and other top brands for clear communication.",
      color: "#00274f",
      imageUrl: "/images/products/business-headsets.jpg"
    },
    {
      id: 14,
      name: "PRE-CONFIGURATION",
      description: "Let our certified local experts help you sell & setup turn-key VoIP solutions with 3CX, Grandstream, Yealink & Fanvil phone systems.",
      color: "#00274f",
      imageUrl: "/images/products/pre-configuration.jpg"
    }
  ]
};

const ProductCarousel = () => {
  // State for category tabs
  const [activeCategory, setActiveCategory] = useState("Voice");
  const [currentIndex, setCurrentIndex] = useState(0);  // Determine how many cards to show based on screen width
  const [cardsToShow, setCardsToShow] = useState(3);
  
  // Get current category's products
  const categoryProducts = productCategories[activeCategory] || [];
  // Reset index when category changes without any animation or transition
  React.useEffect(() => {
    // Immediately reset the index without animation
    setCurrentIndex(0);
  }, [activeCategory]);
    // Update cards to show on window resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 480) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + cardsToShow >= categoryProducts.length ? 0 : prevIndex + cardsToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - cardsToShow < 0 ? Math.max(categoryProducts.length - cardsToShow, 0) : prevIndex - cardsToShow
    );
  };
  
  const visibleProducts = categoryProducts.slice(currentIndex, currentIndex + cardsToShow);
  
  // Determine if navigation buttons should be displayed
  const showPrevButton = currentIndex > 0;
  const showNextButton = currentIndex + cardsToShow < categoryProducts.length;
  return (
    <section className={styles.productSection}>
      <div className={styles.headlineContainer}>
        <h2 className={styles.headline}>Total Telco Solutions</h2>
        <p className={styles.description}>
          We empower our partners to offer a comprehensive suite of voice and data solutions to their end-user business customers across Australia
        </p>
      </div>

      <div className={styles.categoryTabsContainer}>
        <div className={styles.categoryTabs}>
          {Object.keys(productCategories).map((category) => (
            <button
              key={category}
              className={`${styles.categoryTab} ${activeCategory === category ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>      <div className={styles.carouselContainer}>
        {showPrevButton && (
          <button 
            className={`${styles.carouselButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous products"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        )}

        <div className={styles.cardsContainer}>
          {visibleProducts.map(product => (
            <div key={product.id} className={styles.card}>
              <div 
                className={styles.imageContainer}
                style={{ 
                  backgroundColor: product.color,
                  backgroundImage: `url(${product.imageUrl})`
                }}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <button className={styles.learnMoreButton}>
                  Learn More
                </button>
              </div>
            </div>          ))}
        </div>
        {showNextButton && (
          <button 
            className={`${styles.carouselButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next products"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductCarousel;
