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
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;

};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  // do work here

  let numOfArrays = this.matrix.length;
  let newMatrix = [];
  let newArray = [];

  // must be a valid Direction, see Direction.js
  if (direction === Direction.CW) {
    for (let i = 0; i < numOfArrays; i++) {
      for (let j = 0; j < numOfArrays; j++) {

      }

      newMatrix.push(newArray);
    }


  }
  else if (direction === Direction.CCW) {

  } else {
    return false;
  }



};