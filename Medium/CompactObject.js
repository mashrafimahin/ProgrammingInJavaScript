//! Problem: Compact Object/LeetCode(2705)

//? Description:
//* Given an object or array obj, return a compact object.
//* A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
//* You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

//? Example:
//* Input: obj = [null, 0, false, 1]
//* Output: [1]
//* Explanation: All falsy values have been removed from the array.

//! Solution:
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  // checkpoint
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // for array
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }

  // for object
  let newObj = {};
  for (const key in obj) {
    let item = compactObject(obj[key]);
    if (item) {
      newObj[key] = item;
    }
  }
  return newObj;
};

//! Testcases:
const obj = { a: null, b: [false, 1] };
console.log(compactObject(obj));
