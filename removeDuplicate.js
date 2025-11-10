/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // result
  const arr = [];
  // loop
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
    }
  }
  // output
  return arr;
};

removeDuplicates([1, 1, 2, 2, 3, 3]);
