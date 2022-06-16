import { useEffect } from 'react';
import styles from '../styles/Home.module.scss'
import NavButton from '../components/buttons/NavButton';
import GalleryLogo from '../svgicons/GalleryLogo';

const ImprobabilityDriveButton = () => {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 200C155.228 200 200 155.228 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 155.228 44.7715 200 100 200Z" fill="#7AA5BF"/>
      <path d="M138.205 60.9387L125.365 57.2391L103.674 37.0457L99.7761 66.5547L84.5215 52.1414L55.7808 75.5332L50.8422 104.108L61.6461 137.667L121.566 197.661C159.848 189.245 189.909 158.9 197.901 120.46L138.205 60.9387Z" fill="#416377" fillOpacity="0.4"/>
      <path d="M100 153.603C70.109 153.603 45.7914 129.285 45.7914 99.3941C45.7914 77.8473 58.557 58.3457 78.314 49.7106C80.7019 48.668 83.4789 49.7563 84.5215 52.1414C85.564 54.5273 84.4758 57.3063 82.0906 58.3488C65.7668 65.4828 55.2191 81.5937 55.2191 99.3937C55.2191 124.086 75.3082 144.175 100 144.175C124.693 144.175 144.782 124.086 144.782 99.3937C144.782 81.5937 134.234 65.4832 117.911 58.3488C115.526 57.3063 114.437 54.5273 115.48 52.1414C116.523 49.757 119.3 48.6688 121.687 49.7106C141.444 58.3457 154.209 77.8473 154.209 99.3941C154.209 129.284 129.891 153.603 100 153.603Z" fill="#F2F2F2"/>
      <path d="M121.686 49.7098C119.299 48.668 116.522 49.7562 115.479 52.1406C114.436 54.5266 115.525 57.3055 117.91 58.348C134.234 65.4828 144.781 81.5938 144.781 99.3938C144.781 124.086 124.692 144.175 100 144.175C99.9246 144.175 99.8511 144.17 99.7758 144.17V153.597C99.8511 153.597 99.9246 153.603 100 153.603C129.891 153.603 154.209 129.285 154.209 99.3941C154.209 77.8473 141.443 58.3453 121.686 49.7098Z" fill="#D7D7D7"/>
      <path d="M100 104.108C97.3965 104.108 95.2864 101.997 95.2864 99.3941V40C95.2864 37.3965 97.3969 35.2863 100 35.2863C102.604 35.2863 104.714 37.3969 104.714 40V99.3938C104.714 101.997 102.604 104.108 100 104.108Z" fill="#F2F2F2"/>
      <path d="M100 35.2863C99.9246 35.2863 99.8504 35.2945 99.7758 35.2977V104.096C99.8504 104.1 99.9246 104.108 100 104.108C102.603 104.108 104.714 101.997 104.714 99.3941V40C104.714 37.3965 102.603 35.2863 100 35.2863Z" fill="#D7D7D7"/>
    </svg>
  );
}

export default function Home() {
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => {
    //     // Dev for testing service workers
    //   });
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.improbabilityDriveButton}>
          <ImprobabilityDriveButton />
        </div>
        <div className={styles.textAndButtonContainer}>
          <div className={styles.textContainer}>
            <h2 className='text-dark-0 semi-bold'>Micro Projects</h2>
            <h3 className='text-dark-0 semi-bold'>by Jake</h3>
            <p className='text-dark-1 text-body medium'>A collection of small projects, testing various web technologies, too specialized for building entire projects, but still interesting enough to build something concrete from.</p>
          </div>
          <div className={styles.buttonContainer}>
            <NavButton href="/gallery" buttonText={'EXPLORE'} icon={<GalleryLogo />} />
            <NavButton href="https://github.com/rolandomontreal/microprojs" buttonText={'SOURCE'} icon={<GalleryLogo />} />
          </div>
        </div>
      </div>
    </main>
  );
}
