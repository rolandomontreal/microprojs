import Image from 'next/image';
import styles from './Card.module.scss';

interface CardProps {
  backgroundImageUrl: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ backgroundImageUrl, title, subtitle }) => {
  return (
    <div className={styles.card}>
      <Image 
        src={backgroundImageUrl} 
        layout="fill"
        objectFit='cover'
      />
      <h4>{ title }</h4>
      <p>{ subtitle }</p>
    </div>
  );
}

export default Card;