//! Problem: Check if Object Instance of Class/LeetCode(2618)

//? Description:
//* Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.
//* There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

//? Example:
//* Input: func = () => checkIfInstanceOf(new Date(), Date)
//* Output: true
//* Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

//! Solution:
/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null) return false;
  while (obj !== null) {
    if (obj.constructor === classFunction) {
      return true;
    }
    obj = Object.getPrototypeOf(obj);
  }
  return false;
};

//! Testcases:
console.log(checkIfInstanceOf(new Date(), Date)); // true
