function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
}

console.log(makePizza("Royal Grand", makePizza));
console.log(makeMessage("Ultracheese", deliverPizza));
