// Function syntax includes parameter names. This is pretty hard to get used to!
let fst: (a: any, b: any) => any = (a, b) => a;
// or more precisely:
let fst2: <T, U>(a: T, b: U) => T = (a, b) => a;

console.log(fst2(10, 2))
console.log(fst(10, 2))

// Object literal type syntax closely mirrors object literal value syntax:
let o1: { n: number; xs: object[] } = { n: 1, xs: [] };
console.log(o1.n)

// Boxed types
console.log((1).toExponential())

Number.prototype.toExponential.call(1);

// Gradual typing
// with "noImplicitAny": false in tsconfig.json, anys: any[]
// const anys = [];
const anys: any[] = [];
// const anys: Array<number | string | { anything: string }> = [];
anys.push(1);
anys.push("oh no");
anys.push({ anything: "goes" });
console.log("🚀 ~ file: otro.ts:7 ~ anys:", anys)

// anys.map(anys[1]);

let sepsis = anys[0] + anys[1]; // this could mean anything

// Structural typing
// @strict: false
let o = { x: "hi", extra: 1 }; // ok
let o2: { x: string } = o; // ok

console.log(o2)

//

type One = { p: string };
interface Two {
    p: string;
}
class Three {
    p = "Hello";
}

let x: One = { p: "hi" };
let two: Two = x;
two = new Three();
console.log("🚀 ~ file: functional.ts:51 ~ two:", two)

// Unions

function start(
    arg: string | string[] | (() => string) | { s: string }
): string {
    // this is super common in JavaScript
    if (typeof arg === "string") {
        return commonCase(arg);
    } else if (Array.isArray(arg)) {
        return arg.map(commonCase).join(",");
    } else if (typeof arg === "function") {
        return commonCase(arg());
    } else {
        return commonCase(arg.s);
    }

    function commonCase(s: string): string {
        console.log("🚀 ~ file: functional.ts:71 ~ commonCase ~ s:", s)
        // finally, just convert a string to another string
        return s;
    }
}

console.log(start(['A']))

// Intersections

type Combined = { a: number } & { b: string };
type Conflicting = { a: number } & { a: string };

let combined1: Combined = { a: 1, b: '2' }
// let combined: Combined = { a: 1, b: '2', c: 1 } // Da error.
// let conflicting: Conflicting = { a: 2 }

// Unit types

declare function pad(s: string, n: number, direction: "left" | "right"): string;
// pad("hi", 10, "left");

// let s = "right";
// pad("hi", 10, s); // error: 'string' is not assignable to '"left" | "right"'

const fn1 = (arg: "left" | "right") => arg

const s1: string = "right";
// console.log(fn1(s1)) // Argument of type 'string' is not assignable to parameter of type '"left" | "right"'

// TypeScript additionally has a readonly modifier for properties.
interface Rx {
    readonly x: number;
}
let rx: Rx = { x: 1 };
//rx.x = 12; // error => Cannot assign to 'x' because it is a read-only property.

// interface X {
//     x: number;
// }
// let rx1: Readonly<X> = { x: 1 };
// rx1.x = 12; // error => Cannot assign to 'x' because it is a read-only property

let a1: ReadonlyArray<number> = [1, 2, 3];
let b1: readonly number[] = [1, 2, 3];
// a1.push(102); // error // Property 'push' does not exist on type 'readonly number[]'
// b1[0] = 101; // error // Index signature in type 'readonly number[]' only permits reading

let a3 = [1, 2, 3] as const;
// a3.push(102); // error // Property 'push' does not exist on type 'readonly [1, 2, 3]'.
// a3[0] = 101; // error // Cannot assign to '0' because it is a read-only property.