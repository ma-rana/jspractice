// "use strict"; // Enable strict mode

// Using strict mode to enforce stricter parsing and error handling in JavaScript

// Example during strict mode

// without using "use strict";
// function myFunction() {
//   undeclaredVariable = 10; // This will not cause a ReferenceError
// }
// console.log(myFunction()); // Output: undefined

// Using "use strict";
// "use strict";
// function myFunction() {
//   undeclaredVariable = 10; // This will cause a ReferenceError
// }
// console.log(myFunction()); // Output: ReferenceError: undeclaredVariable is not defined

// another example

// a = 5;
// b = 10;
// function sum(A, B) {
//   return A + B;
// }
// console.log(sum(a, b)); // Output: 15

// function sum(A, A) {
//   return A + A;
// }
// console.log(sum(a, b)); // Output: 20

// output:
// 20
// 20

// another example

// ("use strict"); // Enable strict mode

a = 5; // ReferenceError: a is not defined
b = 10; // ReferenceError: b is not defined

function sum(A, B) {
  return A + B;
}
console.log(sum(a, b));

function sum(A, A) {
  // SyntaxError: Duplicate parameter name not allowed
  return A + A;
}
console.log(sum(a, b));
