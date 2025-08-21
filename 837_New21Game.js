// 837. New 21 Game

/**
 * @param {number} n - điểm tối đa cho phép
 * @param {number} k - điểm ngưỡng để dừng
 * @param {number} maxPts - số điểm bốc tối đa mỗi lần
 * @return {number} - xác suất Alice dừng lại trong khoảng [k..n]
 */

// Tính xác xuất(%) mà Alice kết thúc trò chơi với tổng điểm không vượt quá n

var new21Game = function (n, k, maxPts) {
    if (k === 0 || n >= k - 1 + maxPts) return 1.0;

    let dp = new Array(n + 1).fill(0);
    dp[0] = 1.0;

    let W = 1.0;
    let result = 0.0;

    for (let i = 1; i <= n; i++) {
        dp[i] = W / maxPts;

        if (i < k) {
            W += dp[i];
        } else {
            result += dp[i];
        }

        if (i - maxPts >= 0 && i - maxPts < k) {
            W -= dp[i - maxPts];
        }
    }

    return result;
};








// Example 1:

// Input: n = 10, k = 1, maxPts = 10
// Output: 1.00000
// Explanation: Alice gets a single card, then stops.
// Example 2:

// Input: n = 6, k = 1, maxPts = 10
// Output: 0.60000
// Explanation: Alice gets a single card, then stops.
// In 6 out of 10 possibilities, she is at or below 6 points.
// Example 3:

// Input: n = 21, k = 17, maxPts = 10
// Output: 0.73278
