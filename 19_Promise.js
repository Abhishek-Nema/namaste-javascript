// - What is a promise?
// -- promise is an object which represents the eventual completion or failure of a async operation.

// - Why do we use promise?
// -- Promise helps to solve the problem which happens due to callback hell...
// 1. inversion of control. Here in promise we have control what callback will execute when and our inner callback will not cause unexpected behaviour.
// 2. pyramid of doom. In Promise it's easy to maintain and read the code.

// - How much values Promise returns?
// -- 2 values : PromiseState and PromiseResult

// - How many state a Promise can have?
// -- 3 states: pending, filfilled, rejected

const cart = ["shirt", "kurta", "pant"];

createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
        return showOrderSummary(paymentInfo);
    })
    .then(function (orderSummary) {
        console.log(orderSummary);
        return updateWalletBalance();
    })
    .catch(function (err) {
        console.log(err.stack);
    });

function createOrder(cart) {
    let promise = new Promise(function (resolve, reject) {
        const orderId = "AMZ987";
        if (validateCart()) {
            console.log(orderId);
            resolve(orderId);
        } else {
            const err = new Error("Your cart is not correct");
            reject(err);
        }
    });

    return promise;
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        if (true) {
            resolve("Payment successful");
        }
    });
}

function showOrderSummary(paymentInfo) {
    let pr = new Promise(function (resolve, reject) {
        resolve("Your payment summary:");
    });
    return pr;
}

function updateWalletBalance() {
    return new Promise(function (resolve, reject) {
        resolve("Your wallet balance updated!");
    });
}
