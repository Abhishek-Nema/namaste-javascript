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