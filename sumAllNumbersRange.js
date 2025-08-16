/*
 ! Problem: Sum of all numbers in a range.

 ? Proccess:
    *  initialize the first & last items form array
    *  take empty variable
    *  run loop
    *  make sum of those digits and return
 */

// function
function myFunc(value) {
    // initial
    const first = value[0];
    const last = value[1];

    // empty
    let sum = 0;

    // loop
    for (let i = first; i <= last; i++) {
        sum += i
        console.log(i)
    }

    // return result
    return sum;
}

// print the values
const range = [1,4]

myFunc(range)
