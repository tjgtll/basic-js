const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let arr = new Array(matrix.length)
  for(let im = 0; im < matrix.length; im++) {
    arr[im] = new Array(matrix[im].length)
  }
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++){
      arr[i][j] = g(matrix, i-1, j-1) + g(matrix, i, j-1) + g(matrix, i+1, j-1)
                + g(matrix, i-1, j)                       + g(matrix, i+1, j)
                + g(matrix, i-1, j+1) + g(matrix, i, j+1) + g(matrix, i+1, j+1)
    }
  }
  return arr
}

function g(bool, i, j) {
  if(i < 0 || j < 0 || i > bool.length - 1 || j > bool[i].length - 1) return 0
  return bool[i][j] ? 1 : 0
}


module.exports = {
  minesweeper
};
