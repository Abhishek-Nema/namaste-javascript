let x = -1

// this is correct syntax of "if"
if (true) console.log("namaste!")

// example
if (x === 0) console.log("x is zero")
else if (x > 0) console.log("x is bigger");
else console.log("x is smaller");

// we use block or {} to combine multiple line statements as a one line
if (x === 0) {
    console.log("Hi");
    console.log("x is zero")
}
else if (x > 0) {
    console.log("Hello")
    console.log("x is bigger");
}
else {
    console.log("Hey");
    console.log("x is smaller");
}

// Block scope : region inside a block (enclosed within {}) where variables and functions declared using let or const are accessible.
