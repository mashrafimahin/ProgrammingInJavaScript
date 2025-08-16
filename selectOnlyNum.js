/*
 ! Problem: Select only numbers.

 ? Proccess:
    *  take empty variable
    *  split input data
    *  run loop and push numbers into empty variable that follows condition
    *  return
 */

// function
function myFunc(value) {
    // empty variable
    let result = [];

    // split input value
    let splited = value.split('')

    // loop 
    for (let i = 0; i < splited.length; i++) {
        if (Number(splited[i])) {
            result.push(Number(splited[i]))
        }
    }

    // return 
    return result;
}

// print the values
const text = '123man';

myFunc(text)