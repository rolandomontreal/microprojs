import styles from './NavButton.module.css';

const NavButton = ({ buttonText, icon, width = '100%' }) => {
  return (
    <button className={`${styles.navbutton} blue-bg-0`} style={{ width }}>
      <p className={`text-light-0 semi-bold text-large`}>{buttonText}</p>
      {icon}
    </button>
  );
}

export default NavButton;