/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const one = await promise1;
  const two = await promise2;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(one + two);
    }, 1000);
  });
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
