// 498_Diagonal-Traverse.js

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    let m = mat.length;
    let n = mat[0].length;
    let result = [];

    let row = 0, col = 0;
    let dir = 1;

    while (result.length < m * n) {
        result.push(mat[row][col]);

        // // lên-phải
        if (dir === 1) {
            if (col === n - 1) { // cham phai
                row++;
                dir = -1;
            } else if (row === 0) { // cham tren
                col++;
                dir = -1;
            } else { // cho no di chuyen di len
                row--;
                col++;
            }
        } else { // xuống-trái
            if (row === m - 1) { // cham duoi
                col++;
                dir = 1;
            } else if (col === 0) { // cham trai
                row++;
                dir = 1;
            } else {
                row++;
                col--;
            }
        }
    }
    return result;
}; 