//! Problem: Counter II/LeetCode(2665)

//? Description:
//* Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
//* The three functions are:
//* increment() increases the current value by 1 and then returns it.
//* decrement() reduces the current value by 1 and then returns it.
//* reset() sets the current value to init and then returns it.

//? Example:
//* Input: init = 5, calls = ["increment","reset","decrement"]
//* Output: [6,5,4]
//* Explanation:
//* const counter = createCounter(5);
//* counter.increment(); // 6
//* counter.reset(); // 5
//* counter.decrement(); // 4

//! Solution:
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let current = init;

  return {
    increment: () => ++current,
    decrement: () => --current,
    reset: () => (current = init),
  };
};

//! Testcases:
const counter = createCounter(5);
const result = [counter.increment(), counter.reset(), counter.decrement()];
