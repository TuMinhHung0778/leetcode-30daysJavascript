// 2695. Array Wrapper

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
    this.nums = nums;

};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
    // let sum = 0;
    // for (let i = 0; i < this.arr, length; i++) sum += this.arr[i];
    // return sum;
    return this.nums.reduce((sum, num) => sum + num, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
    return `[${this.nums.join(',')}]`;
}
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2);
console.log(String(obj1));
console.log(String(obj2));
/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */