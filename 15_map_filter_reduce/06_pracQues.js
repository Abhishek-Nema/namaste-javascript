// ---------------------------
// 1. Given an array of numbers, return a new array where each number is doubled.

const numbers = [1, 2, 3, 4, 5];
// Expected output: [2, 4, 6, 8, 10]

const doubleNums = numbers.map((n) => n * 2)
console.log(doubleNums);

// ---------------------------

// 2. Convert an array of strings to uppercase.

const words = ["hello", "world", "javascript"];
// Expected output: ["HELLO", "WORLD", "JAVASCRIPT"]

const strUpperCase = words.map(function (str) {
    return str.toUpperCase()
})
console.log(strUpperCase);

// ---------------------------

// 3. Filter out numbers that are more than 10 from an array.

const numArray = [5, 10, 15, 3, 20, 25];
// Expected output: [10, 15, 20, 25]

const lessThan10 = numArray.filter((x) => x >= 10)
console.log(lessThan10);

// ---------------------------

// 4. Given an array of names, return only the names that start with 'A'.

const names = ["Alice", "Bob", "Amanda", "Charlie"];
// Expected output: ["Alice", "Amanda"]

const startingWithA = names.filter(function (str) {
    return str.startsWith("A")
})
console.log(startingWithA);

// ---------------------------

// 5. Flatten an array of arrays into a single array.

const nestedArray = [[1, 2], [3, 4], [5]];
// Expected output: [1, 2, 3, 4, 5]

const flattenArray = nestedArray.reduce((acc, curr) => {
    return acc.concat(curr)
}, [])

console.log(flattenArray);

// ---------------------------

// Problem: You are given an array of objects representing people's likes on different posts. Each object contains a person's name and the post they liked.

const likes = [
    { name: "Alice", post: "Post A" },
    { name: "Bob", post: "Post B" },
    { name: "Alice", post: "Post B" },
    { name: "Charlie", post: "Post A" },
    { name: "Bob", post: "Post A" },
    { name: "Alice", post: "Post C" }
];

//  Find the number of likes each post has.

const likesPerPost = likes.reduce((acc, curr) => {
    if (acc[curr.post]) {
        acc[curr.post]++
    }
    else {
        acc[curr.post] = 1
    }
    return acc
}, {})

console.log(likesPerPost);

//  Find how many posts each person has liked.

const postsPerPerson = likes.reduce((acc, curr) => {
    if (acc[curr.name]) {
        acc[curr.name]++
    }
    else {
        acc[curr.name] = 1
    }
    return acc
}, {})

console.log(postsPerPerson);
