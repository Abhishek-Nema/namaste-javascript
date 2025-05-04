// filter() is a higher order function, which takes callback as an argument
// the callback's logic applies some filter condition on elements
// returns new array with filtered elements

const numArr = [1, 2, 4, 5, 6, 8]

const greaterThan3 = numArr.filter((x) => x > 3)
console.log(greaterThan3);

const isOdd = numArr.filter(function (x) {
    return x % 2
})
console.log(isOdd);