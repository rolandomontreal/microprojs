import styles from './Header.module.css';
import HomeLogo from '../../svgicons/HomeLogo';
import GalleryLogo from '../../svgicons/GalleryLogo';
import AboutLogo from '../../svgicons/AboutLogo';

const Header = () => {
  return (
    <header className={`${styles.header} blue-bg-0 text-dark-0`}>
      <div className={styles.logoBox}>
        <HomeLogo />
      </div>
      <div className={`${styles.logoBox} ${styles.logoBoxMultiItems}`}>
        <GalleryLogo />
        <AboutLogo />
      </div>
    </header>
  );
}

export default Header;