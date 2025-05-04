// reduce() is a higher-order function that takes two mandatory arguments: a callback function and an initial value for the accumulator.
// The callback function receives two arguments: accumulator and currentValue.
// It processes each element of the array and returns a single, final value.

let numArr = [1, 4, 9, -5, 8]

const sum = numArr.reduce(function (acc, curr) {
    acc = acc + curr
    return acc
}, 0)

console.log(sum);

const maxNum = numArr.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr
    }
    return acc
}, 0)

console.log(maxNum);
