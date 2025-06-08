// 2635. Apply Transform Over Each Element in Array

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.


// Constraints:

// 0 <= arr.length <= 1000
// -109 <= arr[i] <= 109
// fn returns an integer.

/**
 * @param {number[]} arr - Mảng đầu vào
 * @param {function} fn - Hàm dùng để biến đổi từng phần tử
 * @return {number[]} - Mảng mới sau khi biến đổi
 */
// Hàm map tự viết (không dùng Array.map)
var map = function (arr, fn) {
    //  hàm fn sẽ được LeetCode truyền vào sẵn khi chấm bài
    //  không cần tự viết các hàm như plusOne, plusIndex, hay constant trong phần nộp code.
    let result = []; // Tạo mảng rỗng để chứa kết quả

    for (let i = 0; i < arr.length; i++) {
        // Gọi hàm fn với phần tử arr[i] và chỉ số i
        let transformed = fn(arr[i], i);
        result.push(transformed); // Thêm result vào mảng kết quả
    }

    return result; // Trả về mảng mới
};

// Ví dụ 1: Tăng mỗi phần tử lên 1
function plusOne(n) {
    return n + 1;
}
console.log("Example 1:", map([1, 2, 3], plusOne)); // Kết quả: [2, 3, 4]

// Ví dụ 2: Cộng thêm chỉ số của phần tử
function plusIndex(n, i) {
    return n + i;
}
console.log("Example 2:", map([1, 2, 3], plusIndex)); // Kết quả: [1, 3, 5]

// Ví dụ 3: Luôn trả về 42
function constant() {
    return 42;
}
console.log("Example 3:", map([10, 20, 30], constant)); // Kết quả: [42, 42, 42]



