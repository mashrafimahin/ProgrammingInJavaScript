//! Problem: To Be Or Not To Be/LeetCode(2704)

//? Description:
//* Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
//* toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//* notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

//? Example:
//* Input: func = () => expect(5).toBe(5)
//* Output: {"value": true}
//* Explanation: 5 === 5 so this expression returns true.

//! Solution:
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  // assertive
  const toBe = (param) => {
    if (val !== param) throw new Error("Not Equal");
    return param === val;
  };
  // negative
  const notToBe = (param) => {
    if (val === param) throw new Error("Equal");
    return param !== val;
  };
  // object
  return { toBe, notToBe };
};

//! Testcases:
expect(5).toBe(2); // true
expect(5).notToBe(5); // throws "Equal"
