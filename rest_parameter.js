function test(...args2) {
    // args là một mảng chứa tất cả các đối số mà ta truyền vào hàm khi gọi.
    // Dấu ... trước args trong function(...args) gọi là rest parameter. Nó gom tất cả tham số vào một mảng.
    console.log(args2);
}
test(1, 2, 3);
test("hello", true, 42);