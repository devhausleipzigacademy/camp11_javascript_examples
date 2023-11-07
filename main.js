const arr1 = ["Superman", "Batman", "Birdman"];

//console.log(typeof arr1[2]);

const user = {
  firstName: "Julian",
  lastName: "Hernandez",
  age: 25,
};

//console.log("firstName: ", user.firstName, "lastName: ", user.lastName);

//console.log(user.lastName);

const index = 1;
//console.log(arr1[index]);

const key = "firstName";
//console.log(user[key]);

// Nested Objects and Arrays

const arr2 = [1, false, "string", ["Batman", "Catwomen", "Joker"]];
//console.log(arr2[3][1]);
//console.log(arr2[1]);

// bigger example

const julian = {
  firstName: "Julian",
  lastName: "Hernandez",
  age: 25,
  friends: ["Batman", "Catwomen", "Joker"],
  hobbies: ["Coding", "Gaming", "Reading"],
  address: {
    street: "123 Street",
    city: "Gotham",
    state: "NY",
    postalCode: "12345",
  },
};

const users = [
  {
    firstName: "Julian",
    lastName: "Hernandez",
    age: 25,
    friends: ["Batman", "Catwomen", "Joker"],
    hobbies: ["Coding", "Gaming", "Reading"],
    address: {
      street: "123 Street",
      city: "Gotham",
      state: "NY",
      postalCode: "12345",
    },
  },
  {
    firstName: "Jennifer",
    lastName: "Lopez",
    age: 25,
    friends: ["Birdman", "Pikatchu", "Joker"],
    hobbies: ["Coding", "Sports", "Reading", "Gaming", "Movies"],
    address: {
      street: "Street 123",
      city: "Hollywood",
      state: "CA",
      postalCode: "54321",
    },
  },
  {
    firstName: "Bryan",
    lastName: "Cranston",
    age: null,
    friends: ["Birdman", "Pikatchu", "Joker"],
    hobbies: [],
    address: {
      street: "Street 123",
      city: "Hollywood",
      state: "CA",
      postalCode: "54321",
    },
  },
];

// functions
function sayHello() {
  console.log("Hello");
  console.log("World");
  console.log("I can do awesome things with functions");
}

/* sayHello();
sayHello();
sayHello(); */

function sayHelloTo(firstName = "Stranger", lastName = "") {
  console.log(`Hello ${firstName} ${lastName}, nice to see u! `);
}

/* sayHelloTo();
sayHelloTo("Julian");
sayHelloTo("Jenny");
sayHelloTo("Maria");
sayHelloTo("Maria", "Hernandez");
console.log("BOOOOOOOOOOOM!!!!!!!");
sayHelloTo("Julian", "Vogel");
sayHelloTo(1, 3); */

const _ = undefined;
function makeCoffee(size = "medium", typeOfCoffee = "black", ingredients = []) {
  //console.log("some test", ingredients[1]);
  console.log(
    `Doing some Coffee: The size is ${size}, 
    the type is ${typeOfCoffee} and the 
    ingredients are ${ingredients.join(", ")}`
  );
}

/* makeCoffee("small", "black", ["milk", "sugar"]);
makeCoffee("large", "espresso", ["sugar"]);
makeCoffee("medium", "latte", ["milk", "sugar", "cinnamon"]);
makeCoffee(_, "latte"); */

// return  statement

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function totalResult(num1, num2, cb) {
  const result = cb(num1, num2);
  return `The result from ${num1} and ${num2} is ${result}`;
}

const additonSum = add(10, 20);
const multiplySum = multiply(3, 5);
const substractSum = substract(additonSum, multiplySum);
const result = totalResult(12, 5, multiply);
const result2 = totalResult(2, 5, (num1, num2) => {
  return num1 + num2;
});

console.log(result2);

//console.log(result);

const resultTwo = totalResult(5, 3, substract);
//console.log(resultTwo);

// Arrow Functions
function addNormal(num1, num2) {
  return num1 + num2;
}

const addArrow = (num1, num2) => {
  return num1 + num2;
};

const resultArrow = addArrow();
//console.log(resultArrow);

const testObj = {
  myMethod: (x) => {
    return "bla bla to hard!" + x;
  },
};
const test = testObj.myMethod("super good Gamze");
//console.log(test);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log("clicked");
});

let person = prompt("Please enter your name");
console.log(person);
alert("IM ALERT");
