//! Problem: TwoSum/LeetCode(01)

//? Description:
//* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//* You may assume that each input would have exactly one solution, and you may not use the same element twice.
//* You can return the answer in any order.

//! Example:
//* Input: nums = [2,7,11,15], target = 9
//* Output: [0,1]
//* Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//! Solution:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//? method 01:
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

//? method 02:
var twoSum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;

    if (obj[complement] !== undefined) {
      return [obj[complement], i];
    }

    obj[currentNum] = i;
  }
};

//! Testcase:
twoSum([2, 7, 11, 15], 26);
