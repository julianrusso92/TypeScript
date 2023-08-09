export { }
// There are two main tools to declare the shape of an
// object: interfaces and type aliases.
//
// They are very similar, and for the most common cases
// act the same.

type BirdType = {
    wings: 2;
};

interface BirdInterface {
    wings: 2;
};

const bird1: BirdType = { wings: 2 };
const bird2: BirdInterface = { wings: 2 };

// Because TypeScript is a structural type system,
// it's possible to intermix their use too.

const bird3: BirdInterface = bird1;

// They both support extending other interfaces and types.
// Type aliases do this via intersection types, while
// interfaces have a keyword.

type Owl = { nocturnal: true } & BirdType;
type Robin = { nocturnal: false } & BirdType;

interface Chicken extends BirdInterface {
    colourful: true;
    flies: false;
}

let buho: Owl = { wings: 2, nocturnal: true };
let chicken: Chicken = { wings: 2, colourful: true, flies: false };

// That said, we recommend you use interfaces over type
// aliases. Specifically, because you will get better error
// messages. If you hover over the following errors, you can
// see how TypeScript can provide terser and more focused
// messages when working with interfaces like Chicken.

buho = chicken; // Type 'Chicken' is not assignable to type 'Owl'. Property 'nocturnal' is missing in type 'Chicken' but required in type '{ nocturnal: true; }'
chicken = buho;

// One major difference between type aliases vs interfaces
// are that interfaces are open and type aliases are closed.
// This means you can extend an interface by declaring it
// a second time.

interface Kitten {
    purrs: boolean;
}
interface Kitten {
    colour: string;
}

let gatito: Kitten = { purrs: true, colour: 'red' }

// In the other case a type cannot be changed outside of
// its declaration.

type Puppy = {
    color: string;
}
type Puppy = {
    toys: number;
}

// Depending on your goals, this difference could be a
// positive or a negative. However for publicly exposed
// types, it's a better call to make them an interface.

// One of the best resources for seeing all of the edge
// cases around types vs interfaces, this stack overflow
// thread is a good place to start:

// https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types/52682220#52682220

// Objects / Functions

// Interface
interface PointInterface {
    x: number;
    y: number;
}

interface SetPointInterface {
    (x: number, y: number): void;
}

const SetPointInterfaceFn: SetPointInterface = function setPointInterface(x: number, y: number) { console.log(`x ${x}`); }

//Type alias

type Point = {
    x: number;
    y: number;
};

type SetPointType = (x: number, y: number) => void;

const setPoint: SetPointType = (x: number, y: number) => { return 1; }

// Other Types
//Unlike an interface, the type alias can also be used for other types such as primitives, unions, and tuples.

// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

// Extend
//Both can be extended, but again, the syntax differs. Additionally, note that an interface and type alias are not mutually exclusive. An interface can extend a type alias, and vice versa.

// Interface extends interface

interface PartialPointX2 { x: number; }
interface Point2 extends PartialPointX2 { y: number; }

//Type alias extends type alias

type PartialPointX3 = { x: number; };
type Point3 = PartialPointX3 & { y: number; };

// Interface extends type alias

type PartialPointX4 = { x: number; };
interface Point4 extends PartialPointX4 { y: number; }

// Type alias extends interface

interface PartialPointX5 { x: number; }
type Point5 = PartialPointX5 & { y: number; };

// Implements
// A class can implement an interface or type alias, both in the same exact way. Note however that a class and interface are considered static blueprints. 
// Therefore, they can not implement / extend a type alias that names a union type.

interface Point6 {
    x: number;
    y: number;
}

class SomePoint implements Point6 {
    x = 1;
    y = 2;
}

type Point7 = {
    x: number;
    y: number;
};

class SomePoint7 implements Point7 {
    x = 1;
    y = 2;
}

type PartialPoint1 = { x: number; } | { y: number; };

// FIXME: can not implement a union type
class SomePartialPoint implements PartialPoint1 {
    x = 1;
    y = 2;
}

// Declaration merging
//Unlike a type alias, an interface can be defined multiple times, and will be treated as a single interface (with members of all declarations being merged).

// These two declarations become:
// interface Point { x: number; y: number; }
interface Point10 { x: number; }
interface Point10 { y: number; }

const point: Point10 = { x: 1, y: 2 };