function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane Doe";

class PizzaMaker {
    static makeIt(event: { name: string; toppings: string[] }) {
      return { name: event.name, toppings: event.toppings };
    }
  }

const yummyPizza = PizzaMaker.makeIt({
    name: "Friedas Favourite",
    toppings: ["Meat", "Cheese"],
})

document.body.textContent = `${yummyPizza.name + "\n" + yummyPizza.toppings}`;