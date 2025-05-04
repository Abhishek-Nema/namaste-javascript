// --------------------------------------------
// Filter users above the age of 30 and return their full names
const users = [
    { firstName: "Akshay", lastName: "Saini", age: 26 },
    { firstName: "Hitesh", lastName: "Choudhary", age: 35 },
    { firstName: "Piyush", lastName: "Garg", age: 26 },
    { firstName: "Harry", lastName: "Khan", age: 31 }
]

const fullName = users.filter((x) => {
    return x.age > 30
}).map((y) => {
    return (y.firstName + " " + y.lastName)
})

console.log(fullName)

// --------------------------------------------


// using reduce() function, filter users above the age of 30 and return their full names
const usingReduce = users.reduce((acc, curr) => {
    if (curr.age > 30) {
        acc.push(curr.firstName + " " + curr.lastName)
    }
    return acc
}, [])

console.log(usingReduce);

// --------------------------------------------


// Count the occurrences of each age in the usersData array using reduce()
const usersData = [
    { firstName: "Akshay", lastName: "Saini", age: 26 },
    { firstName: "Hitesh", lastName: "Choudhary", age: 35 },
    { firstName: "Piyush", lastName: "Garg", age: 26 },
    { firstName: "Harry", lastName: "Khan", age: 31 }
]

const output = usersData.reduce(function (acc, curr) {
    if (acc[curr.age] > 1) {
        acc[curr.age]++
    }
    else {
        acc[curr.age] = 1
    }
    return acc
}, {})

console.log(output);
