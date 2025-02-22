/* Object literal and method*/
let person = {
  fname: "anjeet",
  lname: "patel",

  getFullName() {
    return `The person full name is ${person.fname} ${person.lname}`;
  },

  phoneNo: {
    mobileNo: "8557934474",
    landline: "1800383822",
  },
};

console.log(person.getFullName());
console.log(person.phoneNo.mobileNo);
console.log(person.phoneNo.landline);

function student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}

let student1 = new student("Aman", "patel");
let student2 = new student("Arpit", "Kumar");

console.log(`Student first is ${student1.fname} ${student1.lname}`);
console.log(`Student Second is ${student2.fname} ${student2.lname}`);

const coder = {
  isStudying: false,
  printIntroduction: function () {
    console.log(
      `My name is : ${this.name}. Am i studying : ${this.isStudying}`
    );
  },
};

const me = Object.create(coder);

me.name = "anjeet patel";

me.isStudying = true;

me.printIntroduction();

class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }

  getDetails() {
    return `The name of the vehicle is ${this.name}`;
  }
}

let v1 = new Vehicle("Creta", "Hyundai", "2200cc");
let v2 = new Vehicle("Q5", "Audi", "3000cc");

console.log(v1.name);
console.log(v2.maker);
console.log(v1.getDetails());

class emp {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;

    let getDetails_NoAccess = function () {
      console.log(`Name is: ${this.fname}, and address is: ${this.lname}`);
    };

    this.getDetails_Access = () => {
      console.log(`Name is: ${this.fname}, and address is: ${this.lname}`);
    };
  }
}

const emp1 = new emp("anjeet", "patel");
console.log(emp1.fname);
emp1.getDetails_NoAccess();
emp1.getDetails_Access();

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  getDetails() {
    return `Name is: ${this.fname}, and last name is: ${this.lname}`;
  }
}

class Student extends Person {
  constructor(fname, lname, rollNo) {
    super(fname, lname);
    this.rollNo = rollNo;
  }

  getDetails() {
    return `${super.getDetails()}, and rollNo is: ${this.rollNo}`;
  }
}

const stu1 = new Student("anjeet", "patel", 1);
console.log(stu1.fname);
console.log(stu1.getDetails());
