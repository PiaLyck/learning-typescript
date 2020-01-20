function greeter(dog) {
    return "Hello, " + dog.name + "\n" + "You are " + dog.age + " years old";
}
var dog = {
    name: "Fido", fur: "short", age: 3
};
/* Class */
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
document.body.textContent = greeter(dog);
