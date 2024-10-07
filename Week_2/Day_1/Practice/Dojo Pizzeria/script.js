function  pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType =  sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var s1 = pizzaOven("deep dish", "traditional", "mozzarella",["pepperoni", "sausage"]);
var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(s1);
console.log(s2);

var s3 = pizzaOven("mozzarella","deep dish", "olives");
var s4 = pizzaOven("marinara",["pepperoni", "sausage"]);

//--------------------------------------------------------------------//


function randomPizza(array){
    return array[Math.floor(Math.random() * array.length)];
}
console.log(randomPizza())
