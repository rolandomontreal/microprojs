import Link from 'next/link';
import styles from '../../styles/gallery/Gallery.module.scss';
import XCircle from '../../svgicons/XCircle';
import Check from '../../svgicons/Check';

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
  {
    path: '/flubber',
    title: 'Flubber',
    description: 'First SVG path morphing with flubber',
    support: {
      mobile: true,
      desktop: true,
    },
  },
  {
    path: '/framer-motion',
    title: 'Framer motion',
    description: 'Some tests with framer motion',
    support: {
      mobile: true,
      desktop: true,
    },
  },
];

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
