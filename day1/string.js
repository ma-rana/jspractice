const unknownVariable = new String("test");

// To check if a variable is a string?
if (typeof unknownVariable === "string") {
  console.log("This is a string");
  // This condition checks if the variable is of type string.
}

// To check if a variable have a non-empty string?
if (typeof unknownVariable === "string" && unknownVariable.length > 0) {
  console.log("This is a non-empty string");
  // This condition checks if the variable is a string and also checks if its length is greater than zero.
}

// To check if a variable are made up of whitespace characters only?
if (
  typeof unknownVariable === "string" &&
  unknownVariable.trim().length === 0
) {
  console.log("This is a string with only whitespace characters");
  // This condition checks if the variable is a string and if it contains only whitespace characters.
}

// This test is only safe if we already know that the variable is a string.
if (unknownVariable.length > 0) {
  console.log("This is a non-empty string");
  // This condition checks if the variable is a string and its length is greater than zero.
}

if (typeof unknownVariable === "string") {
  String.prototype.isPrototypeOf(unknownVariable);
  // It's a String primitive or a string wrapped in an object.
}
if (unknownVariable) {
  // We get here as long as:
  // - unknownVariable has been declared
  // - unknownVariable is not null
  // - unknownVariable is not undefined
  // - unknownVariable is not the empty string ''
}
