/*
 ! Problem: Sum of all positive numbers only

 ? Proccess:
    *  take initial sum variable
    *  run loop
    *  set condition for numbers up or equal to zero
    *  do sum and return
 */

// function
function myFunc(val) {
    // initial
    let sum = 0;

    // loop 
    for (let i = 0; i < val.length; i++) {
        if (val[i] >= 0) {
            sum += val[i]
        }
    }

    // return
    return sum;
}

// print the values
const numbers = [-3,-2,-1,0,1,2,3];

myFunc(numbers)
