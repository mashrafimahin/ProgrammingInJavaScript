//! Problem: Length of Last Word/LeetCode(58)

//? Description:
//* Given a string s consisting of words and spaces, return the length of the last word in the string.
//* A word is a maximal substring consisting of non-space characters only.

//? Example:
//* Input: s = "Hello World"
//* Output: 5
//* Explanation: The last word is "World" with length 5.

//! Solution:
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

//! Testcases:
lengthOfLastWord("Hello World");
