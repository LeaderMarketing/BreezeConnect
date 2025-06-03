import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/modules/Testimonials.module.css';

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Handle automatic scrolling
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    const interval = setInterval(() => {
      if (!isMouseDown && slider) {
        const nextIndex = (currentIndex + 1) % 5; // 5 is the number of testimonials
        scrollToCard(nextIndex);
      }
    }, 6000); // Scroll every 6 seconds
    
    return () => clearInterval(interval);
  }, [currentIndex, isMouseDown]);
    const scrollToCard = (index) => {
    if (!sliderRef.current) return;
    
    const slider = sliderRef.current;
    const track = slider.querySelector(`.${styles.testimonialTrack}`);
    if (!track) return;
    
    const cards = track.children;
    if (cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth;
    const gap = 24; // var(--spacing-lg) converted to pixels
    const scrollPosition = (cardWidth + gap) * index;
    
    slider.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };
  
  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? 4 : currentIndex - 1; // 5 testimonials total
    scrollToCard(prevIndex);
  };
  
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % 5;
    scrollToCard(nextIndex);
  };
  
  // Mouse handlers for manual scrolling
  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
    const handleMouseUp = () => {
    setIsMouseDown(false);
    if (!sliderRef.current) return;
    
    // Snap to nearest card
    const slider = sliderRef.current;
    const track = slider.querySelector(`.${styles.testimonialTrack}`);
    if (!track) return;
    
    const cards = track.children;
    if (cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth;
    const gap = 24; // var(--spacing-lg) converted to pixels
    const index = Math.round(slider.scrollLeft / (cardWidth + gap));
    scrollToCard(Math.min(index, 4)); // Max 5 testimonials (0-indexed)
  };
  
  const handleMouseLeave = () => {
    if (isMouseDown) {
      handleMouseUp();
    }
  };
  
  const handleMouseMove = (e) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };
    // Handle scroll events to update active dot
  const handleScroll = () => {
    if (!sliderRef.current || isMouseDown) return;
    
    const slider = sliderRef.current;
    const track = slider.querySelector(`.${styles.testimonialTrack}`);
    if (!track) return;
    
    const cards = track.children;
    if (cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth;
    const gap = 24; // var(--spacing-lg) converted to pixels
    const index = Math.round(slider.scrollLeft / (cardWidth + gap));
    
    if (index !== currentIndex) {
      setCurrentIndex(Math.min(index, 4));
    }
  };
  
  // Dummy testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Jane Smith",
      company: "Tech Solutions Co.",
      position: "CEO",
      text: "Breeze Connect has completely transformed how we handle our business communications. Their reliable service and exceptional support team have made all the difference for us.",
      image: "/placeholders/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Michael Johnson",
      company: "Digital Marketing Australia",
      position: "Operations Manager",
      text: "We've tried several providers in the past, but none compare to the quality and reliability we've experienced with Breeze Connect. Their platform is intuitive and their customer service is second to none.",
      image: "/placeholders/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Sarah Thompson",
      company: "Melbourne Retail Group",
      position: "IT Director",
      text: "The transition to Breeze Connect was seamless. Their team guided us through every step of the process, and we've seen significant improvements in both call quality and cost efficiency.",
      image: "/placeholders/testimonial-3.jpg"
    },
    {
      id: 4,
      name: "David Roberts",
      company: "Sydney Legal Partners",
      position: "Managing Partner",
      text: "As a legal firm, reliable communication is absolutely critical for us. Breeze Connect has exceeded our expectations with their enterprise-grade solutions and responsive customer care.",
      image: "/placeholders/testimonial-4.jpg"
    },
    {
      id: 5,
      name: "Emily Chen",
      company: "HealthCare Connect",
      position: "Operations Director",
      text: "Our healthcare network requires consistent, secure communications. Breeze Connect understands our needs and has provided us with tailored solutions that meet our stringent requirements.",
      image: "/placeholders/testimonial-5.jpg"
    }
  ];
    return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>HEAR FROM OUR PARTNERS</h2>
          <p className={styles.sectionDescription}>
            Learn why hundreds of Aussie businesses trust Breeze Connect.
          </p>
        </div>
        
        <div className={styles.testimonialCarousel}>
          <div 
            className={styles.testimonialSlider}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
          >
            <div className={styles.testimonialTrack}>
              {testimonials.map((testimonial) => (                <div key={testimonial.id} className={styles.testimonialCard}>
                  <div className={styles.testimonialContent}>
                    <p className={styles.testimonialText}>{testimonial.text}</p>                    <div className={styles.testimonialAuthor}>
                      <h4 className={styles.authorName}>{testimonial.name}</h4>
                      <p className={styles.authorPosition}>
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.carouselControls}>
            <button 
              className={styles.carouselButton}
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            <div className={styles.testimonialDots}>
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                  onClick={() => scrollToCard(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className={styles.carouselButton}
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
