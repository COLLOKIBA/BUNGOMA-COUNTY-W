'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './TopBar.module.css';

const Topbar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      setCurrentDate(now.toLocaleDateString('en-US', options));
    };

    updateDate(); // Initial call to set date immediately
    const timer = setInterval(updateDate, 1000 * 60 * 60); // Update date every hour

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <span className={styles.date}>{currentDate}</span>
      </div>
      <div className={styles.center}>
        <Link href="https://youtube.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
        <Link href="https://facebook.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link href="#" className={styles.icon} onClick={() => {/* Close action */}}>
          <FontAwesomeIcon icon={faTimes} />
        </Link>
      </div>
    </nav>
  );
};

export default Topbar;
