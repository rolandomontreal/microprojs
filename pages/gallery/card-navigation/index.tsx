import { NextPage } from "next";
import styles from './CardNavigation.module.scss';

const CardNavigation: NextPage = () => {
  return (
    <div className={styles.container}>
      I am the card navigation;
    </div>
  );
}

export default CardNavigation;