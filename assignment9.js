// 1️⃣ let, const, var difference
function scopeExample() {
  var a = 10;     // function scoped
  let b = 20;     // block scoped
  const c = 30;   // block scoped (cannot reassign)

  if (true) {
    var a = 100;   // changes original (same scope)
    let b = 200;   // new variable (block scope)
    const c = 300; // new variable (block scope)

    console.log("Inside block:", a, b, c);
  }

  console.log("Outside block:", a, b, c);
}
scopeExample();

// Difference:
// var → function scope
// let → block scope
// const → block scope + cannot reassign


// 2️⃣ Fruits array - return second fruit
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit(arr) {
  return arr[1];
}
console.log("Second fruit:", getSecondFruit(fruits));


// 3️⃣ push() and pop()
function modifyArray(arr) {
  arr.push("NewFruit"); // add
  arr.pop();            // remove last
  return arr;
}
console.log("Modified array:", modifyArray([...fruits]));


// 4️⃣ map() - square numbers
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}
console.log("Squared:", squareNumbers(numbers));


// 5️⃣ filter() - remove even numbers
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log("Odd numbers:", getOddNumbers(numbers));


// 6️⃣ Object and greeting
const person = {
  name: "Sakshi",
  age: 21,
  occupation: "Student"
};

function greetPerson(obj) {
  console.log(`Hello, my name is ${obj.name}. I am a ${obj.occupation}.`);
}
greetPerson(person);


// 7️⃣ Area of rectangle
function getArea(rect) {
  return rect.width * rect.height;
}
console.log("Area:", getArea({ width: 10, height: 5 }));


// 8️⃣ Object keys
function getKeys(obj) {
  return Object.keys(obj);
}
console.log("Keys:", getKeys(person));


// 9️⃣ Merge two objects
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Merged:", mergeObjects({ a: 1 }, { b: 2 }));


// 🔟 reduce() - sum of array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum:", sumArray(numbers));