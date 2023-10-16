import styles from './Header.module.css';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdMenu } from 'react-icons/md';

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarRow}>
        <h1 className={styles.logoText}>NoodleSushi</h1>
        <IconContext.Provider value={{ size: "48px", className: styles.icon }}>
          <button className={styles.hamburger} onClick={() => setIsExpanded(!isExpanded)}>
            <MdMenu />
          </button>
        </IconContext.Provider>
        <div className={styles.navMenu}>
          <ul>
            <li>
              <a target="_blank">Home</a>
            </li>
            <li>
              <a target="_blank">About</a>
            </li>
            <li>
              <a target="_blank">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;