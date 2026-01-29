//! Problem: Is Object Empty/LeetCode(2727)

//? Description:
//* Given an object or an array, return if it is empty.
//* An empty object contains no key-value pairs.
//* An empty array contains no elements.
//* You may assume the object or array is the output of JSON.parse.

//? Example:
//* Input: obj = {"x": 5, "y": 42}
//* Output: false
//* Explanation: The object has 2 key-value pairs so it is not empty.

//! Solution:
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Object.keys(obj).length === 0) return true;
  else return false;
};

//! Testcases:
const obj = { x: 1, y: 2 };
isEmpty(obj);
