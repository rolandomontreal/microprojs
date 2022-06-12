import { useState } from "react";
import { getStartGrid } from '../../../lib/helpers';
import styles from './styles.module.css';

const GameOfLife = () => {
  const [grid] = useState(getStartGrid());
  
  const handleCellClick = (row, column) => {
    const newgrid = [...grid];
    if (newgrid[row][column] === 0) {
      newgrid[row][column] = 1;
    }
  }

  return (
    <main>
      <h2>Game of life</h2>
      <div>
        <p>Here a {grid.length} x {grid[0].length} grid will go</p>
        {grid.map((row, i) => {
          return (
            <div className={styles.row} key={`row-${i}`}>
              {row.map((column, k) => {
                const cellStatus = grid[i][k] === 0 ? 'dead' : 'alive';
                return (
                  <div 
                    key={`col-${k}`}
                    className={`${styles.cell} ${cellStatus}`} 
                    onClick={() => handleCellClick(i, k)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default GameOfLife;