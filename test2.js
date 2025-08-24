// 1277. Count Square Submatrices with All Ones

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let m = matrix.length; // hang
    let n = matrix[0].length; // cot

    let dp = Array.from({ length: m }, () => Array(n).fill(0));

    let totalSquares = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j], dp[i - 1][j - 1]);
                }
            }
            totalSquares += dp[i][j]
        }
    }
    return totalSquares;
};
