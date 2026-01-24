//! Problem: Palindrome Number/LeetCode(09)

//? Description:
//* Given an integer x, return true if x is a palindrome, and false otherwise.
//? Example:
//* Input: x = 121
//* Output: true
//* Explanation: 121 reads as 121 from left to right and from right to left.

//! Solution:
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (typeof x !== "number") return null;

  return x === Number(x.toString().split("").reverse().join(""));
};

//! Testcase:
isPalindrome(121);
