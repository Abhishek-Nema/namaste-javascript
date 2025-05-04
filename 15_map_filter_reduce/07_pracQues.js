// ---------------------------

// 1. Square each number in an array.

const numbers = [1, 2, 3, 4, 5];
// Expected output: [1, 4, 9, 16, 25]

const sqr = numbers.map((x) => x * x)
console.log(sqr);
// ---------------------------

// 2. Extract just the names from an array of objects.

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
// Expected output: ["Alice", "Bob", "Charlie"]

const extractNames = people.map(function (str) {
    return str.name
})
console.log(extractNames);

// ---------------------------

// 3. Remove all even numbers from an array.

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Expected output: [1, 3, 5, 7, 9]

const onlyOddNums = numberArray.filter((n) => {
    return n % 2
})
console.log(onlyOddNums);

// ---------------------------

// 4. Filter out students who scored less than 50.

const students = [
    { name: "Alice", score: 40 },
    { name: "Bob", score: 55 },
    { name: "Charlie", score: 65 }
];
// Expected output: [{ name: "Bob", score: 55 }, { name: "Charlie", score: 65 }]

const lessThan50 = students.filter((x) => x.score > 50)
console.log(lessThan50);

// ---------------------------

// 5. Convert an array of words into a sentence.

const words = ["JavaScript", "is", "awesome"];
// Expected output: "JavaScript is awesome"

const wordSentence = words.reduce((acc, curr) => {
    acc = acc + " " + curr
    return acc
})
console.log(wordSentence);

// ---------------------------

// 6. Find the total price of all products in a shopping cart.

const cart = [
    { item: "Laptop", price: 500 },
    { item: "Phone", price: 300 },
    { item: "Tablet", price: 200 }
];
// Expected output: 1000

const totalPrice = cart.reduce((acc, curr) => {
    acc = acc + curr.price
    return acc
}, 0)

console.log(totalPrice);
