import Link from 'next/link';
import styles from '../../styles/gallery/Gallery.module.scss';

const pages = [
  {
    path: '/card-navigation',
    title: 'Card Navigation',
    description: 'An implementation of cards that use scroll snap',
    support: {
      mobile: true,
      desktop: false,
    },
  },
  {
    path: '/game-of-life',
    title: 'Conways game of life',
    description: 'Web implementation the cellular automata, often referred to as "Game Of Life"',
    support: {
      mobile: false,
      desktop: false,
    },
  },
  {
    path: '/modal-reader',
    title: 'Modal reader',
    description: 'A reader that takes arbitrary elements and display in an A4 like layout',
    support: {
      mobile: false,
      desktop: false,
    },
  },
];

const Check = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#78ffa0" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

const XCircle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ec7777" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

const Gallery = () => {
  return (
    <main className={styles.container}>
      {pages.map(page => {
        return (
          <Link key={page.path} href={'/gallery' + page.path}>
            <a>
              <div className={styles.card}>
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <h4>Implemented for</h4>
                <div className={styles.supportContainer}>
                  <span className={styles.chip}>
                    Mobile
                    {page.support.mobile ? <Check /> : <XCircle />}
                  </span>
                  <span className={styles.chip}>
                    Desktop
                    {page.support.desktop ? <Check /> : <XCircle />}
                  </span>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </main>
  );
}

export default Gallery;
