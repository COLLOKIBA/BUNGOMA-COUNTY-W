'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'; // Import useEffect
import styles from './Navbar.module.css';
import Dropdown from './DropdownMenu';
import DropdownAbout from './DropdownAbout';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showDepartments, setShowDepartments] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    setShowDepartments(false); // Close Departments if About is opened
  };

  const handleDepartmentsClick = () => {
    setShowDepartments(!showDepartments);
    setShowAbout(false); // Close About if Departments is opened
  };

  // Close dropdowns if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(`.${styles.dropdownContainer}`)) {
      setShowAbout(false);
      setShowDepartments(false);
    }
  };

  // Add event listener for clicks outside dropdowns
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.png" alt="Home" className={styles.homeIcon} />
          </Link>
        </div>
        <button className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
          <div className={styles.hamburgerIcon}>
          </div>
        </button>
        
        <div className={`${styles.links} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <Link href="/" className={pathname === '/' ? styles.active : ''}>
            Home
          </Link>
          <div className={`${styles.navItem} ${pathname.startsWith('/pages/about') ? styles.active : ''}`}>
              {/* <button onClick={handleAboutClick} className={styles.navButton}>About</button> */}
              
            <div className={`${styles.dropdownContainer} ${showAbout ? styles.showDropdown : ''}`}>
              <DropdownAbout />
            </div>
          </div>
          <div className={`${styles.navItem} ${pathname.startsWith('/pages/Departments') ? styles.active : ''}`}>
            {/* <button onClick={handleDepartmentsClick} className={styles.navButton}>Departments</button> */}
            <div className={`${styles.dropdownContainer} ${showDepartments ? styles.showDropdown : ''}`}>
              <Dropdown />
            </div>
          </div>
          <Link href="/pages/resources" className={pathname === '/pages/resources' ? styles.active : ''}>
            Resources
          </Link>
          <Link href="/pages/countyprojects" className={pathname === '/pages/countyprojects' ? styles.active : ''}>
            County Projects
          </Link>
          <Link href="/pages/tender" className={pathname === '/pages/tender' ? styles.active : ''}>
            Tenders
          </Link>
          <Link href="/pages/newsevents" className={pathname === '/pages/newsevents' ? styles.active : ''}>
            News & Events
          </Link>
          <Link href="/pages/jobs" className={pathname === '/pages/jobs' ? styles.active : ''}>
            Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
