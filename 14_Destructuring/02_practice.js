// Function using Array Destructuring and Date() concept


// function to display user details
function showDetail(name, age) {
    return `Hi, name: ${name}, age: ${age}`
}

// function to generate user details
function userDetail(user_fName, user_lName, user_BirthYear) {
    let user_FullName = user_fName + " " + user_lName;
    // using Date object
    let myDate = new Date()
    let user_Age = myDate.getFullYear() - user_BirthYear
    return [user_FullName, user_Age]
}

// using array destructuring
const [user1_fullName, user1_age] = userDetail("Zakir", "Khan", 1987)
console.log(showDetail(user1_fullName, user1_age));

const [user2_fullName, user2_age] = userDetail("Pankaj", "Tripathi", 1951)
console.log(showDetail(user2_fullName, user2_age));
