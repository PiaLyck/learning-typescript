function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane Doe";
var PizzaMaker = /** @class */ (function () {
    function PizzaMaker() {
    }
    PizzaMaker.makeIt = function (event) {
        return { name: event.name, toppings: event.toppings };
    };
    return PizzaMaker;
}());
var yummyPizza = PizzaMaker.makeIt({
    name: "Friedas Favourite",
    toppings: ["Meat", "Cheese"]
});
document.body.textContent = "" + (yummyPizza.name + "\n" + yummyPizza.toppings);
