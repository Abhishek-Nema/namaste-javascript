// filter functionality to filter out even numbers from array

const number_array = [4, 5, 6, 7, 9, 8]

// using filter() function
const filtered_array = number_array.filter(function (x) {
    return x % 2
})
console.log(filtered_array);


// polyfill for filter function
if (!Array.prototype.myEvenNumFilter) {
    Array.prototype.myEvenNumFilter = function (cb) {
        const res = []
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i])) {
                res.push(this[i])
            }
        }
        return res
    }
}

// callback function
function filterEvenNum(elm) {
    return elm % 2
}

// printing result
console.log(number_array.myEvenNumFilter(filterEvenNum));

// we can print in this way too
const resultedArray = number_array.myEvenNumFilter(function (elm) {
    return elm % 2
})
console.log(resultedArray);

// --------------------------------------

// filter functionality to filter out names with length < 7

const name_array = ["manohar", "hitesh", "sukhbinder", "akshay", "piyush", "jaishankar"]

// polyfill
if (!Array.prototype.myNamefilter) {
    Array.prototype.myNamefilter = function (cb) {
        let arr = []
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i])) {
                arr.push(this[i])
            }
        }
        return arr
    }
}

// callback function
function lengthLessThan7(elm) {
    return elm.length < 7
}

// printing result
const output = name_array.myNamefilter(lengthLessThan7)
console.log(output);
