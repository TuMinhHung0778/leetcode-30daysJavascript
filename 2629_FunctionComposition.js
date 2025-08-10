/**
 * @param {Function[]} functions
 * @return {Function}
 */
// 2629. Function Composition

let compose = function (functions) {
    // Trả về một hàm mới, nhận vào x
    return function (x) {
        // Nếu không có hàm nào trong mảng, trả về chính x
        if (functions.length === 0) {
            return x;
        }
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
            // functions : là mảng chứa các hàm
            // functions[i] : lấy ra hàm ở vị trí thứ i trong mảng
        }
        return x;
    }
};
let functionsH = [x => x + 1, x => x * x, x => Math.sqrt(x)];
console.log(functionsH[2](16)); // <=> x = functions[i](x)

let functionHH = [x => x + 1, x => x * 4];
let x = 3;

x = functionHH[0](x);
x = functionHH[1](x);

console.log(x);

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
