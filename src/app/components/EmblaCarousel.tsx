"use client"

// components/EmblaCarousel.tsx

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './EmblaCarousel.module.css'; // Import your custom CSS module

type PropType = {
  slides: string[]; // Array of image URLs
  options?: object; // Use a generic object for options
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((src, index) => (
            <div className={styles.embla__slide} key={index}>
              <img className={styles.embla__slide__img} src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.embla__button} ${styles.embla__button__prev}`}
        onClick={() => emblaApi?.scrollPrev()}
      />
      <button
        className={`${styles.embla__button} ${styles.embla__button__next}`}
        onClick={() => emblaApi?.scrollNext()}
      />
      <div className={styles.embla__dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.embla__dot} ${index === selectedIndex ? styles.embla__dot__selected : ''}`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
