//! Problem: Return Length of Arguments Passed/LeetCode(2703)

//? Description:
//* Write a function argumentsLength that returns the count of arguments passed to it.z

//? Example:
//* Input: args = [5]
//* Output: 1
//* Explanation:
//* argumentsLength(5); // 1
//* One value was passed to the function so it should return 1.

//! Solution:
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

//! Testcases:
console.log(argumentsLength({}, null, "3")); // 3
