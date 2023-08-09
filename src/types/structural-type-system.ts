// One of TypeScript’s core principles is that type checking focuses on the shape that values have. 
// This is sometimes called “duck typing” or “structural typing”.

// In a structural type system, if two objects have the same shape, they are considered to be of the same type.
interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point);

// The point variable is never declared to be a Point type.
// However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

// The shape-matching only requires a subset of the object’s fields to match.

const point3 = { x: 12, y: 26, z: 86 };
logPoint(point3)

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);

const color = { hex: "#187ABF" };
logPoint(color)

// There is no difference between how classes and objects conform to shapes:

class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint);

// If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.