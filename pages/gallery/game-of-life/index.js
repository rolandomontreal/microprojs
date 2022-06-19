import { useState, useEffect } from "react";
import { getStartGrid } from '../../../lib/helpers';
import styles from './styles.module.scss';

const ALIVE = 1;
const DEAD = 0;

const GameOfLife = () => {
  const [grid, setGrid] = useState(getStartGrid());
  const [runSimulation, setRunSimulation] = useState(false);
  
  const handleCellClick = (row, column) => {
    // const newgrid = [...grid];
    console.log('click: ', row, column);
    const newGrid = [...grid];
    
    newGrid[row][column] = newGrid[row][column] === ALIVE ? DEAD : ALIVE;
    setGrid(newGrid);
    console.log(newGrid)
    // if (newgrid[row][column] === 0) {
    //   newgrid[row][column] = 1;
    // }
  }

  const evaluate = () => {
    console.log('will evaluate...');
  }

  useEffect(() => {
    if (runSimulation) {
      const intervalid = setInterval(() => {
        evaluate();
      }, 2000);
      return () => clearInterval(intervalid);
    }
  }, [runSimulation]);

  return (
    <main>
      <h2>Game of life</h2>
      <div>
        <p>Here a {grid.length} x {grid[0].length} grid will go</p>
        {grid.map((row, i) => {
          return (
            <div className={styles.row} key={`row-${i}`}>
              {row.map((column, k) => {
                const cellStatus = grid[i][k] === DEAD ? 'dead' : 'alive';
                return (
                  <div 
                    key={`col-${k}`}
                    className={`${styles.cell} ${styles[cellStatus]}`}
                    onClick={() => handleCellClick(i, k)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      <button onClick={() => setRunSimulation(!runSimulation)}>Run simulation</button>
    </main>
  );
}

export default GameOfLife;