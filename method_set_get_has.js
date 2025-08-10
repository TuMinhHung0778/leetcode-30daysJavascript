// leetcode

// Map giống như 1 cái hộp đựng đồ
const myMap = new Map();
// .set() : đặt đồ vào hộp(Map) :

myMap.set('name', 'Hung'); // string
myMap.set('tuoi', 919) // number
const objkey = { id: 1 };
myMap.set(objkey, 'objkey lam key') // object

console.log(myMap);

// .get() : lầy đồ ra khỏi hộp :
console.log(myMap.get('name'));
console.log(myMap.get('tuoi'));
console.log(myMap.get(objkey));

// .has() : kiểm tra xem trong hộp có đồ không : 
console.log(myMap.has('name'));
console.log(myMap.has('tuoi'));
console.log(myMap.has(objkey));
console.log(myMap.has('gia tri sai'));