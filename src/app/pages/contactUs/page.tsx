'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';
import styles from './contactUs.module.css';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className={styles.container}>
      <Topbar />
      <Navbar />
      <div className={styles.contactUs}>
        <h1 className={styles.heading}>Contact Us</h1>
        <div className={styles.contactInfo}>
          <p><strong>Bungoma Municipal Building - Office of The Governor</strong></p>
          <p><strong>P.O Box 437-50200</strong></p>
          <p><strong>Phone:</strong> +254(055)30343</p>
          <p><strong>Email:</strong> <a href="mailto:info@bungoma.go.ke" className={styles.emailLink}>info@bungoma.go.ke</a></p>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.name && <p className={styles.errorText}>{errors.name}</p>}
          
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
          ></textarea>
          {errors.message && <p className={styles.errorText}>{errors.message}</p>}
          
          <button type="submit" className={styles.submitButton}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
