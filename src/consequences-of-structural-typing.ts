// # Empty Types

// The first is that the empty type seems to defy expectation:

class Empty { }

function fn(arg: Empty) {
    console.log(arg)
}

// No error, but this isn't an 'Empty' ?    
fn({ k: 10 })

// TypeScript determines if the call to fn here is valid by seeing if the provided argument is a valid Empty.
// It does so by examining the structure of { k: 10 } and class Empty { }. We can see that { k: 10 } has all of the properties that Empty does,
// because Empty has no properties. Therefore, this is a valid call!

// # Identical Types

// Another frequent source of surprise comes with identical types:

class Car {
    drive() {
        //hit the gas
    }
}

class Golfer {
    drive() {
        // hit the ball far
    }
}

// No error?
let w: Car = new Golfer();
w.drive();