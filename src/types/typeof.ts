let s = 'a'
console.log(typeof s === "string")

let n = 10.2
console.log(typeof n === "number")

let b = false
console.log(typeof b === "boolean")

let t_undefined;
console.log(typeof undefined === "undefined")

let f = () => { }
console.log(typeof f === "function")

let a = []
console.log(Array.isArray(a))


function wrapInArray(obj: string | string[]): string[] {
    if (typeof obj === "string") {
        return [obj];

        // (parameter) obj: string
    }
    return obj;
}