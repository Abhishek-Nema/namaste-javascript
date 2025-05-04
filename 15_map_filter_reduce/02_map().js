// map() is a higher-order function that takes a callback function 
// and applies it to each element of an array, 
// returning a new array with the transformed elements.

const numArr = [1, 2, 3, 4, 5]

// using function expression 
const doubleNum = numArr.map(function double(x) {
    return x * 2
})

// using arrow function
const binaryNum = numArr.map((x) => {
    return x.toString(2)
})

console.log(doubleNum);
console.log(binaryNum);
