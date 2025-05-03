// Higher Order Function : function which takes another function as an argument, or returns a function from itself
// Callback function : function which got passes as an argument to a function

// Modular code = Resuable code
// Higher order function helps in writing modular code


// noob way for finding area of circle
// const lengthArray = [2, 4, 6, 8]

// const circleArea = function (arr) {
//     const res = []
//     for (let i = 0; i < arr.length; i++) {
//         res.push(Math.PI * arr[i] * arr[i])
//     }
//     return res
// }

// console.log(circleArea(lengthArray));


// Resuable way for finding area and circumference of circle
let arrayOfRadius = [2, 4, 6, 8]

const area = function (radius) {
    return Math.PI * radius * radius
}

const circumference = function (radius) {
    return 2 * radius
}

const circle = function (radiusArr, logicFunc) {
    const res = []
    for (let i = 0; i < radiusArr.length; i++) {
        res.push(logicFunc(radiusArr[i]))
    }
    return res
}

console.log(circle(arrayOfRadius, circumference));
console.log(circle(arrayOfRadius, area));

// --------------------------------------------------

// Modular code for finding area and perimeter for square and rectangle

const arrayOfLength = [4, 5, 6, 7]
const arrayOfWidth = [7, 8, 9, 5]

const squareArea = function (side) {
    return side * side
}

const squarePerimeter = function (side) {
    return (4 * side)
}

const rectangleArea = function (l, w) {
    return (l * w)
}

const rectanglePerimeter = function (l, w) {
    return (2 * (l + w))
}

const square = function (lenArr, func) {
    let res1 = []
    for (let i = 0; i < lenArr.length; i++) {
        res1.push(func(lenArr[i]))
    }
    return res1
}

const rectangle = function (lenArr, widArr, func) {
    let res2 = []

    for (let i = 0; i < lenArr.length; i++) {
        res2.push(func(lenArr[i], widArr[i]))
    }

    return res2
}

console.log(square(arrayOfLength, squareArea));
console.log(square(arrayOfLength, squarePerimeter));

console.log(rectangle(arrayOfLength, arrayOfWidth, rectangleArea));
console.log(rectangle(arrayOfLength, arrayOfWidth, rectanglePerimeter));

