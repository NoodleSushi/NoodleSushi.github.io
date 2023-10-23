import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { MdMenu } from 'react-icons/md';
import { HiMusicNote } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

const music = new Audio("/music.ogg");
music.loop = true;
music.volume = 0.5;

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [musicPlayback, setMusicPlayback] = useState(false);

  useEffect(() => {
    if (musicPlayback)
      music.play();
    else
      music.pause();
  }, [musicPlayback]);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.navbarRow}>
          <h1 className={styles.logoText}>NoodleSushi</h1>
          <IconContext.Provider value={{ size: "48px", className: styles.icon }}>
            <div className={styles.navbarRight}>
              <button className={styles.resetButton} onClick={() => setMusicPlayback(!musicPlayback)}>
                <HiMusicNote />
              </button>
              <button className={`${styles.resetButton} ${styles.hamburger}`} onClick={() => { setIsExpanded(!isExpanded); console.log('augh'); }}>
                <MdMenu />
              </button>
              <nav className={`${styles.navMenu} ${isExpanded ? styles.expanded : ""}`}>
                <ul>
                  <li>
                    <NavLink to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <a target="_blank">About</a>
                  </li>
                  <li>
                    <NavLink to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </IconContext.Provider>
        </div>
      </header>
      <div className={styles.navbarSpace} />
    </>
  );
}

export default Header;