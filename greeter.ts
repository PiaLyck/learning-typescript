/* Interface */
interface Dog {
  name: string
  fur: string
  age: number
}

function greeter(cat: Cat) {
  return "Hello, " + cat.fullName;
}

let dog = {
  name: "Fido", fur: "short", age: 3
};


/* Class 1 - Pizza */ 
class PizzaMaker {
  static makeIt(event: { name: string; toppings: string[] }) {
    return { name: event.name, toppings: event.toppings };
  }
}

const yummyPizza = PizzaMaker.makeIt({
  name: "Friedas Favourite",
  toppings: ["Meat", "Cheese"],
})

/* Class 2 - Cats */
class Cat {
  fullName: string;
  constructor(public firstName: string, public lastName: string, public honorific: string) {
    this.fullName = honorific + " " + firstName + " " + lastName;
  }
}

let cat = new Cat("Kitty", "Purr", "Miss");

document.body.textContent = greeter(cat);