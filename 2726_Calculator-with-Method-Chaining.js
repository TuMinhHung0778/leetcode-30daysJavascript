class Calculator {
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value; // lưu giá trị ban đầu
    }
    
    /** Cộng thêm value */
    add(value) {
        this.result += value;
        return this; // trả về chính object để chaining
    }
    
    /** Trừ đi value */
    subtract(value) {
        this.result -= value;
        return this;
    }
    
    /** Nhân với value */
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    /** Chia cho value */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }
    
    /** Lũy thừa */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }
    
    /** Lấy kết quả */
    getResult() {
        return this.result;
    }
}