// map functionality to multiply each array element by 2

const arr = [4, 5, 6, 7]

// using map() function
// const output = arr.map((x) => x * 2)
// console.log(output);

// polyfill for map function
if (!Array.prototype.myMapFunc) {
    Array.prototype.myMapFunc = function (cb) {
        let res = []
        for (let i = 0; i < this.length; i++) {
            res.push(cb(this[i]))
        }
        return res
    }
}

// callback function
function doubleNum(elm) {
    return elm * 2
}

// higher order function
let res = arr.myMapFunc(doubleNum)
console.log(res);

// ---------------------------

// map functionality for finding binary of array elements

const arrayOfNumbers = [12, 14, 20, 22]

// using map() function
const result = arrayOfNumbers.map((x) => x.toString(2))
console.log(result);

// polyfill for map function 
if (!Array.prototype.myBinaryMapFunc) {
    Array.prototype.myBinaryMapFunc = function (cb) {
        let outputArray = []
        for (let i = 0; i < this.length; i++) {
            outputArray.push(cb(this[i]))
        }
        return outputArray
    }
}

// higher order function
let binaryArrayResult = arrayOfNumbers.myBinaryMapFunc(toBinary)
console.log(binaryArrayResult);

// callback function
function toBinary(elm) {
    return elm.toString(2)
}