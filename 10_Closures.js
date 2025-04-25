function x() {
    var str = "I am spider-man"
    function y() {
        console.log(str);
    }
    str = "I am Ironman"
    return y
}
let res = x()
// console.log(str)  // ReferenceError: str is not defined
res()

// here y() is a closure, as it is having it's memory along with parents' lexixal env. reference



// another example
function func1() {
    let str1 = "MP means Madhya Pradesh"
    function func2() {
        let str2 = "UP means Uttar Pradesh"
        function func3() {
            let str3 = "HP means Himachal Pradesh"
            console.log(str1, str2, str3)
        }
        return func3
    }
    return func2
}

let res1 = func1()
let res2 = res1()
console.log(res2());

// here func2 is making a closure, having it's local memory + ref. of it's parent lexical scope i.e. func1()
// and func3 is also making a closure, having it's local memory + ref. of it's parents lexical scope i.e. func2() + func1()
