import { useEffect, useState } from 'react';
import { interpolate } from 'flubber';
import styles from '../../../styles/gallery/pages/Flubber.module.scss';
import { arrowBottomPath, bankruptcyPath } from '../../../lib/svghelper';
import  { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { pathToFileURL } from 'url';


const Flubber = () => {
  const [value, setValue] = useState(0);
  const [path, setPath] = useState(arrowBottomPath);
  const interpolator = interpolate(arrowBottomPath, bankruptcyPath);
  const progress = useMotionValue(0);

  useEffect(() => {
    const newPath = interpolator(value);
    setPath(newPath);
  }, [value]);

  // useEffect(() => {
  //   console.log('animation running');
  //   const animation = animate(progress, 1, {
  //     duration: 300,
  //     repeat: 1,
  //     onComplete: () => {
  //       console.log('complete');
  //     },
  //   });

  //   return animation.stop;
  // }, []);


  return (
    <main className={styles.container}>
      <svg viewBox="-1 0 100 96" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1}>
        <motion.path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>

      <p>{ value }</p>
      <input
        className={styles.slider}
        type="range"
        min="0"
        max="1"
        step=".001"
        value={value}
        onChange={e => setValue(parseFloat(e.target.value))}
      />
    </main>
  );
}

export default Flubber;