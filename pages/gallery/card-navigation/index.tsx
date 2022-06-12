import { NextPage } from "next";
import Card from "../../../components/Card/Card";
import styles from './CardNavigation.module.scss';

const CardNavigation: NextPage = () => {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>
        <Card 
          backgroundImageUrl="/nature-images/flowers.jpg"
          title={'Flowers'}
          subtitle={'Here are some lovely flowers, wouldn\'t you say?'}
        />
        <Card 
          backgroundImageUrl="/nature-images/plant.jpg"
          title={'A Plant'}
          subtitle={'How about this plant'}
        />
        <Card 
          backgroundImageUrl="/nature-images/tree.jpg"
          title={'The tree'}
          subtitle={'Behold and be quiet!'}
        />
        <Card 
          backgroundImageUrl="/nature-images/waterfall.jpg"
          title={'A waterfall'}
          subtitle={'The water, is falling.'}
        />
      </div>
    </main>
  );
}

export default CardNavigation;