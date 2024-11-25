import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactUs}>
        <a href="/pages/contactUs" className={styles.contactLink}>Contact Us</a>
      </div>

      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>County Government Of Bungoma</h3>
          <p className={styles.footerText}>Bungoma Municipal Building - Office of The Governor</p>
          <p className={styles.footerText}>P.O Box 437-50200</p>
          <p className={styles.footerText}>Phone: +254(055)30343</p>
          <p className={styles.footerText}>
            Email: <a href="mailto:info@bungoma.go.ke" className={styles.footerLink}>info@bungoma.go.ke</a>
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Useful Links</h3>
          <ul className={styles.linksList}>
            <li><a href="#" className={styles.footerLink}>Our Blog</a></li>
            <li><a href="#" className={styles.footerLink}>Our History</a></li>
            <li><a href="#" className={styles.footerLink}>Contact Us</a></li>
            <li><a href="#" className={styles.footerLink}>BHRMS</a></li>
            <li><a href="#" className={styles.footerLink}>Staff Mail</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Subscribe to County News & Updates</h3>
          <p className={styles.footerText}>
            The latest County news, articles, and resources, sent straight to your inbox every month.
          </p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your email" className={styles.emailInput} />
            <button type="submit" className={styles.subscribeButton}>Subscribe</button>
          </form>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.footerText}>Copyright 2024 © Bungoma County Government. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
