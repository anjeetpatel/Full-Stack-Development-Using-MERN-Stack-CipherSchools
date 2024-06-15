// let person = {
//     firstName : "Anjeet",
//     lastName : "Patel",

//     getFullName: function(){
//         return `The name of the person is ${person.firstName} ${person.lastName}`;
//     },

//     phoneNumber: {
//         mobile: "12274",
//         landline: "5678",
//     },
// };

// console.log(person.getFullName());
// console.log(person.phoneNumber.landline);

// function person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// let person1 = new person("Anjeet", "Patel");
// let person2 = new person("Anurag", "Mishra");

// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);

// const coder = {
//     isStudying: false,
//     printIntroduction: function(){
//         console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
//     },
// };

// const me = Object.create(coder);
// me.name = "Anjeet Patel";

// me.isStudying = true;

// me.printIntroduction();

// class Vehicle{
//     constructor(name, maker, engine){
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }

//     getDetails(){
//         return`the name of the vehicle is ${this.name}`;
//     }
// }

// let v1 = new Vehicle("Create", "Hyndai", "2500cc");
// let v2 = new Vehicle("Q5", "Audii", "3000cc");

// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());

// class Person{
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//     }

//     addAddress(newAddress){
//         this.address = newAddress;
//     }
//     getDetails(){
//         console.log(`Name is: ${this.name}, and address is: ${this.address}`);
//     }
// }

// let person1 = new Person("Anjeet",21);
// person1.addAddress("Lucknow");
// person1.getDetails();

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;

//     let getDetails_NoAccess = function(){
//         return `first name is: ${this.firstName} and last name is: ${this.lastName}`;
//     };

//     this.getDetails_Access = function(){
//         return `first name is: ${this.firstName} and last name is: ${this.lastName}`;
//     };
//     }
// }
// let person1 = new Person("Anjeet","Patel");
// console.log(person1.firstName);
// console.log(person1.getDetails_NoAccess());
// console.log(person1.getDetails_Access());

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getDetails = function () {
    return `first name is: ${this.firstName} and last name is: ${this.lastName}`;
  };
}

class Student extends Person {
  constructor(firstName, lastName, rollNumber) {
    super(firstName, lastName);
    this.rollNumber = rollNumber;
  }
  getDetails = function () {
    return `first name is: ${this.firstName} and last name is: ${this.lastName} and the roll number is: ${this.rollNumber}`;
  };
}

let person1 = new Person("Anjeet", "Patel");

console.log(person1.firstName);
console.log(person1.getDetails());

let student1 = new Student("Anurag", "Mishra", 20);
console.log(student1.getDetails());
