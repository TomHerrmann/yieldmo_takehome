/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a BOOLEAN.
 * The function accepts 2D_CHARACTER_ARRAY matrix as parameter.
 */

function isBalanced(matrix) {
  // return false if first elem of first matrix is not '('
  if (matrix[0][0] !== '(') return false;

  // checks horizontally
  const horizontalStack = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column] === '(') {
        horizontalStack.push(matrix[row][column]);
      } else {
        if (horizontalStack.length === 0) {
          return false;
        } else horizontalStack.pop();
      }
    }
  }

  // check vertically

  const verticalStack = [];

  for (let column = 0; column < matrix[0].length; column++) {
    for (let row = 0; row < matrix.length; row++) {
      if (matrix[row][column] === '(') {
        horizontalStack.push(matrix[row][column]);
      } else {
        if (horizontalStack.length === 0) {
          return false;
        } else horizontalStack.pop();
      }
    }
  }

  if (horizontalStack.length === 0 && verticalStack.length === 0) return true;
  else return false;
}
