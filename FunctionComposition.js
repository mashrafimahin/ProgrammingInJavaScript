/**
 * @param {Function[]} functions
 * @return {Function}
 */

var compose = function (functions) {
  let result = 0;

  // closure
  return function (x) {
    for (let i = 0; i < functions.length; i++) {
      let fn = functions[i];
      // console.log(fn(x));
      result += fn(x);
      return result;
    }
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4); // 9
