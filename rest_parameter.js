// Tại sao cần rest parameter?
// Rest parameter trong JavaScript cho phép chúng ta biểu diễn một số lượng không xác định các đối số dưới dạng mảng trong một hàm. Nhờ đó, ta có thể xử lý nhiều đối số mà không cần khai báo từng cái một trong phần định nghĩa hàm.
// Rest parameter được biểu diễn bằng ba dấu chấm (...) theo sau là tên biến trong phần khai báo hàm hoặc biểu thức hàm.

// Ví dụ minh họa
// Giả sử ta có một mảng và muốn truyền toàn bộ giá trị của nó vào một hàm:

let array = [1,2,3,4,5];

// we expect argument to be passed in this way
function sum (a,b,c,d,e){
    console.log(a,b,c,d,e) // 1 2 3 4 5 
}

// brute force method 
sum(array[0],array[1],array[2],array[3],array[4]);

// Problem :- we have to pass each value individually & 
// if we have 1000 values in array then 
// we have to pass 1000 arguments in function which is not feasible.


// using spread parameter we can pass all the values of array in one go
sum(...array); 

//spread parameter allows us to pass indefinite number of arguments as an array within a function.
// In the function we can get them as an array and use them as we want.
 
function sum (...args){
    console.log(args) // [1,2,3,4,5]
}

// we can also use rest parameter to get part of arguments as an array
function sum (a,b,...args){
    console.log(a,b,args) // 1 2 [3,4,5]
}

