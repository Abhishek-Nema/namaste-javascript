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