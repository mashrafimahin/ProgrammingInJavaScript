//! Problem: Call Function with Custom Context/LeetCode(2693)

//? Description:
//* Enhance all functions to have the callPolyfill method. The method accepts an object obj as its first parameter and any number of additional arguments. The obj becomes the this context for the function. The additional arguments are passed to the function (that the callPolyfill method belongs on).

//* For example if you had the function:
//* function tax(price, taxRate) {
//*   const totalCost = price * (1 + taxRate);
//*   console.log(`The cost of ${this.item} is ${totalCost}`);
//* }

//* Calling this function like tax(10, 0.1) will log "The cost of undefined is 11". This is because the this context was not defined.

//* However, calling the function like tax.callPolyfill({item: "salad"}, 10, 0.1) will log "The cost of salad is 11". The this context was appropriately set, and the function logged an appropriate output.

//* Please solve this without using the built-in Function.call method.

//? Example:
//* Input:
//* fn = function add(b) {
//*   return this.a + b;
//* }
//* args = [{"a": 5}, 7]
//* Output: 12
//* Explanation:
//* fn.callPolyfill({"a": 5}, 7); // 12
//* callPolyfill sets the "this" context to {"a": 5}. 7 is passed as an argument.

//! Solution:
/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function (context, ...args) {
  // checkpoint
  if (context === null || context === undefined) {
    context = globalThis;
  } else {
    context = Object(context);
  }

  // make unique symbol
  let sym = Symbol();

  // run function with this
  context[sym] = this;
  const result = context[sym](...args);

  // delete symbol
  delete context[sym];

  // final
  return result;
};

//! Testcases:
function increment() {
  this.count++;
  return this.count;
}
increment.callPolyfill({ count: 1 }); // 2
