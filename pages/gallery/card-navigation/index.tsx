import { NextPage } from "next";
import styles from './CardNavigation.module.scss';

const CardNavigation: NextPage = () => {
  return (
    <main>
      <div className={styles.container}>
        I am the card navigation;yarn
      </div>
    </main>
  );
}

export default CardNavigation;