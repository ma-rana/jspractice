// This function adds a list of consecutive numbers
function addRange(start, end) {
  let sum = 0;
  for (let i = start; i < end + 1; i++) {
    sum += i;
  }
  // Lets understand the logic:
  // 1. Initialize sum to 0.
  // 2. Loop from start to end (inclusive).
  // 3. Add each number to sum.
  // 4. Return the total sum.
  // This is a simple implementation of the arithmetic series formula.
  // i = 1 and check 1 < (10+1) if true, add 1 to sum.
  // sum = 0;
  // now sum += 1; sum = 0 + 1 = 1
  // i = 2 and check 2 < (10+1) if true, add 1 to sum.
  // sum = 1;
  // now sum += 2; sum = 1 + 2 = 3
  // i = 3 and check 3 < (10+1) if true, add 1 to sum.
  // sum = 3;
  // now sum += 3; sum = 3 + 3 = 6
  // ...
  // i = 10 and check 10 < (10+1) if true, add 1 to sum.
  // sum = 45;
  // now sum += 10; sum = 45 + 10 = 55
  // Here, we are using a loop to achieve the same result.

  return sum;
}
// Add number from 10 to 15
let startNumber = 10;
let endNumber = 15;
console.log(addRange(startNumber, endNumber)); // Output: 55

//another example
let result = addRange(5, 15);
console.log(result); // Output: 110

//another example - Now adding numbers from 1 to 5
startnumber = 1;
endNumber = 5;
console.log(addRange(startNumber, endNumber)); // Output: 15
