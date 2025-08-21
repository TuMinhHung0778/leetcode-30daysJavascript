// 2619. Array Prototype Last

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    console.log("this inside method:", this);
    console.log("this.length:", this.length);
    console.log("last element:", this[this.length - 1]);

    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};

const nums = [1, 2, 3, 56];
nums.last();

// this = object đứng trước dấu chấm khi gọi method.
// Ở nums.last(), this chính là nums.
