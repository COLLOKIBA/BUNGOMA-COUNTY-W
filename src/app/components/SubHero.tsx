// components/Subhero.tsx
import React from 'react';
import styles from './SubHero.module.css';
import ReadMoreButton from './ReadMoreButton';

const Subhero: React.FC = () => {
  return (
    <section className={styles.subhero}>
      <h2 className={styles.header}>Governor’s Welcome Note</h2>
      <p>Thank you so much for taking time to visit Bungoma County on the web.
This site is about us opening up to the world about our heritage rich with cultural diversity, 
our raw untapped opportunity for growth in agriculture and industry, our attractive and lucrative platform for
 professional and social growth 
and most importantly, a conducive environment with beautiful, warm people as neighbors to call home.
</p>
<p>“As you learn from us, we want to learn from you too. We want to hear your opinion, 
  we want to know where we can be of help, we want to know what we can do to change and improve this county. We want to know where we
   have made positive change and where we improve some more. Karibu Bungoma!”</p>
   {/* //add this below onClick={handleReadMore} */}
  </section>
  );
  
};

export default Subhero;
