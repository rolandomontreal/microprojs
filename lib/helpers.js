export const getStartGrid = (nrrows = 5, nrcolumns = 3) => {
  const rows = [];
  for (let i = 0; i < nrrows; i++) {
    const columns = [];
    for (let k = 0; k < nrcolumns; k++){
      columns.push(0);
    }
    rows.push(columns);
  }
  console.log(rows);
  return rows;
}

// getStartGrid();