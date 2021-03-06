import Link from 'next/link';
import styles from './NavButton.module.scss';

const NavButton = ({ href, buttonText, icon, width = '100%' }) => {
  return (
    <Link href={href}>
      <a className={`${styles.navbutton}`} style={{ width }}>
        <p className={`text-light-0 semi-bold text-large`}>{buttonText}</p>
        {icon}
      </a>
    </Link>
  );
}

export default NavButton;