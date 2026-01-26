//! Problem: Sleep/LeetCode(2621)

//? Description:
//* Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
//* Note that minor deviation from millis in the actual sleep duration is acceptable.

//? Example:
//* Input: millis = 100
//* Output: 100
//* Explanation: It should return a promise that resolves after 100ms.
//* let t = Date.now();
//* sleep(100).then(() => {
//*   console.log(Date.now() - t); // 100
//* });

//! Solution:
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, millis);
  });
}

//! Testcases:
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
