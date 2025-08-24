// 1277. Count Square Submatrices with All Ones

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let m = matrix.length; // so hang
    let n = matrix[0].length; // so cot

    // Tạo mảng dp cùng kích thước matrix
    let dp = Array.from({ length: m }, () => Array(n).fill(0));

    let totalSquares = 0; // bien luu ket qua end

    // duyet qua tung o trong matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                }
                // cong don ket qua
                totalSquares += dp[i][j];
            }
        }
    }
    return totalSquares;
};

function testCountSquares() {
    const testCases = [
        {
            id: "TC001",
            input: [[0, 1, 1, 1], [1, 1, 1, 1], [0, 1, 1, 1]],
            expected: 15
        },
        {
            id: "TC002",
            input: [[1, 0, 1], [1, 1, 0], [1, 1, 0]],
            expected: 7
        }
    ];

    testCases.forEach(({ id, input, expected }) => {
        const result = countSquares(input);
        const status = result === expected ? "PASSED" : "FAILED";
        console.log(`${id}: ${status} | Expected: ${expected}, Got: ${result}`);
    });
}

testCountSquares();