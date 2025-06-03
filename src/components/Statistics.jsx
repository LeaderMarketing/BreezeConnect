import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/modules/Statistics.module.css';
import Lottie from 'lottie-react';
import slaAnimation from '../assets/animated icons/sla.json';
import supportAnimation from '../assets/animated icons/support.json';
import usersAnimation from '../assets/animated icons/users.json';

const AnimatedNumber = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const numberRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          numberRef.current.classList.add(styles.animate);
            let startTime;
          const duration = 1000; // 1 second
          const startValue = 0;
          
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;
            
            if (progress < 1) {
              const currentCount = Math.floor(startValue + (end - startValue) * progress);
              setCount(currentCount);
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, [end]);
  return (
    <div ref={numberRef} className={styles.number}>
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const Statistics = () => {
  const iconStyle = { width: 200, height: 200 }; // Make icons big
  
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.statCard}>
            <div className={styles.iconContainer}>
              <Lottie
                animationData={slaAnimation}
                style={iconStyle}
                loop={true}
                autoplay={true}
              />
            </div>
            <AnimatedNumber end={99} suffix="%" />
            <h3>Uptime SLA</h3>
            <p className={styles.description}>
              ZERO downtime in 3+ years with rock-solid infrastructure you can trust for your critical communications.
            </p>
          </div>

          <div className={styles.statCard}>
            <div className={styles.iconContainer}>
              <Lottie
                animationData={supportAnimation}
                style={iconStyle}
                loop={true}
                autoplay={true}
              />
            </div>
            <AnimatedNumber end={100} suffix="%" />
            <h3>Local Expert Support</h3>
            <p className={styles.description}>
              Access Australian-based technical experts certified in 3CX Adv, SIP SSCA, Yealink, UniFi and more.
            </p>
          </div>
          
          <div className={styles.statCard}>
            <div className={styles.iconContainer}>
              <Lottie
                animationData={usersAnimation}
                style={iconStyle}
                loop={true}
                autoplay={true}
              />
            </div>
            <AnimatedNumber end={10000} suffix="+" />
            <h3>Active Users</h3>
            <p className={styles.description}>
              Trusted by thousands of Australian businesses for their critical communication needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
