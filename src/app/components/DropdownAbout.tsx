import React from 'react';
import Link from 'next/link';
import styles from './DropdownAbout.module.css';

const DropdownAbout: React.FC = () => {
  console.log(styles);  // Add this line to check if styles is correctly imported

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropbtn}>ABOUT</div>
      <div className={styles.dropdownContent}>
        <Link href="/pages/about/governor">The Governor</Link>
        <Link href="/pages/about/deputygovernor">The Deputy Governor</Link>
        <Link href="/pages/about/cs">County Secretary and Head of Public Service</Link>
        <Link href="/pages/about/attorney">County Attorney</Link>
        <Link href="/pages/about/serviceboard">County Public Service Board</Link>
        {/* <Link href="/pages/about/cecms">County Excecutive Members</Link>
        <Link href="/pages/about/chiefOfficers">County Chief Officers</Link> */}
      </div>
    </div>
  );
};

export default DropdownAbout;
