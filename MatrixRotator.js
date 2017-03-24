const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here

    // must be a valid Direction, see Direction.js

    let numOfArrays = this.matrix.length;
    let newMatrix = [];
    let newArray = [];

    // must be a valid Direction, see Direction.js
    if (direction === Direction.CW) {
      for (let i = numOfArrays - 1; i >= 0; i--) {
        for (let j = numOfArrays - 1; j >= 0; j--) {
          newArray.push(this.matrix[j][i]);
        }
        newMatrix.unshift(newArray);
        newArray = [];
      }
      this.matrix = newMatrix;
    }
    else if (direction === Direction.CCW) {
      for (let i = 0; i < numOfArrays; i++) {
        for (let j = 0; j < numOfArrays; j++) {
          newArray.push(this.matrix[j][i]);
        }
        newMatrix.unshift(newArray);
        newArray = [];
      }
      this.matrix = newMatrix;
    } else {
      return false;
    }
  }
};

