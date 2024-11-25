import React from 'react';
import styles from './Gallery.module.css';

const events = [
  {
    id: 1,
    title: "Community Awareness Event",
    image: "/1.jpg",
    date: "2024-11-10",
    description: "A community health event focusing on wellness and prevention.",
  },
  {
    id: 2,
    title: "Vocational Training for Youth",
    image: "/2.jpg",
    date: "2024-11-15",
    description: "A workshop for youth on improving digital literacy skills.",
  },
  {
    id: 3,
    title: "Education Awareness Campaign",
    image: "/3.jpg",
    date: "2024-11-20",
    description: "An awareness campaign to promote community health and safety.",
  },
  // Add more events as needed
];

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}>Upcoming Events</h2>
      <div className={styles.grid}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard}>
            <img src={event.image} alt={event.title} className={styles.eventImage} />
            <div className={styles.eventContent}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDate}>{event.date}</p>
              <p className={styles.eventDescription}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
