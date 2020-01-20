function greeter(cat) {
    return "Hello, " + cat.fullName;
}
var dog = {
    name: "Fido", fur: "short", age: 3
};
/* Class 1 - Pizza */
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
/* Class 2 - Cats */
var Cat = /** @class */ (function () {
    function Cat(firstName, lastName, honorific) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.honorific = honorific;
        this.fullName = honorific + " " + firstName + " " + lastName;
    }
    return Cat;
}());
var cat = new Cat("Kitty", "Purr", "Miss");
document.body.textContent = greeter(cat);
