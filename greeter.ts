/* Interface */
interface Dog {
  name: string
  fur: string
  age: number
}

function greeter(dog: Dog) {
  return "Hello, " + dog.name + "\n" + "You are " + dog.age + " years old";
}

let dog = {
  name: "Fido", fur: "short", age: 3
};


/* Class */ 
class PizzaMaker {
  static makeIt(event: { name: string; toppings: string[] }) {
    return { name: event.name, toppings: event.toppings };
  }
}

const yummyPizza = PizzaMaker.makeIt({
  name: "Friedas Favourite",
  toppings: ["Meat", "Cheese"],
})

document.body.textContent = greeter(dog);