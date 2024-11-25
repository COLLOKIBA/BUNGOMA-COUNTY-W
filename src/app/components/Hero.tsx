import React from 'react';
import styles from './Hero.module.css'; // Import the CSS module

interface HeroSectionProps {
  imageUrl: string;
  altText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageUrl, altText }) => {
  return (
    <div className={styles['hero-section']}>
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default HeroSection;
