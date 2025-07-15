// advantage of callback function...

// 1. Asynchronous JS programming =>  Callback functions are essential for asynchronoys programming, (promises and async-await does the work too)

const arr = [1, 2, 3]

setTimeout(function () {
    console.log("timer");
}, 5000)

console.log("end");


// disadvantage of callback function...

// 1. Callback hell =>  callback inside callback, inside callback; grows code horizontally resulting in Pyramid of Doom which is hard to maintain

api.createOrder(function () {

    api.proceedToPayment(function () {

        api.showBalance(function () {

            api.returnToHome()
        })
    })
})


// 2. Inversion of Control =>  handling our code's responsibilty to some other function, means we don't have any control on our program