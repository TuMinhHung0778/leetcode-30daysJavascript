/**
 * @param {number[][]} dimensions
 * @return {number}
 */

//leetcode 3000. Maximum Area of Longest Diagonal Rectangle

var areaOfMaxDiagonal = function (dimensions) {
    let maxArea = 0; // lưu diện tích lớn nhất trong trường hợp có nhiều đường chéo bằng nhau.
    let maxDiag = 0; // lưu độ dài đường chéo lớn nhất tính đến hiện tại

    for (let i = 0; i < dimensions.length; i++) {
        let l = dimensions[i][0];
        let w = dimensions[i][1];
        let currDiag = Math.sqrt(l * l + w * w);

        if (currDiag > maxDiag || (currDiag === maxDiag && l * w > maxArea)) {
            maxDiag = currDiag;
            maxArea = l * w;
        }
    }
    return maxArea;
};