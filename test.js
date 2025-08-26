// 498_Diagonal-Traverse.js

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    let m = mat.length;
    let n = mat[0].length;
    let result = [];

    let row = 0, col = 0; // bat dau tu toa do (0 , 0)
    let dir = 1; // 1 = lên-phải, -1 = xuống-trái

    while (result.length < m * n) {
        result.push(mat[row][col]); // them phan tu hien tai

        // case di len-phai
        if (dir === 1) {
            if (row === 0) { // cham tren va qua phai va huong xuong duoi
                col++;
                dir = -1;
            } else if (col === n - 1) { // cham phai va huong xuong duoi
                row++;
                dir = -1;
            } else {
                row--;
                col++;
            }
        } else { // case di xuong-trai
            if (col === 0) { // cham trai
                row++;
                dir = 1;
            } else if (row === m - 1) { // cham duoi
                col++;
                dir = 1;
            } else {
                row++;
                col--;
            }
        }
    }
    return result;
};