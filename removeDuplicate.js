/*
 ! Problem: Remove duplicate characters.

 ? Proccess:
    * empty variables
    * run loop and match if the value is in store or not
    * return statement
*/

// main function
function myFunc(value) {
    // empty variable
    let result = '';

    // loop 
    for (let i = 0; i < value.length; i++) {
        if (!result.includes(value[i])) {
            result += value[i];
        }
    }

    // return 
    return result;
}

// print the values
const str = 'aba';

myFunc(str)
// output: 'ab'
