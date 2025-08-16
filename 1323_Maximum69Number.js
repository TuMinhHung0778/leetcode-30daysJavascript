/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {

    // B1: Chuyển số num thành chuỗi (string) để dễ duyệt từng chữ số.
    let s = num.toString().split("");

    // B2: Từ trái sang phải, tìm chữ số 6 đầu tiên.
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '6') {
            s[i] = '9'; // B3: Đổi chữ số đó thành 9, rồi dừng.
            break;
        }
    }
    // B4: Chuyển chuỗi về số nguyên.
    return parseInt(s.join(""));
    
};

console.log(maximum69Number(9669));
console.log(maximum69Number(9996));
console.log(maximum69Number(9999));
