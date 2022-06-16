import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import HomeLogo from '../../svgicons/HomeLogo';
import GalleryLogo from '../../svgicons/GalleryLogo';
import AboutLogo from '../../svgicons/AboutLogo';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <Link href="/">
        <a className={styles.logoBox}>
          <HomeLogo />
        </a>
      </Link>
      <div className={`${styles.logoBox} ${styles.logoBoxMultiItems}`}>
        <Link href="/gallery">
          <a className={styles.imgIconLink}>
            <Image
              className={styles.imgIcon}
              src={'/icons/gallery.png'}
              layout="intrinsic"
              height={100}
              width={100}
            />
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