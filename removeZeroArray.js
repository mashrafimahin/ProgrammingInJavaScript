/*
 ! Problem: Remove zero from array.

 ? Proccess:
    *  take empty variable
    *  run loop and push numbers into empty variable that follows condition
    *  return
 */

// function
function myFunc(value) {
    // empty variable
    let result = [];

    // loop 
    for (let i = 0; i < value.length; i++) {
        if (value[i] !== 0) {
            result.push(Number(value[i]))
        }
    }

    // return 
    return result;
}

// print the values
const arr = [0,1,2,3,4,0];

myFunc(arr)