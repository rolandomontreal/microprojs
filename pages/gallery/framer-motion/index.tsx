import { useEffect } from 'react';

import { motion, useMotionValue, animate } from 'framer-motion';
import styles from '../../../styles/gallery/pages/FramerMotion.module.scss';

const FramerMotion = () => {
  const x = useMotionValue(0);

  // useEffect(() => {
  //   const controls = animate(x, 100, {
  //     type: 'spring',
  //     stiffness: 2000,
  //     duration: 1000,
  //   });

  //   return controls.stop;
  // });

  const runAnimation = () => {
    const newValue = x.get() === 100 ? -100 : 100;
    animate(x, newValue, {
      type: 'spring',
      stiffness: 2000,
      duration: 1000,
    });
  }

  return (
    <main className={styles.container}>
      <motion.div
        style={{
          width: '200px',
          height: '200px',
          border: '1px solid green',
          x,
        }}
      />
      <button onClick={() => runAnimation()}>
        Run animation
      </button>
    </main>
  );
}

export default FramerMotion;