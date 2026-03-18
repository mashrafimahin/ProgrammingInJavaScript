//! Problem: Join Two Arrays by ID/LeetCode(2722)

//? Description:
//* Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value.

//* joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

//* If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

//* If two objects share an id, their properties should be merged into a single object:

//* If a key only exists in one object, that single key-value pair should be included in the object.
//* If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

//? Example:
//* Input:
//* arr1 = [
//*     {"id": 1, "x": 1},
//*     {"id": 2, "x": 9}
//* ],
//* arr2 = [
//*     {"id": 3, "x": 5}
//* ]
//* Output:
//* [
//*     {"id": 1, "x": 1},
//*     {"id": 2, "x": 9},
//*     {"id": 3, "x": 5}
//* ]
//* Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.

//! Solution:
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  // empty array
  let result = {};

  // put arr1 value inside result
  for (let i = 0; i < arr1.length; i++) {
    result[arr1[i].id] = arr1[i];
  }

  // put arr2 by checking the first one
  for (let j = 0; j < arr2.length; j++) {
    // if exists
    if (result[arr2[j].id]) {
      // override id name
      for (const key in arr2[j]) result[arr2[j].id][key] = arr2[j][key];
    }
    // add into object
    else {
      result[arr2[j].id] = arr2[j];
    }
  }

  // return result
  return Object.values(result);
};

//! Testcases:
const arr1 = [
    { id: 1, x: 1 },
    { id: 2, x: 9 },
  ],
  arr2 = [{ id: 3, x: 5 }];

// fn execute by passing parameters
join(arr1, arr2);
