/* 
৩ ধরনের scope রয়েছে ১। Functional scope ২। Global Scope ৩। Block Scope
*/

/*Certainly! Let's explore the scopes of variables declared using `var`, `let`, and `const` in JavaScript.

// *******************var*******************

Variables declared with `var` have function scope or global scope, but not block scope. This means that they are accessible throughout the entire function or globally if declared outside of any function.
*/

// Example:

function example1() {
    var x = 10;
    if (true) {
        var y = 20;
        console.log(x); // Output: 10
        console.log(y); // Output: 20
    }
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}

example1();
console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined

/*In the example above:
- Both `x` and `y` are accessible within the function `example()` and within the block defined by the `if` statement because they are declared with `var`.
- They are not accessible outside of the function because they are function-scoped.*/



// *******************let******************


/*Variables declared with `let` have block scope. This means that they are accessible only within the block in which they are defined.*/

// Example:
function example2() {
    let x = 10;
    if (true) {
        let y = 20;
        console.log(x); // Output: 10
        console.log(y); // Output: 20
    }
    console.log(x); // Output: 10
    console.log(y); // ReferenceError: y is not defined
}

example2();
console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined

/*In this example:
- Both `x` and `y` are accessible within the function `example()`, but `y` is only accessible within the block defined by the `if` statement because it's declared with `let`.
- They are not accessible outside of the function or outside of the block they are defined in.*/

// *******************const*******************

/*Variables declared with `const` also have block scope like `let`. However, `const` variables cannot be reassigned once they are initialized.*/

// Example:

function example3() {
    const x = 10;
    if (true) {
        const y = 20;
        console.log(x); // Output: 10
        console.log(y); // Output: 20
    }
    console.log(x); // Output: 10
    console.log(y); // ReferenceError: y is not defined
}

example3();
console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined

/*In this example:
- Both `x` and `y` are accessible within the function `example()`, but `y` is only accessible within the block defined by the `if` statement because it's declared with `const`.
- Like `let`, `const` variables are not accessible outside of the function or outside of the block they are defined in.
- Additionally, you cannot reassign `const` variables after they have been initialized.*/
