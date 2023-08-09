export { }

const message = "Hello World!";

// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase(); // ?

// Calling 'message'
// message(); //This expression is not callable. Type 'String' has no call signatures.

function fn(x: any) {
    return x.flip();
}

const user = {
    name: "Daniel",
    age: 26,
};
// console.log(user.location); // In JS returns undefined 
// user.location // In TS Property 'location' does not exist on type '{ name: string; age: number; }'

// For example: typos
const announcement = "Hello World!";

// How quickly can you spot the typos?
// announcement.toLocaleLowercase(); // Property 'toLocaleLowercase' does not exist on type '"Hello World!"'. Did you mean 'toLocaleLowerCase'?
// announcement.toLocalLowerCase(); // Property 'toLocalLowerCase' does not exist on type '"Hello World!"'. Did you mean 'toLocaleLowerCase'?

// We probably meant to write this...
announcement.toLocaleLowerCase();

// uncalled functions
function flipCoin() {
    // Meant to be Math.random()
    // return Math.random < 0.5; //Operator '<' cannot be applied to types '() => number' and 'number'.
}

// or basic logic errors
// const value = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//     // ...
// } else if (value === "b") {
//     // This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
//     // Oops, unreachable
// }

// This is an industrial-grade general-purpose greeter function:
function greet(person: any, date: any) {
    console.log(`Hello ${person}, today is ${date}!`);
}

// greet("Brendan"); // Expected 2 arguments, but got 1.

// Explicit Types
function greet2(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet2("Maddison", new Date()); // Argument of type 'string' is not assignable to parameter of type 'Date'.

const date1 = Date();
console.log(date1)
console.log(typeof date1)

const date2 = new Date();
console.log(date2)
console.log(typeof date2)
