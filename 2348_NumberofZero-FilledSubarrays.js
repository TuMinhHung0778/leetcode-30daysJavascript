// 2348. Number of Zero-Filled Subarrays

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let count = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++; // tăng số 0 liên tiếp
            result += count; // cộng thêm subarray mới tạo được
        } else {
            count = 0; // reset nếu gặp số khác 0
        }
    }
    return result;
};