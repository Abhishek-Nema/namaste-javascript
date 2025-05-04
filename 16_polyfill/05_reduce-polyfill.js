// reduce functionality to sum all numbers of array

const num_arr = [1, 2, 3, 4, 5, 6]

// using reduce() function
// const result = num_arr.reduce((acc, curr) => {
//     acc = acc + curr
//     return acc
// }, 0)
// console.log(result);


// using polyfill
if (!Array.prototype.myReduceFunc) {
    Array.prototype.myReduceFunc = function (cb) {
        let res = 0
        for (let i = 0; i < this.length; i++) {
            // here res is accumulator, and this[i] is current value
            res = cb(res, this[i])
        }
        return res
    }
}

function sumFunc(acc, current_val) {
    total = acc + current_val
    return total
}

const output = num_arr.myReduceFunc(sumFunc)
console.log(output);
