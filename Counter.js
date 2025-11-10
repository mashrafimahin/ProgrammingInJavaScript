/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let count = init;
  const res = () => {
    count = init;
    return count;
  };
  const inc = () => {
    count = count;
    return ++count;
  };
  const dec = () => {
    count = count;
    return --count;
  };

  return { increment: inc, reset: res, decrement: dec };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
