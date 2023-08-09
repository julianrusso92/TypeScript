export { }

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";
// let user = [0, 1, 2];

greeter(user);

//

interface Person {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = { firstName: "Jane", lastName: "User" };
let user3 = { firstName: "Jane", lastName: "User", id: 1 };

greeter2(user2);
greeter2(user3);

class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter3(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user4 = new Student("Jane", "M.", "User");

const result = greeter3(user4);
console.log("🚀 ~ file: greeter.ts:52 ~ result:", result)
console.log("🚀 ~ user4:", user4.fullName)
