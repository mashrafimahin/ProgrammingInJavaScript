/**
 * @param {Function} fn
 * @return {Function}
 */

var once = function (fn) {
  // state
  let called = false;
  return function (...args) {
    // conditions
    if (called) return;
    called = true;
    return fn(...args);
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // returns undefined without calling fn
