// array LECTURE  14

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)   9 Element is inserted at the start.
// myArr.shift()      Element is removed from the start. 

// console.log(myArr.includes(9));  is 9 element is present in the array or not -> True or False.
// console.log(myArr.indexOf(3));   if value does not exist,it will return -1.

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);    both are different ..newArr will give us an string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
