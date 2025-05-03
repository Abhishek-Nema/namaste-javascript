/*
function count() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(`i inside setTmeout: ${i}`);
            console.log(`${i} + ${i} inside setTomeout: ${i + i}`);
        }, i * 1000)

        // this line will execute first
        console.log(`i outside setTmeout: ${i}`);
    }
}

count()
console.log("ended");
*/

// function x() {
//     for (var i = 0; i <= 20; i++) {
//         function y(num) {
//             setTimeout(function () {
//                 console.log(`hi : ${num}`);
//             }, num * 2 * 1000)
//             console.log(`Hey: I am ${num}`);
//         }
//         y(i)
//     }
// }

// let res = x()

// console.log('end line of code');







function one() {
    let x = 25
    console.log("hi");
    setTimeout(function () {
        console.log("hello ji", x);
    }, 3000)
    console.log(1 + 1);
    return
}

let two = one()
two()