console.log("hey")

setTimeout(function () {
    console.log("timer")
}, 6000)

fetch("https://api.netflix.com")
    .then(function () {
        console.log("api fetched");
    })

console.log("end");


