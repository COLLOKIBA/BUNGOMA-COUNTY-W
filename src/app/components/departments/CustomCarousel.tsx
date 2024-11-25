"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './CustomCarousel.module.css';

const images = ['/cecm and chief.jpeg', '/2.jpg', '/children.jpeg'];

const CustomCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            width={600}
            height={800}
            layout="responsive"  // Makes the image responsive to the container
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
      <div className={styles.controls}>
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? styles.activeDot : styles.dot}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
