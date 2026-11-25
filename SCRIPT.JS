let a = 10;
let b = 20;
console.log(a + b);
let sum = (a, b) => {
    return a + b;
}
console.log(sum(a, b));
let multiple = function(a, b) {
    console.log(a * b);
}
multiple(10, 20);

let array = ["prem", "kanish", "siva"];
console.log(array);

const mypromise = new Promise((resolve, reject) => {
    let orderPlaced = false
    if (orderPlaced) {
        resolve("Order placed successfully");
    } else {
        reject("Failed to place order");
    }
});
mypromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("no orders");
});