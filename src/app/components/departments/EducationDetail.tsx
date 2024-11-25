import React from 'react';
import styles from './EducationDetail.module.css'; // Import the CSS module

const EducationDetails = () => {
  const educationDetails = (
    <div className={styles.educationSection}>
      <h2>Education and Vocational Training</h2>
      <h3>Vision</h3>
      <p>To create sustainable and equitable social and economic empowerment to all.</p>

      <h3>Mission</h3>
      <p>To formulate, mainstream and implement responsive policies through coordinated strategies for sustained and balanced social cultural and economic development of the county 
        and empowerment of the county and empowerment of vulnerable and marginalized groups and areas.</p>

      <h3>Goal</h3>
      <p>The sector aims to provide quality ECD education and vocational training for all.</p>

      <h3>Achievements</h3>
      <p>The Education sector at the county level focuses on the provision of ECDE and Vocational Training services, prioritizing access to quality Early Childhood Development and Education (ECDE) and Vocational Training.</p>
    </div>
  );

  // const ictDetails = (
  //   <div className={styles.ictSection}>
  //     <h2>ICT, e-Government, and Public Communications</h2>
  //     <h3>Vision</h3>
  //     <p>A world-class provider of cost-effective public utility, infrastructure facilities, and services in energy, transport, ICT, and the built environment.</p>

  //     <h3>Mission</h3>
  //     <p>To provide efficient, affordable, and reliable infrastructure for sustainable economic growth and development.</p>

  //     <h3>Goal</h3>
  //     <p>Develop a world-class ICT infrastructure that ensures availability, efficiency, reliability, and affordability of ICT services.</p>

  //     <h3>Achievements</h3>
  //     <p>The ICT sub-sector prioritizes ICT infrastructure, e-Government services, and information & communication services.</p>
  //   </div>
  // );

  const grievanceRedressMechanism = (
    <div className={styles.grievanceSection}>
      <h2>Grievance Redress Mechanism</h2>
      <p>
        The Grievance Redress Mechanism (GRM) for the Department of Education, ICT, E-Government, and Public Communication is designed to address and resolve public concerns related to education services, digital access, e-government platforms, and public information.
      </p>
    </div>
  );

  return (
    <div className={styles.educationContainer}>
      {educationDetails}
      {/* {ictDetails} */}
      {grievanceRedressMechanism}
    </div>
  );
};

export default EducationDetails;