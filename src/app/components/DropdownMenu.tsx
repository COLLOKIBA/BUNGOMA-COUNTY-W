import React from 'react';
import Link from 'next/link';
import styles from './DropdownMenu.module.css';

const Dropdown: React.FC = () => {
  console.log(styles);  // Add this line to check if styles is correctly imported

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropbtn}>DEPARTMENTS</div>
      <div className={styles.dropdownContent}>
        <Link href="/pages/Departments/CS">CS & Head of Public Service</Link>
        <Link href="/pages/Departments/PublicService">Public Service and Management</Link>
        <Link href="/pages/Departments/Education">Education and Vocational Training</Link>
        <Link href="/pages/Departments/Finance">Finance and Economic Planning</Link>
        <Link href="/pages/Departments/Agriculture">Agriculture, Livestock, Irrigation, Fisheries & Co-operative Development</Link>
        <Link href="/pages/Departments/Environment">Environment, Water & Tourism</Link>
        <Link href="/pages/Departments/Gender">Gender, Youth, Culture & Sports</Link>
        <Link href="/pages/Departments/Roads">Roads, Transport, Infrastructure and Public Works</Link>
        <Link href="/pages/Departments/Health">Health and Sanitation</Link>
        <Link href="/pages/Departments/Lands">Lands, Urban & Physical Planning</Link>
        <Link href="/pages/Departments/Trade">Trade Energy and Industrilization</Link>
      </div>
    </div>
  );
};

export default Dropdown;
