/*
  Any live cell with fewer than two live neighbors dies, as if caused by under-population.
  Any live cell with two or three live neighbors lives on to the next generation.
  Any live cell with more than three live neighbors dies, as if by over-population..
  Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
  returns new grid
*/
export const gameOfLife = grid => {
  const result = [];
  for (let i = 0; i < grid.length; i++) {
    const row = [];
    result.push(row);
    for (let j = 0; j < grid[i].length; j++) {
      const value = grid[i][j];
      if (value === 0 && getNeighbors(grid, i, j).alive === 3) {
        row.push(1);
      } else if (
        value === 1 &&
        (getNeighbors(grid, i, j).alive > 3 ||
          getNeighbors(grid, i, j).alive < 2)
      ) {
        row.push(0);
      } else {
        row.push(value);
      }
    }
  }
  return result;
};

const getNeighbors = (grid, row, column) => {
  let alive = 0;
  if (grid[row - 1] && grid[row - 1][column]) {
    alive++;
  }
  if (grid[row + 1] && grid[row + 1][column]) {
    alive++;
  }
  if (grid[row - 1] && grid[row - 1][column - 1]) {
    alive++;
  }
  if (grid[row + 1] && grid[row + 1][column - 1]) {
    alive++;
  }
  if (grid[row - 1] && grid[row - 1][column + 1]) {
    alive++;
  }
  if (grid[row + 1] && grid[row + 1][column + 1]) {
    alive++;
  }
  if (grid[row][column + 1]) {
    alive++;
  }
  if (grid[row][column - 1]) {
    alive++;
  }
  return {
    alive,
    dead: 8 - alive
  };
};
