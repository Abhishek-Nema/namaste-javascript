let num1 = 10
if (true) {
    let num1;  // due to shadowing, inner num1 (undefined) oveerides the outer num1 (10)
    console.log(`Inner block scope: ${num1}`)
}
console.log(`Outer block scope: ${num1}`)

// another example
var num2 = 100
console.log(`Initial num2: ${num2}`)

if (true) {
    var num2 = 250
    console.log(`num2 inside block scope: ${num2}`)
}
//  as var is not block scoped, hence inner value of var leaks out
console.log(`Final num2 after block scope: ${num2}`)

function test() {
    var num2 = 500
    console.log(`num2 inside function test(): ${num2}`)
}
test()
//  as var is function scoped, hence inner value of var didn't leaked
console.log(`Final num2 after function test(): ${num2}`)  