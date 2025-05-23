import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/modules/HeroCarousel.module.css';
import Button from './Button';

const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);
  const animationTimeoutRef = useRef(null);

  const slides = [
    {
      heading: "Australia's Leading Wholesale Communications Provider",
      description: "Empower your business with enterprise-grade voice and data solutions built for resellers.",
      cta: "Become a Partner",
      bgColor: "#000000"
    },
    {
      heading: "Complete Voice & Internet Solutions",
      description: "One platform for all your business communication needs - from SIP trunks to NBN services.",
      cta: "View Solutions",
      bgColor: "#000000"
    },
    {
      heading: "Grow Your Business with Breeze Connect",
      description: "Join our partner network and access premium telecom services at wholesale rates.",
      cta: "Learn More",
      bgColor: "#000000"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    // Reset animation state when active slide changes
    setResetAnimation(true);
    
    const animationReset = setTimeout(() => {
      setResetAnimation(false);
    }, 100);

    // Set the timer for next slide
    const slideInterval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearTimeout(animationReset);
      clearInterval(slideInterval);
    };
  }, [activeSlide]);

  // Handle manual slide change
  const goToSlide = (index) => {
    if (index === activeSlide) return;
    setActiveSlide(index);
  };

  return (
    <div className={styles.carousel}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${activeSlide === index ? styles.active : ''}`}
          style={{ backgroundColor: slide.bgColor }}
        >
          <div className="container" style={{ 
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 2rem'
          }}>
            <div className={styles.slideContent}>
              <h1 className={styles.slideHeading}>{slide.heading}</h1>
              <p className={styles.slideDescription}>{slide.description}</p>
              <Button>{slide.cta}</Button>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${activeSlide === index ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            {activeSlide === index && (
              <div 
                className={`${styles.progressFill} ${resetAnimation ? styles.reset : ''}`}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
