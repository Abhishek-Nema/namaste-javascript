let arrayOfRadius2 = [2, 4, 6, 8]

const area2 = function (radius) {
    return Math.PI * radius * radius
}

const circumference2 = function (radius) {
    return 2 * radius
}

// map function
console.log(arrayOfRadius2.map(circumference2));

// mimicing map() in our code
Array.prototype.circle2 = function (logicFunc) {
    const res = []
    for (let i = 0; i < this.length; i++) {
        res.push(logicFunc(this[i]))
    }
    return res
}

console.log(arrayOfRadius2.circle2(circumference2));
