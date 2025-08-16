/*
 ! Problem: Count Even or Odd using Object

 ? Proccess:
    * Take a empty object with keys 
    * Add a counter
    * Run loop
    * Add checkpoint for even and odd numbers
 */

// main function
function myFunc(value) {
    // empty object
    let myObj = {
        Even: 0,
        Odd : 0
    }
    // loop 
    for (let i = 0; i < value.length; i++) {
        // check for even
        if (value[i] % 2 === 0) {
            myObj.Even++
        } 
        else {
            myObj.Odd++
        }
    }
    // return statement
    return myObj;
}

// put the values in the function
const numbers = [2,5,7,9];
myFunc(numbers)