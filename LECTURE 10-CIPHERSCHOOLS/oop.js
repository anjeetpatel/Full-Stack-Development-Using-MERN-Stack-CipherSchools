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

function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let person1 = new person("Anjeet", "Patel");
let person2 = new person("Anurag", "Mishra");

console.log(person1.firstName);
console.log(`${person2.firstName} ${person2.lastName}`);
