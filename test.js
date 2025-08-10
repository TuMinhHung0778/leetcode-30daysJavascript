// to be or not to be
// let expect = function (val) {
//     return {
//         toBe: function (v1) {
//             if (v1 === val) {
//                 return true
//             } else {
//                 throw new Error('Not Equal')
//             }
//         },
//         notToBe: function (v2) {
//             if (v2 !== val) {
//                 return true
//             } else {
//                 throw new Error('giong nhau')
//             }
//         }
//     }
// }
// console.log(expect(5).toBe(5));
// console.log(expect(5).toBe(7));

// 2665. Counter II
// let createCounter = function (init) {
//     let dem = 0
//     dem = init
//     return {
//         increment: function () {
//             dem++;
//             return dem;
//         },
//         decrement: function () {
//             dem--;
//             return dem;
//         },
//         reset: function () {
//             dem = init;
//             return dem;
//         }
//     }
// };
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
// const counter2 = createCounter(19)
// console.log('afa');
// console.log(counter2.increment());
// console.log(counter2.reset());
// console.log(counter2.decrement());

// 2635. Apply Transform Over Each Element in Array

// let map = function (arr, fn) {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         const transformed = fn(arr[i], i)
//         result.push(transformed)
//     }
//     return result
// }

// function plusone(n) {
//     return n + 1
// }
// console.log(map([1, 2, 3], plusone));

// function plusI(n, i) {
//     return n + i;
// }
// console.log(map([2, 4, 7], plusI));

// function constant(n) {
//     return 42
// }
// console.log(map([3, 6, 9], constant));

// 2634. Filter Elements from Array

// let filter = function (arr, fn) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             result.push(arr[i])
//         }
//     }
//     return result;
// };

// function greaterThan10(n) {
//     return n > 10;
// }

// function firstIndex(n, i) {
//     return i === 0;
// }

// function plusOne(n) {
//     return n + 1;
// }
// console.log(filter([1, -67, 5, -2, 3], plusOne));
// console.log(filter([0, 10, 20, 30], greaterThan10));
// console.log(filter([19, 10, 20, 30], firstIndex));



// 2626. Array Reduce Transformation
/**
 * @param {number[]} nums - Mảng số nguyên đầu vào
 * @param {Function} fn - Hàm giảm: fn(accum, curr) => số
 * @param {number} init - Giá trị khởi tạo
 * @return {number} - Kết quả cuối cùng sau khi “giảm” hết mảng
 */
let reduce = function (nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

function sum(accum, curr) {
    return accum + curr;
}
console.log(reduce([1, 2, 3, 4], sum, 0));

function sumSquares(accum, curr) {
    return accum + curr * curr;
}
console.log(reduce([1, 2, 3, 4], sumSquares, 100));

function any(accum, curr) {
    return 0;
}
console.log(reduce([], any, 25));

// 2703. Return Length of Arguments Passed
