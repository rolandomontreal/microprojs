import styles from './Header.module.css';
import HomeLogo from '../../svgicons/HomeLogo';
import GalleryLogo from '../../svgicons/GalleryLogo';
import AboutLogo from '../../svgicons/AboutLogo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={`${styles.header} blue-bg-0 text-dark-0`}>
      <Link href="/">
        <a className={styles.logoBox}>
          <HomeLogo />
        </a>
      </Link>
      <div className={`${styles.logoBox} ${styles.logoBoxMultiItems}`}>
        <Link href="/gallery">
          <a>
            <GalleryLogo />
          </a>
        </Link>
        <Link href="/about">
          <a>
            <AboutLogo />
          </a>
        </Link>
      </div>
    </header>
  );
}

export default Header;