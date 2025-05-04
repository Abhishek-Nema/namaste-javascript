const numArr = [1, 2, 3, 4]

// regular forEach loop
// numArr.forEach(function (n) {
//     console.log(n);
// })

// callback function 
function printVal(elm) {
    return elm
}

// polyfill of forEach
if (!Array.prototype.myforEach) {
    Array.prototype.myforEach = function (cb) {
        for (let i = 0; i < this.length; i++) {
            console.log(cb(this[i]));

        }
    }
}

// higher order function
numArr.myforEach(printVal)