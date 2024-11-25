"use client"

import React, { useState } from 'react';
import styles from './EducationGrievanceForm.module.css';

const GrievanceForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    grievanceCategory: '',
    date: '',
    time: '',
    email: '',
    location: '',
    grievanceType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the backend or log it
    console.log(formData);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Register a Grievance</h2>
      <form onSubmit={handleSubmit} className={styles.grievanceForm}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName" className={styles.label}>Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber" className={styles.label}>Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="grievanceCategory" className={styles.label}>Grievance Category *</label>
          <select
            id="grievanceCategory"
            name="grievanceCategory"
            value={formData.grievanceCategory}
            onChange={handleChange}
            required
            className={styles.select}
          >
            <option value="">Select Category</option>
            <option value="Education Services">Education Services</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="date" className={styles.label}>Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="time" className={styles.label}>Time *</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="location" className={styles.label}>Location (Town, Ward, Subcounty) *</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="grievanceType" className={styles.label}>Type of Grievance *</label>
          <textarea
            id="grievanceType"
            name="grievanceType"
            value={formData.grievanceType}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
        </div>

        <div className={styles.formGroup}>
          <button type="submit" className={styles.submitButton}>Submit Grievance</button>
        </div>
      </form>
    </div>
  );
};

export default GrievanceForm;
