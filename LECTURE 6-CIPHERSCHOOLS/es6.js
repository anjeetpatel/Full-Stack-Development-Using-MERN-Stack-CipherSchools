// let = block level scope
// var = global scope
// const value cannot be changed
var x = 15;
{
    let x = 5;
    console.log(x);
}
console.log(x);

//function
var x = function(x,y){
    return x+y;
};
console.log(x(5,6));

// arrow function
const x = (x,y)=>{
        return x+y;
};
console.log(x(5,6));

//short hand syntax of an arrow function
const x = (x,y) => x+y;
console.log(x(5,6));

//spread operator = expand an iterable
const q1 = ["jan","feb","mar"];
const q2 = ["apr","may","jun"];
const q3 = ["jul","aug","sep"];
const q4 = ["oct","nov","dec"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year); 
                        /*[
                        'jan', 'feb', 'mar',
                        'apr', 'may', 'jun',
                        'jul', 'aug', 'sep',
                        'oct', 'nov', 'dec'
                        ]*/

const myNumber = [25,12,50,77,-1];
let maxValue = Math.max(...myNumber);  //77

// console.log(maxValue);
let sum = 0;
for(let num of myNumber){
    sum+=num;
}
console.log(sum);  //163

const name = "Cipherschools";
let text = "";
for(let ch of name){
    text += ch + " ";
}
console.log(text);  // C i p h e r s c h o o l s

//map function
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits);  //Map(3) { 'apples' => 500, 'bananas'=> 300, 'oranges'=> 200}
console.log(fruits.get("oranges")); //200

//Sets
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("a");
console.log(letters); // Set(2) { 'a', 'b' }

//classes
// class Car{
    constructor(name, mfgYear){
        this.name = name;
        this.mfgYear = mfgYear;
    }
}

const myCar1 = new Car("Mercedes",2022);
const myCar2 = new Car("Porsche",2020);
console.log(myCar1,myCar2); //Car { name: 'Mercedes', mfgYear: 2022 } Car { name: 'Porsche', mfgYear: 2020 }

//Promises
const myFunction = () => {
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("This is Inside Promise");
        resolve();
    },2000);
});
};
myFunction()
.then(()=>{
    console.log("Resolved");
})
.catch(()=>{
    console.log("Rejected");
});    
//output: after 2 sec it will print
// This is Inside Promise
// Resolved

//Symbols
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyecolor: "blue",
}
let id = Symbol("id");
person[id] = 14011;

console.log(person);  
/*output
{
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  eyecolor: 'blue',
  [Symbol(id)]: 14011
}*/

//default parameter
const addTwoNumbers = (a, b = 10) => a+b;
console.log(addTwoNumbers(10));  //20

const addNumbers = (...args) => {
    let sum = 0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
};

console.log(addNumbers(10,14,16,22,1,45));    //108