/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

var chunk = function (arr, size) {
  let net = [];
  for (const num of arr) {
    if (net.length >= size) {
      net = [];
    }
    net.push(num);
    console.log(net);
  }
};

let arr = [1, 2, 3, 4, 5, 6];
let size = 3;

chunk(arr, size);
