/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
let createCounter = function (init) {
    let dem = init; // Giá trị hiện tại

    return {
        increment: function () {
            dem += 1; // Không truyền tham số
            return dem;
        },
        decrement: function () {
            dem -= 1;
            return dem;
        },
        reset: function () {
            dem = init;
            return dem;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

