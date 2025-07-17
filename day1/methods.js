console.warn("Warning");
// This code logs the provided object to the console with a warning level.
// It can be used for debugging purposes to alert developers about potential issues.
// Ensure that the object is defined before logging to avoid errors.

console.error("Error");
// This code logs the provided object to the console with an error level.
// It can be used to indicate that something has gone wrong in the application.
// Ensure that the object is defined before logging to avoid errors.

console.assert(true, "This will not log"); // This code checks if the first argument is true; if not, it logs the second argument as an error message.

console.assert(false, "Assertion failed");
// This code asserts that the condition is false and logs an error message if it is.
// It can be used to catch unexpected conditions during development.
// Ensure that the condition is defined before using assert to avoid errors.

console.trace("Trace");
// This code logs a stack trace to the console, which can help in debugging by showing the call stack at the point where it was called.
// It can be useful to understand the flow of execution and identify where an issue may have occurred.
// Ensure that the object is defined before logging to avoid errors

console.count("Count");
// This code counts the number of times it has been called with the same label and logs the count to the console.
// It can be useful for tracking how many times a particular code path is executed.
// Ensure that the label is defined before using count to avoid errors.

console.countReset("Count");
// This code resets the count for the specified label to zero.
// It can be useful when you want to start counting again from zero for a specific label.
// Ensure that the label is defined before using countReset to avoid errors.

console.dir("Directory");
// This code logs an interactive list of the properties of the specified object to the console.
// It can be useful for inspecting the structure of an object in detail.
// Ensure that the object is defined before using dir to avoid errors.

console.group("Group");
// This code starts a new group in the console, allowing you to group related log messages together.
// It can help organize console output and make it easier to read.
// Ensure that the group is closed with console.groupEnd() to avoid leaving groups open.

console.groupEnd("Group");
// This code ends the current group in the console.
// It is important to call this after starting a group with console.group() to maintain proper grouping.
// Ensure that you have a corresponding console.group() before calling groupEnd to avoid errors.

console.time("Timer");
// This code starts a timer with the specified label.
// It can be used to measure the time taken for a specific operation or code block.
// Ensure that the label is defined before using time to avoid errors.

console.timeEnd("Timer");
// This code stops the timer with the specified label and logs the elapsed time to the console.
// It is important to call this after starting a timer with console.time() to get accurate timing.
// Ensure that the label matches the one used in console.time() to avoid errors.

console.table([
  { a: 1, b: 2 },
  { a: 3, b: 4 },
]);
// This code logs an array of objects as a table in the console.
// It can be useful for displaying structured data in a readable format.
// Ensure that the array is defined before using table to avoid errors.

console.info("Info");
// This code logs an informational message to the console.
// It can be used to provide additional context or information about the application state.
// Ensure that the message is defined before using info to avoid errors.
