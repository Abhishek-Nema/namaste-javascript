// Named Function Expression
var x = function y() {
    console.log("This is fun");
    console.log(y);
    function z() {
        console.log(y);
    }
    z()
}

x()