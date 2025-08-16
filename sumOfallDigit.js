/*
 ! Problem: Sum of all digits from a string

 ? Proccess:
    *  take empty variable
    *  run loop
    *  return value to empty variable
 */

// function
function myFunc(value) {
    // empty variable
    let sum = 0;
    // run loop 
    for (let i = 0; i < value.length; i++) {
        sum += Number(value[i]);
    }
    // return
    return sum;
}

// print the values
const nums = '1234';
myFunc(nums)