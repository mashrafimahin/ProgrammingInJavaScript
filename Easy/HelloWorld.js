//! Problem: Create Hello World Function/LeetCode(2667)

//? Description:
//* Write a function createHelloWorld. It should return a new function that always returns "Hello World".

//? Example:
//* Input: args = []
//* Output: "Hello World"
//* Explanation:
//* const f = createHelloWorld();
//* f(); // "Hello World"
//* The function returned by createHelloWorld should always return "Hello World".

//! Solution:
/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

//! Testcases:
const f = createHelloWorld();
f(); // "Hello World"
