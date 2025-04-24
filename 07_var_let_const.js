// "var" can be hoisted, and declared later also
console.log(v); 
var v = "hey i am var"

// "let" can be hoisted but stays in Temporal Dead Zone until declares
// console.log(l);

let l = "yo, it's let"

// "const" can be hoisted but stays in Temporal Dead Zone until declares + initialized
// console.log(c);
const c = "hi, const here"

// --------------------------------------------
function test(){
    console.log("Hi")
    console.log("Hello")
    let x;
    let num;
    console.log(num)
    console.log("Hey")
    x = 1
    let y = 2
    let z = 3
    num = 65
}


test()